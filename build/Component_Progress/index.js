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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(25)
	var $app_style$ = __webpack_require__(26)
	var $app_script$ = __webpack_require__(27)
	
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

/***/ 25:
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
	              "type": "text",
	              "attr": {
	                "value": "10%（默认：颜色#33b4ff，高度32px）"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "percent": "10"
	              },
	              "classList": [
	                "progress"
	              ]
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
	              "type": "text",
	              "attr": {
	                "value": "20%（默认：颜色#33b4ff，高度32px）"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#09ba07",
	                "percent": "20",
	                "strokeWidth": "10"
	              },
	              "classList": [
	                "progress"
	              ]
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
	              "type": "text",
	              "attr": {
	                "value": "40%（默认：颜色#33b4ff，高度32px）"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#0faeff",
	                "percent": "40",
	                "strokeWidth": "10"
	              },
	              "classList": [
	                "progress"
	              ]
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
	              "type": "text",
	              "attr": {
	                "value": "60%（默认：颜色#33b4ff，高度32px）"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#a020f0",
	                "percent": "60",
	                "strokeWidth": "10"
	              },
	              "classList": [
	                "progress"
	              ]
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
	              "type": "text",
	              "attr": {
	                "value": "80%（默认：颜色#33b4ff，高度32px）"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#f76160",
	                "percent": "80",
	                "strokeWidth": "10"
	              },
	              "classList": [
	                "progress"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_circular"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "默认：宽度高度32px"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#09ba07",
	                "type": "circular"
	              },
	              "classList": [
	                "circular",
	                "circular_0"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_circular"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "高度40px"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#09ba07",
	                "type": "circular"
	              },
	              "classList": [
	                "circular",
	                "circular_1"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_circular"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "高度60px"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#0faeff",
	                "type": "circular"
	              },
	              "classList": [
	                "circular",
	                "circular_2"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_circular"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "高度80px"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#a020f0",
	                "type": "circular"
	              },
	              "classList": [
	                "circular",
	                "circular_3"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_content_circular"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "高度100px"
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "progress",
	              "attr": {
	                "color": "#f76160",
	                "type": "circular"
	              },
	              "classList": [
	                "circular",
	                "circular_4"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 26:
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
	    "marginBottom": "60px",
	    "flexDirection": "column"
	  },
	  ".item_content_circular": {
	    "marginBottom": "60px",
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  ".progress": {
	    "flex": 1,
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px"
	  },
	  ".item_title": {
	    "textAlign": "center"
	  },
	  ".circular_1": {
	    "width": "40px",
	    "height": "40px"
	  },
	  ".circular_2": {
	    "width": "60px",
	    "height": "60px"
	  },
	  ".circular_3": {
	    "width": "80px",
	    "height": "80px"
	  },
	  ".circular_4": {
	    "width": "100px",
	    "height": "100px"
	  }
	}

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        component_name: 'progress'
	    }
	};}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map