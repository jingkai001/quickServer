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

	var $app_template$ = __webpack_require__(10)
	var $app_style$ = __webpack_require__(11)
	var $app_script$ = __webpack_require__(12)
	
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
	            "value": function () {return this.componentName}
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
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"text\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "placeholder": "请输入text"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"email\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "email",
	            "placeholder": "请输入email"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"date\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "date",
	            "placeholder": "请输入date"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"time\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "time",
	            "placeholder": "请输入time"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"number\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "number",
	            "placeholder": "请输入number"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"password\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "password",
	            "placeholder": "请输入password"
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "showChangePrompt"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"radio\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "doc-row"
	          ],
	          "children": [
	            {
	              "type": "label",
	              "attr": {
	                "target": "radio1",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "radio1",
	                "type": "radio",
	                "name": "radio",
	                "value": "radio1"
	              },
	              "id": "radio1",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
	              }
	            },
	            {
	              "type": "label",
	              "attr": {
	                "target": "radio2",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "radio2",
	                "type": "radio",
	                "name": "radio",
	                "value": "radio2",
	                "checked": "true"
	              },
	              "id": "radio2",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
	              }
	            },
	            {
	              "type": "label",
	              "attr": {
	                "target": "radio3",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "radio3",
	                "type": "radio",
	                "name": "radio",
	                "value": "radio3"
	              },
	              "id": "radio3",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
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
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"checkbox\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "doc-row"
	          ],
	          "children": [
	            {
	              "type": "label",
	              "attr": {
	                "target": "checkbox1",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "checkbox1",
	                "type": "checkbox",
	                "name": "checkbox",
	                "value": "checkbox1"
	              },
	              "id": "checkbox1",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
	              }
	            },
	            {
	              "type": "label",
	              "attr": {
	                "target": "checkbox2",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "checkbox2",
	                "type": "checkbox",
	                "name": "checkbox",
	                "value": "checkbox1",
	                "checked": "true"
	              },
	              "id": "checkbox2",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
	              }
	            },
	            {
	              "type": "label",
	              "attr": {
	                "target": "checkbox3",
	                "value": "label1:"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "id": "checkbox3",
	                "type": "checkbox",
	                "name": "checkbox",
	                "value": "checkbox1"
	              },
	              "id": "checkbox3",
	              "classList": [
	                "flex-grow"
	              ],
	              "events": {
	                "change": "showChangePrompt"
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
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "input type=\"button\""
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "doc-row"
	          ],
	          "children": [
	            {
	              "type": "input",
	              "attr": {
	                "type": "button",
	                "value": "确认"
	              },
	              "classList": [
	                "input-button",
	                "input-button-first",
	                "color-1"
	              ],
	              "events": {
	                "click": function (evt) {this.showClickPrompt('确认',evt)}
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "type": "button",
	                "value": "取消"
	              },
	              "classList": [
	                "input-button",
	                "color-2"
	              ],
	              "events": {
	                "click": function (evt) {this.showClickPrompt('取消',evt)}
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "type": "button",
	                "value": "提交"
	              },
	              "classList": [
	                "input-button",
	                "color-3"
	              ],
	              "events": {
	                "click": function (evt) {this.showClickPrompt('提交',evt)}
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
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "设置或清空输入框的值"
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "placeholder": "必须在change事件中同步value才能改变value",
	            "value": function () {return this.inputValue}
	          },
	          "classList": [
	            "input-text"
	          ],
	          "events": {
	            "change": "updateValue"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "doc-row"
	          ],
	          "style": {
	            "marginTop": "30px"
	          },
	          "children": [
	            {
	              "type": "input",
	              "attr": {
	                "type": "button",
	                "value": "设置value值"
	              },
	              "classList": [
	                "input-button",
	                "input-button-first",
	                "color-3"
	              ],
	              "events": {
	                "click": "setValue"
	              }
	            },
	            {
	              "type": "input",
	              "attr": {
	                "type": "button",
	                "value": "清空value值"
	              },
	              "classList": [
	                "input-button",
	                "color-3"
	              ],
	              "events": {
	                "click": "resetValue"
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
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "控制占位符颜色的input"
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "placeholder": "占位符字体是红色的",
	            "placeholderColor": "#FF0000"
	          },
	          "classList": [
	            "input-text"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "获取用户信息"
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "获取"
	          },
	          "events": {
	            "click": "getAccountInfo"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "input-item"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "调用登录小米账号页面"
	          },
	          "classList": [
	            "input-hint"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "登录接口"
	          },
	          "events": {
	            "click": "addAccountInfo"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 11 */
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
	  ".input-item": {
	    "marginBottom": "80px",
	    "flexDirection": "column"
	  },
	  ".input-hint": {
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "30px",
	    "marginLeft": "30px"
	  },
	  ".doc-row": {
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px",
	    "justifyContent": "center"
	  },
	  ".flex-grow": {
	    "flexGrow": 1
	  },
	  ".input-text": {
	    "height": "80px",
	    "lineHeight": "80px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px",
	    "borderTopWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#999999",
	    "borderRightColor": "#999999",
	    "borderBottomColor": "#999999",
	    "borderLeftColor": "#999999",
	    "fontSize": "30px",
	    "backgroundColor": "#ffffff",
	    "borderTopColor:focus": "#f76160",
	    "borderRightColor:focus": "#f76160",
	    "borderBottomColor:focus": "#f76160",
	    "borderLeftColor:focus": "#f76160"
	  },
	  ".input-button": {
	    "flex": 1,
	    "paddingTop": "10px",
	    "paddingRight": "30px",
	    "paddingBottom": "10px",
	    "paddingLeft": "30px",
	    "marginLeft": "30px",
	    "fontSize": "30px",
	    "color": "#ffffff"
	  },
	  ".input-button-first": {
	    "marginLeft": "0px"
	  },
	  ".color-1": {
	    "backgroundColor": "#09ba07"
	  },
	  ".color-2": {
	    "backgroundColor": "#f76160"
	  },
	  ".color-3": {
	    "backgroundColor": "#0faeff"
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _serviceInternal = $app_require$('@app-module/service.internal.account');
	
	var _serviceInternal2 = _interopRequireDefault(_serviceInternal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        componentName: 'input',
	        inputValue: ''
	    },
	
	    showChangePrompt: function showChangePrompt(e) {
	        _system2.default.showToast({
	            message: (e.name === undefined ? '' : '---name: ' + e.name) + (e.value === undefined ? '' : '---value: ' + e.value) + (e.checked === undefined ? '' : '---checked: ' + e.checked) + (e.text === undefined ? '' : '---text: ' + e.text)
	        });
	    },
	    updateValue: function updateValue(e) {
	        this.inputValue = e.text;
	    },
	    setValue: function setValue() {
	        this.inputValue = '欢迎使用直达服务';
	    },
	    resetValue: function resetValue() {
	        this.inputValue = '';
	    },
	    showClickPrompt: function showClickPrompt(msg) {
	        _system2.default.showToast({
	            message: msg
	        });
	    },
	    getAccountInfo: function getAccountInfo() {
	        console.log(JSON.stringify(_serviceInternal2.default.getAccount()));
	    },
	    addAccountInfo: function addAccountInfo() {
	        _serviceInternal2.default.addAccount({
	            success: function success(res) {
	                _system2.default.showToast({
	                    message: res.userId
	                });
	            },
	            fail: function fail(e) {
	                console.log(e);
	            }
	        });
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