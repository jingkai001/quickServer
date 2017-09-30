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

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
	            "value": "Local image: \"/common/img/xmad.jpg\""
	          },
	          "classList": [
	            "item_title"
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
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/xmad.jpg"
	              },
	              "classList": [
	                "image"
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
	            "value": "Internet image: \"http://i3.mifile.cn/a4/xmad_14871524557389_mLCGc.jpg\""
	          },
	          "classList": [
	            "item_title"
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
	              "type": "image",
	              "attr": {
	                "src": "http://i3.mifile.cn/a4/xmad_14871524557389_mLCGc.jpg"
	              },
	              "classList": [
	                "image"
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
	        "img-layout-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "细长型：指定图片的style宽高：750px，250px"
	          }
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
	            "value": "resize-mode=\"cover\"或者\"\"（default）"
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "cover"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"contain\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "contain"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"stretch\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "stretch"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"center\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "center"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"center\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "center"
	              },
	              "classList": [
	                "fixed-size-wh"
	              ],
	              "style": {
	                "width": "50px",
	                "height": "50px"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "img-layout-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "细长型：仅指定图片的style高度：250px"
	          }
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
	            "value": "resize-mode=\"cover\"或者\"\"(default)"
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "cover"
	              },
	              "classList": [
	                "fixed-size-h"
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
	            "value": "resize-mode=\"contain\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "contain"
	              },
	              "classList": [
	                "fixed-size-h"
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
	            "value": "resize-mode=\"stretch\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "stretch"
	              },
	              "classList": [
	                "fixed-size-h"
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
	            "value": "resize-mode=\"center\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x160.jpg",
	                "resizeMode": "center"
	              },
	              "classList": [
	                "fixed-size-h"
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
	        "img-layout-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "矮胖型：指定图片的style高度宽度：750px，250px"
	          }
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
	            "value": "resize-mode=\"cover\"或者\"\"(default)"
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "cover"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"contain\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "contain"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"stretch\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "stretch"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"center\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "center"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	        "img-layout-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "矮胖型：仅指定图片的style高度：250px"
	          }
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
	            "value": "resize-mode=\"cover\"或者\"\"(default)"
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "cover"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"contain\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "contain"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"stretch\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "stretch"
	              },
	              "classList": [
	                "fixed-size-wh"
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
	            "value": "resize-mode=\"center\""
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item-content-with-height"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/img/img_240x40.jpg",
	                "resizeMode": "center"
	              },
	              "classList": [
	                "fixed-size-wh"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
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
	  ".img-layout-header": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#808080"
	  },
	  ".item_container": {
	    "marginTop": "40px",
	    "marginRight": "40px",
	    "marginBottom": "40px",
	    "marginLeft": "40px",
	    "flexDirection": "column"
	  },
	  ".item_title": {
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "20px",
	    "paddingLeft": "0px",
	    "color": "#aaaaaa"
	  },
	  ".item_content": {
	    "height": "250px",
	    "justifyContent": "center"
	  },
	  ".image": {
	    "width": "400px",
	    "height": "300px"
	  },
	  ".item-content-with-height": {
	    "height": "250px",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".fixed-size-wh": {
	    "width": "750px",
	    "height": "250px"
	  },
	  ".fixed-size-h": {
	    "height": "250px"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        component_name: 'image'
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