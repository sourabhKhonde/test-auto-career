"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkautocareer_frontend"] = self["webpackChunkautocareer_frontend"] || []).push([["src_View_Employer_HideProfile_index_jsx"],{

/***/ "./src/View/Employer/HideProfile/index.jsx":
/*!*************************************************!*\
  !*** ./src/View/Employer/HideProfile/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HideProfile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_HideProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/HideProfile */ \"./src/components/HideProfile/index.jsx\");\n/* harmony import */ var _components_Layout_EmployerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout/EmployerLayout */ \"./src/components/Layout/EmployerLayout.jsx\");\n\n\n\nfunction HideProfile() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout_EmployerLayout__WEBPACK_IMPORTED_MODULE_2__.EmployerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_HideProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n//# sourceURL=webpack://autocareer-frontend/./src/View/Employer/HideProfile/index.jsx?");

/***/ }),

/***/ "./src/components/Employer/SideBar.jsx":
/*!*********************************************!*\
  !*** ./src/components/Employer/SideBar.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sidebar\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"./node_modules/@coreui/react/dist/index.es.js\");\n/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ \"./node_modules/@coreui/icons-react/dist/index.es.js\");\n/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ \"./node_modules/simplebar/dist/simplebar.min.css\");\n/* harmony import */ var _Assets_images_employe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/images/employe.png */ \"./src/Assets/images/employe.png\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ \"./node_modules/@coreui/icons/js/free/cil-delete.js\");\n/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ \"./node_modules/@coreui/icons/js/free/cil-account-logout.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n\n\n\n\n // sidebar nav config\n\n\n\n\nvar Sidebar = function Sidebar(props) {\n  var sidebarShow = props.sidebarShow,\n      setSidebarShow = props.setSidebarShow,\n      foldable = props.foldable,\n      setUnfoldable = props.setUnfoldable;\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();\n  var pathname = location.pathname;\n  var splitLocation = pathname.split(\"/\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CSidebar, {\n    position: \"fixed\",\n    unfoldable: foldable,\n    visible: sidebarShow // onVisibleChange={(visible) => setSidebarShow(visible)}\n    ,\n    className: \"px-4 sidebar-mt bg_White\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CSidebarBrand, {\n    className: \"d-none d-md-flex mt-3\",\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sidebar-brand-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-sm-flex align-items-center gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _Assets_images_employe_png__WEBPACK_IMPORTED_MODULE_4__,\n    alt: \"Profile\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-dark\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h6\", {\n    className: \"fs-17 ff_Montserrat-Semibold\"\n  }, \"Quiz Softwares\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"fs-12 ff_Montserrat-Regular\"\n  }, \"Nagaur\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"small\", {\n    className: \"fs-8 ff_Montserrat-Regular color_Blue\"\n  }, \"Last Profile Updated 04 April\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sidebar-brand-narrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _Assets_images_employe_png__WEBPACK_IMPORTED_MODULE_4__,\n    alt: \"Profile\",\n    className: \"w-100\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"flex-column mt-3 sidebar-Active\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"employer\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/employer'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 fs-14 icon-home color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Dashboard\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"companyprofile\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/companyprofile'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 color_Zambezi fs-14 icon-people\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Company Profile\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"postnewjob\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/postnewjob'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 fs-14 icon-paper color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Post New Job\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"manage-job-posting\" || splitLocation[1] === \"posting-details\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/manage-job-posting'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 color_Zambezi fs-14 icon-people\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Manage Job Posting\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"jobseekers-interest-received\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/jobseekers-interest-received'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2  fs-14 icon-like color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Jobseekers Interest Received\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"invited-discussion\" || splitLocation[1] === \"discussion-details\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/invited-discussion'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 fs-14 icon-morelike color_Zambezi\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Invited For Discussion\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"profile-liked\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/profile-liked'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2  fs-14 icon-discussion color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Profile Liked By Me\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"package-details\" || splitLocation[1] === \"package-summery\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/package-details'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 fs-14 icon-colleagues color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"My Package Details\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"em-password\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/em-password'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 fs-14 icon-lock color_Zambezi\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Change Password\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: splitLocation[1] === \"em-hide-profile\" ? \"active\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '#/em-hide-profile'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 color_Zambezi\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cilDelete\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Hide Profile\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: '/'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"me-2 color_Zambezi\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cilAccountLogout\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"Logout\"))));\n};\n\n//# sourceURL=webpack://autocareer-frontend/./src/components/Employer/SideBar.jsx?");

/***/ }),

/***/ "./src/components/HideProfile/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/HideProfile/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\nfunction Profile() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"mt-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"fs-18 ff_Montserrat-Semibold color_persian-Indigo\"\n  }, \"Delete Profile\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"border-0 mt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n    className: \"px-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-resume px-4 py-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"fs-18 ff_Montserrat-Medium color_Night-Rider\"\n  }, \"Are you sure! You want to hide your profile.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"small\", {\n    className: \"fs-14 ff_Montserrat-Regular color_Zambezi\"\n  }, \"This can't be undone!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"mb-2 mt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    md: 6,\n    sm: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Label, {\n    className: \"color_suva-gray\"\n  }, \"Please Enter Your Login Password To Confirm\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Control, {\n    placeholder: \"Password\",\n    type: \"text\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"my-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    md: 6,\n    sm: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"rounded-pill bg_Red border-0 px-3\"\n  }, \"Hide Profile\"))))))))));\n}\n\n//# sourceURL=webpack://autocareer-frontend/./src/components/HideProfile/index.jsx?");

/***/ }),

/***/ "./src/components/Layout/EmployerLayout.jsx":
/*!**************************************************!*\
  !*** ./src/components/Layout/EmployerLayout.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmployerLayout\": () => (/* binding */ EmployerLayout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Employer_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Employer/SideBar */ \"./src/components/Employer/SideBar.jsx\");\n/* harmony import */ var _Employer_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Employer/Header */ \"./src/components/Employer/Header.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction EmployerLayout(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState2 = _slicedToArray(_useState, 2),\n      sidebarShow = _useState2[0],\n      setSidebarShow = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      unfoldable = _useState4[0],\n      setUnfoldable = _useState4[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Employer_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n    sidebarShow: sidebarShow,\n    setSidebarShow: setSidebarShow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Employer_SideBar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {\n    sidebarShow: sidebarShow,\n    setSidebarShow: setSidebarShow,\n    unfoldable: unfoldable,\n    setUnfoldable: setUnfoldable\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"wrapper d-flex flex-column min-vh-100 bg_Snow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"body flex-grow-1 px-3\"\n  }, props.children)));\n}\n\n//# sourceURL=webpack://autocareer-frontend/./src/components/Layout/EmployerLayout.jsx?");

/***/ })

}]);