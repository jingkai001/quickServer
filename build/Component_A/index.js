(function(){
      
  var createPageHandler = function() {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(1)
	var $app_style$ = __webpack_require__(2)
	var $app_script$ = __webpack_require__(3)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "nav_title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.component_name}
	          },
	          "classList": [
	            "nav_title_detail"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content"
	          ],
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": "http://www.mi.com/",
	                "value": "小米官方网页"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content"
	          ],
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": "/Home",
	                "value": "跳到首页"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "backgroundColor": "#fbf9fe",
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".nav_title": {
	    "paddingTop": "50px",
	    "paddingBottom": "80px",
	    "justifyContent": "center"
	  },
	  ".nav_title_detail": {
	    "paddingTop": "30px",
	    "paddingRight": "40px",
	    "paddingBottom": "30px",
	    "paddingLeft": "40px",
	    "borderTopColor": "#bbbbbb",
	    "borderRightColor": "#bbbbbb",
	    "borderBottomColor": "#bbbbbb",
	    "borderLeftColor": "#bbbbbb",
	    "color": "#bbbbbb",
	    "borderBottomWidth": "2px"
	  },
	  ".item_container": {
	    "marginTop": "0px",
	    "marginRight": "60px",
	    "marginBottom": "50px",
	    "marginLeft": "60px",
	    "flexDirection": "column"
	  },
	  ".item_content": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px",
	    "height": "200px",
	    "marginBottom": "100px",
	    "alignItems": "center",
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        component_name: 'a',
	        show: true
	    }
	};}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map