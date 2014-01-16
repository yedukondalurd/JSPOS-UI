/**
 * Created by yedukondalu.v on 1/10/14.
 */
define(function (require) {
    "use strict";
    var urls = {
        login: {
            checkSession: "session.php?method=''",
            loginUser: "session.php?method=login",
            logoutUser: "session.php?method=logout"
        }
    };
    return urls;
});