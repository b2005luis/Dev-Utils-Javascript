/**
 * Implements all features of paths on application
 * @author Luis Alberto Batista Pedroso
 */
class  PathManager {

    /**
     * @returns {PathManager} An instance of PathManager
     */
    constructor() { }

    /**
     * Get and return the pathname of application
     * @returns {String} A text with the pathname of application
     */
    ApplicationContextPath() {
        return [
            "//",
            window.location.hostname,
            window.location.pathname.split("/")[1]
        ].join("/");
    }

    /**
     * Get and return the complete pathname of application
     * @param {String} module A text with name of module
     * @param {String} complement A text with complement to path
     * @returns {String} A text with complete pathname
     */
    GetModule(module = "", complement = "") {
        return this.ApplicationContextPath() + "/" + [
            module,
            complement
        ].join("/");
    }

    /**
     * Get and return the value of parameter based in the key name
     * @param {String} name A text with the name of parameter
     * @returns {String} A text with the value of parameter
     */
    GetParameterURL(name) {
        let Parameter = new URLSearchParams(window.location.search);
        return Parameter.get(name);
    }
}