import {reverse, sortBy as sort} from 'lodash';

/**
 * Mojo sort functionality.
 *
 * @returns {Array}
 */
export default function useMojoSort() {

    /**
     * Sort a collection of Mojo items by date created in ascending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortByDateAddedAscending(items) {
        return items.sort((a, b) => {
            if (a.created_timestamp > b.created_timestamp) {
                return 1;
            } else if (a.created_timestamp < b.created_timestamp) {
                return -1;
            } else {
                // If equal sort by name
                return a.name < b.name ? 1 : -1;
            }
        });
    }

    /**
     * Sort a collection of Mojo items by date created in descending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortByDateAddedDescending(items) {
        return reverse(sortByDateAddedAscending(items));
    }

    /**
     * Sort a collection of Mojo items by price in ascending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortByPriceAscending(items) {
        return sort(items, (item) => parseInt(item.prices.single_domain_license, 10));
    }

    /**
     * Sort a collection of Mojo items by price in descending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortByPriceDescending(items) {
        return reverse(sortByPriceAscending(items));
    }

    /**
     * Sort a collection of Mojo items by sales in ascending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortBySalesAscending(items) {
        return items.sort((a, b) => {
            if (a.sales_count > b.sales_count) {
                return 1;
            } else if (a.sales_count < b.sales_count) {
                return -1;
            } else {
                // If equal sort by name
                return a.name < b.name ? 1 : -1;
            }
        });
    }

    /**
     * Sort a collection of Mojo items by sales in descending order.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function sortBySalesDescending(items) {
        return reverse(sortBySalesAscending(items));
    }

    /**
     * Sort a collection of Mojo items using a specific method and order.
     *
     * @param {Array} items
     * @param {String} method One of 'date', 'price', or 'sales'.
     * @param {String} order One of 'desc' or 'asc'.
     * @returns {Array}
     */
    function sortBy(items, method = 'sales', order = 'desc') {
        switch (method) {
            case 'date':
                return 'desc' === order ? sortByDateAddedDescending(items) : sortByDateAddedAscending(items);
            case 'price':
                return 'desc' === order ? sortByPriceDescending(items) : sortByPriceAscending(items);
            default:
                return 'desc' === order ? sortBySalesDescending(items) : sortBySalesAscending(items);
        }
    }

    return [sortBy];
}