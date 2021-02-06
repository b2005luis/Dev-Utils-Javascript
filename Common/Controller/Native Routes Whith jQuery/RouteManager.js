/**
 * Implements and manager all routes fpr navigations
 * @requires jQuery
 * @author Luis Alberto Batista Pedroso
 */
class RouteManager {

    /**
     * @type Array A array with thw all routes for navigation
     * @example {path: "/Sigm-In", contract: "https://meussite.xpto/login"} Will be redirect user for this page
     * @example {path: "/Sigm-In", contract: "https://meussite.xpto/login/view/form-login.html", element: "#Form-Login"} Will go load content in this Id element
     * @example {path: "/Sigm-In", contract: "https://meussite.xpto/login/view/form-login.html", element: ".Form-Login"} Will go load content in this class element
     * @example {path: "/Sigm-In", contract: "https://meussite.xpto/login/view/form-login.html", element: "form"} Will go load content in this selector element
     */
    Routes = [];

    /**
     * initialize an instance of RouteManager
     * @returns {RouteManager.constructor} An instance of RouteManager
     */
    constructor() {
        let self = this;

        window.onhashchange = function () {
            self.Redirect();
        }
    }

    /**
     * Redirect or load content based in model of route suplied
     * @returns {void}
     */
    Redirect() {
        let selected = window.location.hash.substring(1);

        this.Routes.map(function (route) {
            if (route.path === selected) {
                if (route.element != undefined) {
                    $(route.element).load(route.contract);
                } else {
                    window.location.href = route.contract;
                }
            }
        });
    }

}