/**
 * Implements and manager all routes fpr navigations
 * @requires PathManager
 * @author Luis Alberto Batista Pedroso
 */
class RouteManager {

    ContextPath = new PathManager();

    Routes = [];

    constructor() {
        let self = this;

        window.onhashchange = function () {
            self.Redirect();
        }
    }

    Redirect() {
        let selected = window.location.hash.substring(1);

        this.Routes.map(function (route) {
            if (route.path === selected) {
                window.location.href = route.contract;
            }
        });
    }

}

/**
 * Execute on load and register all routes
 */
new RouteManager().Routes = [
    {path: "/Sign-In", contract: "/GETBSM/Users/Sign-In.html"},
    {path: "/", contract: "/GETBSM"}
];