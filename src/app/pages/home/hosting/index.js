/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
import { BWAButton as Button } from '@app/components/atoms';
import {
	BWAContentList,
	BWAContentListRow,
} from '@app/components/molecules';

const ManageMySitesCard = () => (
	<BWAContentListRow
		icon="desktop"
		title={ __( 'Manage My Sites', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Manage your site from Bluehost\'s control panel. You can create backups, set security, and improve performance.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/sites' }
			isSecondary
		>
			{ __( 'Manage', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const EmailCard = () => (
	<BWAContentListRow
		icon="email"
		title={ __( 'Email', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Create email accounts, compose, send, and receive your email from your Bluehost control panel.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/email-office' }
			isSecondary
		>
			{ __( 'Manage', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const DomainsCard = () => (
	<BWAContentListRow
		icon="admin-site"
		title={ __( 'Domains', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Find a new domain and assign it to your site or start a new site with a fresh domain.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/domains' }
			isSecondary
		>
			{ __( 'Find a Domain', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const HelpCard = () => (
	<BWAContentListRow
		icon="editor-help"
		title={ __( 'Help', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/help' }
			isSecondary
		>
			{ __( 'Help Me', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const HostingSection = ( props ) => (
	<BWAContentList title={ __( 'Hosting', 'bluehost-wordpress-plugin' ) } className="hosting">
		<ManageMySitesCard />
		<EmailCard />
		<DomainsCard />
		<HelpCard />
	</BWAContentList>
);

export default HostingSection;
