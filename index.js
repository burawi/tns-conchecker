var connectivity = require("connectivity");

module.exports = function (lang) {

    var langDefaults = {
        error: 'Error',
        noInternet: 'There is no internet connection',
        ok: 'OK'
    };

    lang = Object.assign({},langDefaults,lang);

    var exports = {};

    exports.ifInternet = function(fn, ifNot) {
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                ifNot();
                break;
            case connectivity.connectionType.wifi:
            case connectivity.connectionType.mobile:
                fn()
                break;
        }
    };

    exports.onlyWithInternet = function(fn) {
        exports.ifInternet(function() {
            fn();
        }, function() {
            alert({
                title: lang.error,
                message: lang.noInternet,
                okButtonText: lang.ok
            });
        });
    };

    return exports;
};
