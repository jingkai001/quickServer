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

	var $app_template$ = __webpack_require__(67)
	var $app_style$ = __webpack_require__(68)
	var $app_script$ = __webpack_require__(69)
	
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

/***/ 67:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "children": [
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "group_container"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "group_content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "introduce"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "lines": "3",
	                        "value": " 以下将展示新应用组件能力，组件样式进供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见新应用开发文档 "
	                      },
	                      "classList": [
	                        "introduce_detail"
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
	                        "item_title"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "容器组件"
	                          },
	                          "classList": function () {return ['item_title_detail', (this.list.compo_view) + '_txt']},
	                          "events": {
	                            "click": function (evt) {this.select_conFn('compo_view',evt)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": function () {return ['item_content', this.list.compo_view]},
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Div',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "div"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_List',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "list"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Refresh',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "refresh"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Richtext',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "richtext"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Stack',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "stack"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Swiper',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "swiper"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Tabs',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "tabs"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
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
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "item_title"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "基础组件"
	                          },
	                          "classList": function () {return ['item_title_detail', (this.list.compo_basic) + '_txt']},
	                          "events": {
	                            "click": function (evt) {this.select_conFn('compo_basic',evt)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": function () {return ['item_content', this.list.compo_basic]},
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_A',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "a"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Image',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "image"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Progress',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "progress"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Span',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "span"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Text',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "text"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
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
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "item_title"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "表单组件"
	                          },
	                          "classList": function () {return ['item_title_detail', (this.list.compo_form) + '_txt']},
	                          "events": {
	                            "click": function (evt) {this.select_conFn('compo_form',evt)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": function () {return ['item_content', this.list.compo_form]},
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Input',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "input"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Label',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "label"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Picker',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "picker"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Slider',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "slider"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Switch',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "switch"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Textarea',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "textarea"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
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
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "item_title"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "其它"
	                          },
	                          "classList": function () {return ['item_title_detail', this.list.compo_others]},
	                          "events": {
	                            "click": function (evt) {this.select_conFn('compo_others',evt)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": function () {return ['item_content', this.list.compo_others]},
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Map',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "map(暂时关闭)"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Component_Video',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "video"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Style_Animation',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "animation"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "item_li"
	                          ],
	                          "events": {
	                            "click": function (evt) {this.detail('Style_Transform',evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": "transform"
	                              },
	                              "classList": [
	                                "item_li_detail"
	                              ]
	                            },
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": "/Common/img/arrow_right.png",
	                                "resizeMode": "contain"
	                              },
	                              "classList": [
	                                "item_arrow_img"
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "backgroundColor": "#fbf9fe",
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".group_container": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".group_content": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".introduce": {
	    "marginTop": "60px",
	    "marginRight": "0px",
	    "marginBottom": "80px",
	    "marginLeft": "0px",
	    "paddingTop": "0px",
	    "paddingRight": "80px",
	    "paddingBottom": "0px",
	    "paddingLeft": "80px"
	  },
	  ".introduce_detail": {
	    "textAlign": "center",
	    "flex": 1,
	    "lineHeight": "50px",
	    "color": "#888888"
	  },
	  ".item_container": {
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "30px",
	    "marginLeft": "30px",
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column"
	  },
	  ".item_title_detail": {
	    "paddingTop": "40px",
	    "paddingRight": "40px",
	    "paddingBottom": "40px",
	    "paddingLeft": "40px",
	    "flex": 1,
	    "color": "#000000"
	  },
	  ".item_content": {
	    "flexDirection": "column",
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px",
	    "display": "none"
	  },
	  ".item_li": {
	    "borderTopColor": "#bbbbbb",
	    "borderRightColor": "#bbbbbb",
	    "borderBottomColor": "#bbbbbb",
	    "borderLeftColor": "#bbbbbb",
	    "borderBottomWidth": "1px",
	    "alignItems": "center"
	  },
	  ".item_li_detail": {
	    "paddingTop": "25px",
	    "paddingRight": "0px",
	    "paddingBottom": "25px",
	    "paddingLeft": "0px",
	    "color": "#000000",
	    "flex": 1
	  },
	  ".item_arrow_img": {
	    "height": "40px",
	    "width": "20px",
	    "marginRight": "30px"
	  },
	  ".show": {
	    "display": "flex"
	  },
	  ".show_txt": {
	    "color": "#cccccc"
	  }
	}

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function () {return {
	        list: {
	            compo_view: '',
	            compo_basic: '',
	            compo_form: '',
	            compo_others: ''
	        }
	    }},
	
	    routePath: function routePath(path, params) {
	        _system2.default.push({ uri: path, params: params });
	    },
	
	
	    activeF: function activeF(list, target, addClass) {
	        var obj = list;
	        if (obj[target] == addClass) {
	            obj[target] = '';
	            return;
	        }
	        for (var key in obj) {
	            obj[key] = '';
	            if (target == key) {
	                obj[key] = addClass;
	            }
	        }
	    },
	
	    select_conFn: function select_conFn(target) {
	        this.activeF(this['list'], target, 'show');
	    },
	
	    detail: function detail(src) {
	        _system2.default.push({ "uri": src });
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