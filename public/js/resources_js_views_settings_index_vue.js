"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_settings_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  data: function data() {
    return {
      success: false,
      error: false,
      message: '',
      loading: false,
      form_data: {
        site_title: '',
        site_email: '',
        site_contact: '',
        site_address: '',
        site_facebook_link: '',
        site_instagram_link: '',
        site_twitter_link: '',
        admin_stock_sku: '',
        admin_order_sku: '',
        admin_shipping_charge: '',
        admin_estimated_delivery_time: '',
        admin_twilio_order_message: '',
        twilio_auth_sid: '',
        twilio_auth_token: '',
        twilio_whatsapp_from: ''
      },
      logoImageFile: null,
      logoImageFileName: null,
      faviconImageFile: null,
      faviconImageFileName: null,
      websiteLoginFile: null,
      websiteLoginFileName: null,
      websiteRegistrationFile: null,
      websiteRegistrationFileName: null,
      websiteCustomerProfileBgFile: null,
      websiteCustomerProfileBgFileName: null,
      adminLoginFile: null,
      adminLoginFileName: null
    };
  },
  created: function created() {
    this.loadSettings();
  },
  methods: {
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token, formData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Add a request interceptor
                axios.interceptors.request.use(function (config) {
                  // Do something before request is sent
                  _this.loading = true;
                  return config;
                }, function (error) {
                  // Do something with request error
                  _this.loading = false;
                  _this.message = error.data.status;
                  _this.error = true;
                  return Promise.reject(error);
                });

                // Add a response interceptor
                axios.interceptors.response.use(function (response) {
                  _this.loading = false;
                  return response;
                }, function (error) {
                  _this.loading = false;
                  _this.message = error.data.status;
                  _this.error = true;
                  return Promise.reject(error);
                });
                token = JSON.parse(window.localStorage.getItem('token'));
                formData = new FormData(); // WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST
                formData.append('logoImageFile', _this.logoImageFile);
                formData.append('logoImageFileName', _this.logoImageFileName);
                formData.append('faviconImageFile', _this.faviconImageFile);
                formData.append('faviconImageFileName', _this.faviconImageFileName);
                formData.append('websiteLoginFile', _this.websiteLoginFile);
                formData.append('websiteLoginFileName', _this.websiteLoginFileName);
                formData.append('websiteRegistrationFile', _this.websiteRegistrationFile);
                formData.append('websiteRegistrationFileName', _this.websiteRegistrationFileName);
                formData.append('websiteCustomerProfileBgFile', _this.websiteCustomerProfileBgFile);
                formData.append('websiteCustomerProfileBgFileName', _this.websiteCustomerProfileBgFileName);
                formData.append('adminLoginFile', _this.adminLoginFile);
                formData.append('adminLoginFileName', _this.adminLoginFileName);
                _.each(_this.form_data, function (value, key) {
                  formData.append(key, value);
                });
                _context.next = 19;
                return axios.post('/api/setting/save', formData, {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  },
                  'content-type': 'multipart/form-data;charset=utf-8; boundary=' + Math.random().toString().substr(2)
                }).then(function (response) {
                  if (response.data.status != 200) {
                    _this.message = response.data.message;
                    _this.error = true;
                  } else {
                    window.location.reload();
                    _this.message = response.data.message;
                    _this.success = true;
                  }
                })["catch"](function (error) {
                  _this.message = 'Something went wrong !';
                  _this.error = true;
                });
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadSettings: function loadSettings() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = JSON.parse(window.localStorage.getItem('token'));
                _context2.next = 3;
                return axios.get('/api/setting/get', {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    _this2.message = response.data.message;
                    _this2.error = true;
                  } else {
                    console.log(response.data.data.settings);
                    _this2.form_data.site_title = response.data.data.settings.site_title;
                    _this2.form_data.site_email = response.data.data.settings.site_email;
                    _this2.form_data.site_contact = response.data.data.settings.site_contact;
                    _this2.form_data.site_address = response.data.data.settings.site_address;
                    _this2.form_data.site_facebook_link = response.data.data.settings.site_facebook_link;
                    _this2.form_data.site_instagram_link = response.data.data.settings.site_instagram_link;
                    _this2.form_data.site_twitter_link = response.data.data.settings.site_twitter_link;
                    _this2.form_data.admin_stock_sku = response.data.data.settings.admin_stock_sku;
                    _this2.form_data.admin_order_sku = response.data.data.settings.admin_order_sku;
                    _this2.form_data.admin_shipping_charge = response.data.data.settings.admin_shipping_charge;
                    _this2.form_data.admin_twilio_order_message = response.data.data.settings.admin_twilio_order_message;
                    _this2.form_data.twilio_auth_sid = response.data.data.settings.twilio_auth_sid;
                    _this2.form_data.twilio_auth_token = response.data.data.settings.twilio_auth_token;
                    _this2.form_data.twilio_whatsapp_from = response.data.data.settings.twilio_whatsapp_from;
                    _this2.form_data.admin_estimated_delivery_time = response.data.data.settings.admin_estimated_delivery_time;
                    _this2.logoImageFileName = response.data.data.settings.site_logo;
                    _this2.faviconImageFileName = response.data.data.settings.site_favicon;
                    _this2.websiteLoginFileName = response.data.data.settings.website_login_bg;
                    _this2.websiteRegistrationFileName = response.data.data.settings.website_registration_bg;
                    _this2.websiteCustomerProfileBgFileName = response.data.data.settings.website_customer_profile_bg;
                    _this2.adminLoginFileName = response.data.data.settings.admin_login_bg;
                  }
                })["catch"](function (error) {
                  _this2.message = 'Something went wrong !';
                  _this2.error = true;
                });
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleLogoFileObject: function handleLogoFileObject() {
      this.logoImageFile = this.$refs.file.files[0];
      this.logoImageFileName = this.logoImageFile.name;
    },
    handleFaviconFileObject: function handleFaviconFileObject() {
      this.faviconImageFile = this.$refs.faviconFile.files[0];
      this.faviconImageFileName = this.faviconImageFile.name;
    },
    handleWebsiteLoginFileObject: function handleWebsiteLoginFileObject() {
      this.websiteLoginFile = this.$refs.WebsiteLoginFile.files[0];
      this.websiteLoginFileName = this.websiteLoginFile.name;
    },
    handleWebsiteRegistrationFileObject: function handleWebsiteRegistrationFileObject() {
      this.websiteRegistrationFile = this.$refs.WebsiteRegistrationFile.files[0];
      this.websiteRegistrationFileName = this.websiteRegistrationFile.name;
    },
    handleWebsiteCustomerProfileBgFileObject: function handleWebsiteCustomerProfileBgFileObject() {
      this.websiteCustomerProfileBgFile = this.$refs.WebsiteCustomerProfileBgFile.files[0];
      this.websiteCustomerProfileBgFileName = this.websiteCustomerProfileBgFile.name;
    },
    handleAdminLoginFileObject: function handleAdminLoginFileObject() {
      this.adminLoginFile = this.$refs.adminLoginFile.files[0];
      this.adminLoginFileName = this.adminLoginFile.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-slide-group__wrapper{\n    border-right: 20px solid #f3f9fd !important;\n}\n.custom-file{\n    border: 1px solid #999;\n    padding: 10px;\n    border-radius: 4px;\n}\n.custom-file label{\n    margin-right: 30px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/settings/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/settings/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a8b9b0b6& */ "./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/settings/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/settings/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/settings/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/settings/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a8b9b0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=a8b9b0b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/settings/index.vue?vue&type=template&id=a8b9b0b6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard" },
    [
      _c(
        "v-subheader",
        { staticClass: "py-0 d-flex justify-space-between rounded-lg" },
        [
          _c("h3", { staticClass: "text-capitalize" }, [
            _vm._v(_vm._s(this.$route.meta.title)),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-snackbar",
                    {
                      attrs: { top: "", color: "green" },
                      model: {
                        value: _vm.success,
                        callback: function ($$v) {
                          _vm.success = $$v
                        },
                        expression: "success",
                      },
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.message) +
                          "\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-snackbar",
                    {
                      attrs: { top: "", color: "red" },
                      model: {
                        value: _vm.error,
                        callback: function ($$v) {
                          _vm.error = $$v
                        },
                        expression: "error",
                      },
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.message) +
                          "\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs",
                    { attrs: { vertical: "" } },
                    [
                      _c(
                        "v-tab",
                        { staticClass: "text-left" },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v(
                              "\n                            mdi-spider-web\n                        "
                            ),
                          ]),
                          _vm._v(
                            "\n                        Common\n                        "
                          ),
                          _c("v-spacer"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v(
                              "\n                            mdi-web\n                        "
                            ),
                          ]),
                          _vm._v(
                            "\n                        Website\n                        "
                          ),
                          _c("v-spacer"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { staticClass: "text-left" },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v(
                              "\n                                mdi-security\n                            "
                            ),
                          ]),
                          _vm._v(
                            "\n                            Admin\n                        "
                          ),
                          _c("v-spacer"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c("v-card-title", [_vm._v("Common Settings")]),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                { attrs: { enctype: "multipart/form-data" } },
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Site Title",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data.site_title,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_title",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_title",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Email Address",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data.site_email,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_email",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_email",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Contact Number",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data.site_contact,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_contact",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_contact",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Address",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data.site_address,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_address",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_address",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Facebook Page Link",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .site_facebook_link,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_facebook_link",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_facebook_link",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Instagram Page Link",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .site_instagram_link,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_instagram_link",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_instagram_link",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Twitter Page Link",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .site_twitter_link,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "site_twitter_link",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.site_twitter_link",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "logo-input",
                                                        },
                                                      },
                                                      [_vm._v("Site Logo")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "file",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "logo-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleLogoFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.logoImageFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "favicon-input",
                                                        },
                                                      },
                                                      [_vm._v("Site Favicon")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "faviconFile",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "favicon-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleFaviconFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.faviconImageFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "text-right" },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        type: "submit",
                                        color: "indigo",
                                      },
                                      on: { click: _vm.submit },
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text px-8" },
                                        [_vm._v("Save")]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c("v-card-title", [_vm._v("Website Settings")]),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                { attrs: { enctype: "multipart/form-data" } },
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "website-login-input",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Login Page background"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "WebsiteLoginFile",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "website-login-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleWebsiteLoginFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.websiteLoginFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "website-login-input",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Registration Page background"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "WebsiteRegistrationFile",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "website-registration-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleWebsiteRegistrationFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.websiteRegistrationFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "website-login-input",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Customer Profile Page background"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "WebsiteCustomerProfileBgFile",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "website-customer-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleWebsiteCustomerProfileBgFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.websiteCustomerProfileBgFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "text-right" },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        type: "submit",
                                        color: "indigo",
                                      },
                                      on: { click: _vm.submit },
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text px-8" },
                                        [_vm._v("Save")]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c("v-card-title", [_vm._v("Admin Settings")]),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                { attrs: { enctype: "multipart/form-data" } },
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Stock SKU",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .admin_stock_sku,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "admin_stock_sku",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.admin_stock_sku",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Order SKU",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .admin_order_sku,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "admin_order_sku",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.admin_order_sku",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label:
                                                    "Estimated Delivery Time",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .admin_estimated_delivery_time,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "admin_estimated_delivery_time",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.admin_estimated_delivery_time",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Shipping Charge",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .admin_shipping_charge,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "admin_shipping_charge",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.admin_shipping_charge",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label:
                                                    "Twilio message for order",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .admin_twilio_order_message,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "admin_twilio_order_message",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.admin_twilio_order_message",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Twilio Auth SID",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .twilio_auth_sid,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "twilio_auth_sid",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.twilio_auth_sid",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Twilio Auth Token",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .twilio_auth_token,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "twilio_auth_token",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.twilio_auth_token",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Twilio whatsapp form",
                                                  required: "",
                                                  outlined: "",
                                                  clearable: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form_data
                                                      .twilio_whatsapp_from,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form_data,
                                                      "twilio_whatsapp_from",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form_data.twilio_whatsapp_from",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "custom-file d-flex",
                                                },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "custom-file-label text-left",
                                                        attrs: {
                                                          for: "admin-login-input",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Login Page background"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      ref: "adminLoginFile",
                                                      staticClass:
                                                        "custom-file-input",
                                                      attrs: {
                                                        type: "file",
                                                        id: "admin-login-input",
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleAdminLoginFileObject()
                                                        },
                                                      },
                                                    }),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: _vm.adminLoginFileName,
                                                      width: "80",
                                                      height: "80",
                                                      alt: "",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "text-right" },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        type: "submit",
                                        color: "indigo",
                                      },
                                      on: { click: _vm.submit },
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "white--text px-8" },
                                        [_vm._v("Save")]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);