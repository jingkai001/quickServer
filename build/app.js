(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(19)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	module.exports = {
	  manifest: { "package": "com.application.demo", "name": "quickServer", "versionName": "1.0.0", "versionCode": "1", "icon": "/Common/logo.png", "features": [{ "name": "system.fetch" }, { "name": "system.prompt" }, { "name": "server.internal.account" }], "permissions": [{ "origin": "*" }], "config": { "logLevel": "debug" }, "router": { "entry": "Home", "pages": { "Home": { "component": "index" }, "Component_A": { "component": "index" }, "Component_Div": { "component": "index" }, "Component_Input": { "component": "index" }, "Component_Image": { "component": "index" }, "Component_Progress": { "component": "index" } } }, "display": { "backgroundColor": "#ffffff", "titleBar": true, "titleBarBackgroundColor": "#f2f2f2", "titleBarTextColor": "#414141", "pages": { "Home": { "titleBarText": "新应用组件展示" }, "Component_A": { "titleBarText": "A" }, "Component_Div": { "titleBarText": "Div" }, "Component_Input": { "titleBarText": "Input" }, "Component_Image": { "titleBarText": "Image" }, "Component_Progress": { "titleBarText": "Progress" } } } }
	};}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"quickServer","versionName":"1.0.0","versionCode":"1","icon":"/Common/logo.png","features":[{"name":"system.fetch"},{"name":"system.prompt"},{"name":"server.internal.account"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Component_A":{"component":"index"},"Component_Div":{"component":"index"},"Component_Input":{"component":"index"},"Component_Image":{"component":"index"},"Component_Progress":{"component":"index"}}},"display":{"backgroundColor":"#ffffff","titleBar":true,"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"Home":{"titleBarText":"新应用组件展示"},"Component_A":{"titleBarText":"A"},"Component_Div":{"titleBarText":"Div"},"Component_Input":{"titleBarText":"Input"},"Component_Image":{"titleBarText":"Image"},"Component_Progress":{"titleBarText":"Progress"}}}};
  }
})();
//# sourceMappingURL=app.js.map