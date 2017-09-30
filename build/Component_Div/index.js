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

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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
	          "type": "text",
	          "attr": {
	            "value": "flex-direction: row;"
	          },
	          "classList": [
	            "item_detail"
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
	              "type": "text",
	              "attr": {
	                "value": "1"
	              },
	              "classList": [
	                "item",
	                "color_1"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "2"
	              },
	              "classList": [
	                "item",
	                "color_2"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "3"
	              },
	              "classList": [
	                "item",
	                "color_3"
	              ]
	            }
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
	          "type": "text",
	          "attr": {
	            "value": "flex-direction: column;"
	          },
	          "classList": [
	            "item_detail"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "1"
	              },
	              "classList": [
	                "item",
	                "color_1"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "2"
	              },
	              "classList": [
	                "item",
	                "color_2"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "3"
	              },
	              "classList": [
	                "item",
	                "color_3"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
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
	  ".item_detail": {
	    "lineHeight": "50px",
	    "backgroundColor": "#fbf9fe",
	    "paddingTop": "30px",
	    "paddingRight": "0px",
	    "paddingBottom": "30px",
	    "paddingLeft": "50px"
	  },
	  ".item_content_": {
	    "flexDirection": "column",
	    "alignItems": "flex-start"
	  },
	  ".item": {
	    "height": "150px",
	    "width": "150px",
	    "textAlign": "center"
	  },
	  ".color_1": {
	    "backgroundColor": "#09ba07"
	  },
	  ".color_2": {
	    "backgroundColor": "#f76160"
	  },
	  ".color_3": {
	    "backgroundColor": "#0faeff"
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        component_name: 'div'
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