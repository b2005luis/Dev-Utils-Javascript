/**
 * Implement the functions of cookies
 */
class CookieManager {

    /**
     * Extract and return a object with data of cookie based in suplied key
     * @param {String} key A text with key name of cookie
     * @returns {Object} A object with extracted data of cookie
     */
    GetCookie(key) {
        // Default value of cookie
        let value = "";
        // List of processed cookies
        let cookies = this.ProcessCookie();
        // Test if the key did inserted in the cookies
        cookies.forEach(function (Item) {
            value = (key == Item[0]) ? Item[1] : "";
        });
        // Return a value for cookie
        return value;
    }

    /**
     * Define a key and value for create a new cookie
     * @param {String} key A text with the name of cookie
     * @param {any} value A any value for cookie
     * @returns {void}
     */
    SetCookie(key, value) {
        window.document.cookie = [key, value].join("=");
    }

    /**
     * @private Execute a treatmennt for cookies
     * @returns {Array} A array with all values of the cookies
     */
    ProcessCookie() {
        // Initialize the storage of splited data
        let dataCookieSplited = [];
        let processedCookie = [];

        // If defined, extract each cookie
        if (window.document.cookie) {
            dataCookieSplited = window.document.cookie.split(";");
        }

        // Extract each key and value for each cookie
        dataCookieSplited.forEach(function (Item) {
            processedCookie.push(Item.split("="));
        });

        // Remove the empty space in keys of cookies
        for (var i = 0; i < processedCookie.length; i++) {
            processedCookie[i][0] = processedCookie[i][0].trim();
        }

        // Return found value
        return processedCookie;
    }
}