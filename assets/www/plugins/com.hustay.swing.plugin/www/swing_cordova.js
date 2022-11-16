cordova.define("com.hustay.swing.plugin.SwingPlugin", function(require, exports, module) {
    var argscheck = require('cordova/argscheck'),
        channel = require('cordova/channel'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec'),
        cordova = require('cordova');

    /**
     * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
     * phone, etc.
     * @constructor
     */
    function SwingPlugin() {

    }

    /**
     * Get device info
     *
     * @param {Function} successCallback The function to call when the heading data is available
     * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
     */

    SwingPlugin.prototype.runAndApp = function(packageId , successCallback, errorCallback) {
        argscheck.checkArgs('SFF', 'SwingInterfacePlugin.runAndApp', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "runAndApp", [packageId]);
    };

    SwingPlugin.prototype.doBlockCapture = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.doBlockCapture', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "doBlockCapture", []);
    };

    SwingPlugin.prototype.isCanBackKey = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.isCanBackKey', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "isCanBackKey", []);
    };

    SwingPlugin.prototype.setBlackStatusBarColor = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.setBlackStatusBarColor', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "setBlackStatusBarColor", []);
    };

    SwingPlugin.prototype.doBack = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.doBack', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "doBack", []);
    };

    SwingPlugin.prototype.isCanForwardKey = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.isCanForwardKey', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "isCanForwardKey", []);
    };

    SwingPlugin.prototype.clearHistory = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.clearHistory', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "clearHistory", []);
    };

    SwingPlugin.prototype.getOperatorName = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getOperatorName', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getOperatorName", []);
    };

    SwingPlugin.prototype.getCountrylso = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getCountrylso', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getCountrylso", []);
    };

    SwingPlugin.prototype.getRoamingState = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getRoamingState', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getRoamingState", []);
    };

    SwingPlugin.prototype.getLanguage = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getLanguage', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getLanguage", []);
    };

    SwingPlugin.prototype.getGeoLocale = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getGeoLocale', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getGeoLocale", []);
    };

    SwingPlugin.prototype.getPhoneNumber = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getPhoneNumber', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getPhoneNumber", []);
    };

    SwingPlugin.prototype.getGoogleId = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getGoogleId', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getGoogleId", []);
    };

    SwingPlugin.prototype.getImei = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getImei', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getImei", []);
    };

    SwingPlugin.prototype.showWebViewForWeb = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.showWebViewForWeb', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "showWebViewForWeb", []);
    };

    SwingPlugin.prototype.hideWebViewForWeb = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.hideWebViewForWeb', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "hideWebViewForWeb", []);
    };

    SwingPlugin.prototype.doBackForWeb = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.doBackForWeb', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "doBackForWeb", []);
    };

    SwingPlugin.prototype.doNextForWeb = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.doNextForWeb', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "doNextForWeb", []);
    };

    SwingPlugin.prototype.getCurrentUrlByWeb = function(successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'SwingInterfacePlugin.getCurrentUrlByWeb', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "getCurrentUrlByWeb", []);
    };

    SwingPlugin.prototype.doLoadUrl = function(url,successCallback, errorCallback) {
        argscheck.checkArgs('SFF', 'SwingInterfacePlugin.doLoadUrl', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "doLoadUrl", [url]);
    };

    SwingPlugin.prototype.sendCustomCommand = function(command,successCallback, errorCallback) {
        argscheck.checkArgs('SFF', 'SwingInterfacePlugin.sendCustomCommand', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "sendCustomCommand", [command]);
    };

    SwingPlugin.prototype.setWebViewFrame = function(left,top,bottom,right ,successCallback, errorCallback) {
        argscheck.checkArgs('SSSSFF', 'SwingInterfacePlugin.setWebViewFrame', arguments);
        exec(successCallback, errorCallback, "SwingInterfacePlugin", "setWebViewFrame", [left,top,bottom,right]);
    };



    module.exports = new SwingPlugin();
});
