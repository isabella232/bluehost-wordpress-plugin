import apiFetch from '@wordpress/api-fetch';
import {useEffect, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * Staging functionality.
 *
 * @returns {Array}
 */
export default function useStaging() {

    /**
     * Whether or not we are on the production environment.
     *
     * @var {Boolean}
     */
    const [isProduction, setIsProduction] = useState(null);

    /**
     * The notice to be displayed to the user.
     *
     * @var {String}
     */
    const [notice, setNotice] = useState(null);

    /**
     * Whether or not a staging environment exists.
     *
     * @var {Boolean}
     */
    const [hasStaging, setHasStaging] = useState(null);

    /**
     * Whether or not a staging environment is being created.
     *
     * @var {Boolean}
     */
    const [isCreatingStaging, setIsCreatingStaging] = useState(false);

    /**
     * Whether or not we have hit an error state.
     *
     * @var {Boolean}
     */
    const [isError, setIsError] = useState(false);

    /**
     * Whether or not we are actively making an HTTP request.
     *
     * @var {Boolean}
     */
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Set when switching between environments.
     *
     * @var {String} Can be one of 'staging' or 'production'.
     */
    const [switchingTo, setSwitchingTo] = useState('');

    /**
     * Fallback error message.
     *
     * @type {String}
     */
    const unknownErrorMsg = __('An unknown error has occurred.', 'bluehost-wordpress-plugin');

    /**
     * Call the WordPress REST API.
     *
     * @param options
     * @returns {Promise<null>}
     */
    const callApi = async (options) => {

        setIsError(false);
        setIsLoading(true);
        setNotice(null);

        try {
            const response = await apiFetch(options);

            if (response.hasOwnProperty('status') && response.status === 'error') {
                throw new Error(response.message);
            }

            setIsLoading(false);
            return response;

        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setNotice((typeof error === 'object' ? error.message : error) || unknownErrorMsg);
            return null;
        }
    };

    useEffect(() => {
        // Set isProduction
        callApi({path: '/bluehost/v1/staging/environment'})
            .then(response => {
                setIsProduction(response === 'production');
            });

        // Set hasStaging
        callApi({path: '/bluehost/v1/staging'})
            .then(response => {
                if (response !== null) {
                    setHasStaging(response);
                }
            });
    }, []);

    /**
     * Create staging environment.
     */
    async function createEnv() {
        setIsCreatingStaging(true);
        const response = await callApi({path: '/bluehost/v1/staging', method: 'POST'});
        if (response) {
            setHasStaging(true);
        }
        setIsCreatingStaging(false);
    }

    /**
     * Delete the staging environment.
     */
    async function deleteEnv() {
        const response = await callApi({path: '/bluehost/v1/staging', method: 'DELETE'});
        if (response) {
            setHasStaging(false);
            setNotice(__('Staging website destroyed.', 'bluehost-wordpress-plugin'));
            if (!isProduction) {
                switchToEnv('production');
            }
        }
    }

    /**
     * Switch between environments.
     *
     * @param {String} env
     */
    async function switchToEnv(env) {
        setSwitchingTo(env);
        const response = await callApi({path: `/bluehost/v1/staging/switch-to?env=${env}`});
        if (response && response.hasOwnProperty('load_page')) {
            window.location.href = response.load_page;
        }
        setSwitchingTo('');
    }

    /**
     * Clone the production environment to staging.
     */
    async function cloneEnv() {
        const response = await callApi({path: '/bluehost/v1/staging/clone', method: 'POST'});
        if (response) {
            setNotice(__('Website cloned successfully.', 'bluehost-wordpress-plugin'));
        }
    }

    /**
     * Deploy changes from staging to production.
     *
     * @param {String} type One of 'all', 'files', or 'db'
     */
    async function deployChanges(type = 'all') {
        const response = await callApi({path: `/bluehost/v1/staging/deploy?type=${type}`, method: 'POST'});
        if (response) {
            setNotice(__('Changes deployed successfully.', 'bluehost-wordpress-plugin'));
        }
    }

    return [
        {
            hasStaging,
            isCreatingStaging,
            isError,
            isProduction,
            isLoading,
            notice,
            switchingTo
        }, {
            cloneEnv,
            createEnv,
            deleteEnv,
            deployChanges,
            setSwitchingTo,
            setNotice,
            switchToEnv
        }
    ];
}