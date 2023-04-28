"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_CustomerView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_user_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/user/customer */ "./resources/js/views/user/customer.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageChatComponent",
  props: ['customer'],
  data: function data() {
    return {
      fab: false,
      fav: true,
      menu: false,
      admin: '',
      messages: [],
      hints: true,
      text: ""
    };
  },
  created: function created() {
    var _this = this;
    this.admin = JSON.parse(localStorage.getItem('user') || "[]");
    setTimeout(function () {
      _this.fetchMessages();
    }, 2000);

    // window.Echo.private('chat')
    //     .listen('MessageSent', (e) => {
    //         console.log(e)
    //         //this.messages.push(e.data.message)
    //     });
    window.Echo.channel('chat').listen('.server.created', function (e) {
      //console.log(e.message);
      _this.messages.push(e.message);
    });
  },
  methods: {
    send: function send() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var newMessage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.text.length > 0)) {
                  _context.next = 4;
                  break;
                }
                newMessage = {
                  customer_id: _this2.customer.id,
                  admin_id: _this2.admin.id,
                  message: _this2.text
                };
                _context.next = 4;
                return axios.post('/api/v1/customer/message/save', newMessage).then(function (response) {
                  if (response.data.status === 200) {
                    //console.log(response)
                    _this2.text = '';
                    _this2.messages.push(response.data.message);
                  }
                })["catch"](function (error) {
                  console.log(error);
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchMessages: function fetchMessages() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/v1/customer/message/get/".concat(_this3.customer.id)).then(function (response) {
                  _this3.messages = response.data.message;
                });
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleScroll: function handleScroll() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var token, form_data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                token = JSON.parse(window.localStorage.getItem('token'));
                form_data = {
                  'customer_id': _this4.customer_id,
                  'admin_id': _this4.admin.id
                };
                _context3.next = 4;
                return axios.post("/api/notification/change/all/status", form_data, {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  var data = response.data.data;
                  //this.$emit('MessageStatusChanged',data)
                })["catch"](function (error) {
                  console.log(error);
                });
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    isMobile: function isMobile() {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_chat_PageChatComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/chat/PageChatComponent */ "./resources/js/components/chat/PageChatComponent.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  components: {
    'page-chat': _components_chat_PageChatComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      success: false,
      error: false,
      thumbnail_error: false,
      loading: false,
      message: '',
      item: '',
      user: '',
      orders: '',
      //customer:'',
      stocks: [],
      tab: null
    };
  },
  created: function created() {
    this.getItemData();
  },
  methods: {
    getItemData: function getItemData() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token;
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
                _context.next = 5;
                return axios.get("/api/customer/get/data/".concat(_this.$route.params.id), {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    _this.message = response.data.message;
                    _this.error = true;
                  } else {
                    //this.item = response.data.item;
                    _this.user = response.data.user;
                    _this.orders = response.data.orders;
                  }
                })["catch"](function (error) {
                  _this.message = 'Something went wrong !';
                  _this.error = true;
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  data: function data() {
    return {
      search: '',
      loading: false,
      page: 1,
      per_page: 0,
      dialog: false,
      itemToDelete: '',
      success: false,
      error: false,
      message: '',
      total_admins: '',
      total_customers: '',
      total_drivers: '',
      total_users: '',
      headers: [{
        text: 'Full Name',
        align: 'start',
        sortable: false,
        value: 'full_name'
      }, {
        text: 'Avatar',
        value: 'avatar',
        sortable: false
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Phone',
        value: 'phone'
      }, {
        text: 'DOB',
        value: 'date_of_birth'
      }, {
        text: 'Gender',
        value: 'gender'
      }, {
        text: 'User Type',
        value: 'user_type'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      users: [],
      total: 0
    };
  },
  methods: {
    onButtonClick: function onButtonClick(item) {
      console.log('click on ' + item.no);
    },
    datatableSearch: function datatableSearch($e) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token, _token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!($e.length >= 3)) {
                  _context.next = 4;
                  break;
                }
                token = JSON.parse(window.localStorage.getItem('token'));
                _context.next = 4;
                return axios.get("/api/customer/search-customer/".concat($e, "?page=").concat(_this.page), {
                  params: {
                    'per_page': _this.per_page
                  },
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    console.log(response.data.status);
                  } else {
                    _this.total = response.data.data.total;
                    _this.users = response.data.data.users;
                  }
                })["catch"](function (error) {
                  _this.message = 'Something went wrong !';
                  _this.error = true;
                });
              case 4:
                if (!($e.length <= 0)) {
                  _context.next = 8;
                  break;
                }
                _token = JSON.parse(window.localStorage.getItem('token'));
                _context.next = 8;
                return axios.get("/api/customer?page=".concat(_this.page), {
                  params: {
                    'per_page': _this.per_page
                  },
                  headers: {
                    'Authorization': 'Bearer ' + _token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    console.log(response.data.status);
                  } else {
                    _this.total = response.data.data.total;
                    _this.users = response.data.data.users;
                  }
                })["catch"](function (error) {
                  _this.message = 'Something went wrong !';
                  _this.error = true;
                });
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    paginate: function paginate($e) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.page = $e.page;
                _this2.per_page = $e.itemsPerPage;
                token = JSON.parse(window.localStorage.getItem('token'));
                _context2.next = 5;
                return axios.get("/api/customer?page=".concat(_this2.page), {
                  params: {
                    'per_page': _this2.per_page
                  },
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    console.log(response.data.status);
                  } else {
                    _this2.total = response.data.data.total;
                    _this2.users = response.data.data.users;
                  }
                })["catch"](function (error) {
                  _this2.message = 'Something went wrong !';
                  _this2.error = true;
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getAllUsersData: function getAllUsersData() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // Add a request interceptor
                axios.interceptors.request.use(function (config) {
                  // Do something before request is sent
                  _this3.loading = true;
                  return config;
                }, function (error) {
                  // Do something with request error
                  _this3.loading = false;
                  _this3.message = error.data.status;
                  _this3.error = true;
                  return Promise.reject(error);
                });

                // Add a response interceptor
                axios.interceptors.response.use(function (response) {
                  _this3.loading = false;
                  return response;
                }, function (error) {
                  _this3.loading = false;
                  _this3.message = error.data.status;
                  _this3.error = true;
                  return Promise.reject(error);
                });
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showDeleteDialog: function showDeleteDialog(item) {
      this.dialog = true;
      this.itemToDelete = item.id;
    },
    closeDelete: function closeDelete() {
      this.dialog = false;
    },
    deleteItem: function deleteItem() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var token;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                token = JSON.parse(window.localStorage.getItem('token'));
                _context4.next = 3;
                return axios["delete"]("/api/user/".concat(_this4.itemToDelete), {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    _this4.message = response.data.message;
                    _this4.dialog = false;
                    _this4.error = true;
                  } else {
                    _this4.getAllUsersData();
                    _this4.message = response.data.message;
                    _this4.dialog = false;
                    _this4.success = true;
                  }
                })["catch"](function (error) {
                  _this4.message = 'Something went wrong !';
                  _this4.error = true;
                });
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getAdministrationCardData: function getAdministrationCardData() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var token;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                token = JSON.parse(window.localStorage.getItem('token'));
                _context5.next = 3;
                return axios.get("/api/user/card/card-data", {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                }).then(function (response) {
                  if (response.data.status != 200) {
                    console.log(response.data.status);
                  } else {
                    if (response.data.data != null) {
                      _this5.total_users = response.data.data.total_users;
                      _this5.total_admins = response.data.data.total_admins;
                      _this5.total_customers = response.data.data.total_customers;
                      _this5.total_drivers = response.data.data.total_drivers;
                    }
                  }
                })["catch"](function (error) {
                  _this5.message = 'Something went wrong !';
                  _this5.error = true;
                });
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  created: function created() {
    this.getAllUsersData();
    this.getAdministrationCardData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.text-input{*/\n/*    padding-top: 0px;*/\n/*    padding-bottom: 0px;*/\n/*    border-radius: 100px;*/\n/*}*/\n.chat-container[data-v-6710afaa]{\n    max-width:300px;\n    padding: 0 0;\n}\n.chat-header[data-v-6710afaa] {\n    background-color: #075E54 !important\n}\n.chat-message[data-v-6710afaa] {\n    display: unset !important;\n    white-space: break-spaces;\n}\n.chat-screen[data-v-6710afaa] {\n    max-height: 350px;\n    min-height: 350px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding-left: 0px;\n}\n.flex-none[data-v-6710afaa] {\n    flex: unset;\n}\n.received-message[data-v-6710afaa]::after {\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 54px;\n    right: auto;\n    top: 12px;\n    bottom: auto;\n    border: 12px solid;\n    border-color: #4caf50 transparent transparent transparent;\n}\n.sent-message[data-v-6710afaa]::after {\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: auto;\n    right: 54px;\n    top: 12px;\n    bottom: auto;\n    border: 12px solid;\n    border-color: #3F51B5 transparent transparent transparent;\n}\n.text-box[data-v-6710afaa]{\n    padding: 10px 5px;\n}\n.text-input[data-v-6710afaa]{\n    background: #f2efef;\n    width: 100%;\n    border-radius: 50px;\n    resize: none;\n    border: none;\n    outline: none;\n    padding: 5px 15px;\n}\n.text-input[data-v-6710afaa]:focus{\n    border: none;\n    outline: none;\n}\n.send-btn[data-v-6710afaa]{\n    font-size: 18px;\n    background: #3d783d;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 50px;\n    height: 37px;\n    margin-top: 12px;\n}\n.text_right[data-v-6710afaa]{\n    text-align: right;\n}\n.text_left[data-v-6710afaa]{\n    text-align: left;\n}\n.v-text-field__details[data-v-6710afaa]{\n    display: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.datatable-search[data-v-967f339a]{\n    width: 0px !important;\n}\n.datatable-action-item .v-list-item__icon[data-v-967f339a]:first-child{\n    margin-right: 0px !important;\n}\n.v-list-item[data-v-967f339a]{\n    padding-right: 70px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    min-height: 0px !important;\n}\n.v-list-item__icon[data-v-967f339a]{\n    margin-top: 5px !important;\n    margin-bottom: 5px !important;\n}\n.v-list-item__content[data-v-967f339a]{\n    padding: 0px !important;\n}\n.edit-text[data-v-967f339a]{\n    color: #2196f3;\n}\n.delete-text[data-v-967f339a]{\n     color: #e57373;\n}\n.details-text[data-v-967f339a]{\n     color: #ff9800;\n}\n.chat-text[data-v-967f339a]{\n     color: #4caf50;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_style_index_0_id_6710afaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_style_index_0_id_6710afaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_style_index_0_id_6710afaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_style_index_0_id_967f339a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_style_index_0_id_967f339a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_style_index_0_id_967f339a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/chat/PageChatComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chat/PageChatComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true& */ "./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true&");
/* harmony import */ var _PageChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageChatComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _PageChatComponent_vue_vue_type_style_index_0_id_6710afaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& */ "./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6710afaa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat/PageChatComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/CustomerView.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/user/CustomerView.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerView.vue?vue&type=template&id=33f52918&scoped=true& */ "./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true&");
/* harmony import */ var _CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerView.vue?vue&type=script&lang=js& */ "./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33f52918",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/CustomerView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/customer.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/user/customer.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.vue?vue&type=template&id=967f339a&scoped=true& */ "./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true&");
/* harmony import */ var _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.vue?vue&type=script&lang=js& */ "./resources/js/views/user/customer.vue?vue&type=script&lang=js&");
/* harmony import */ var _customer_vue_vue_type_style_index_0_id_967f339a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& */ "./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "967f339a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/customer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageChatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/customer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/user/customer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_style_index_0_id_6710afaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=style&index=0&id=6710afaa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_style_index_0_id_967f339a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=style&index=0&id=967f339a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageChatComponent_vue_vue_type_template_id_6710afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true&");


/***/ }),

/***/ "./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_33f52918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerView.vue?vue&type=template&id=33f52918&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true&");


/***/ }),

/***/ "./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_967f339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=template&id=967f339a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/chat/PageChatComponent.vue?vue&type=template&id=6710afaa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-xs-center" },
    [
      _c(
        "v-menu",
        {
          attrs: {
            "min-width": "300",
            top: "",
            "close-on-click": false,
            "close-on-content-click": false,
            "nudge-top": 60,
            "offset-x": "",
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                return [
                  _c(
                    "v-fab-transition",
                    [
                      _c(
                        "v-btn",
                        _vm._g(
                          {
                            attrs: {
                              color: "green darken-4",
                              dark: "",
                              fixed: "",
                              bottom: "",
                              right: "",
                              fab: "",
                            },
                            on: {
                              click: function ($event) {
                                _vm.fab = !_vm.fab
                                _vm.menu = false
                              },
                            },
                            model: {
                              value: _vm.fab,
                              callback: function ($$v) {
                                _vm.fab = $$v
                              },
                              expression: "fab",
                            },
                          },
                          on
                        ),
                        [_c("v-icon", [_vm._v("mdi-comment")])],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.menu,
            callback: function ($$v) {
              _vm.menu = $$v
            },
            expression: "menu",
          },
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            { staticStyle: { height: "485px" } },
            [
              _c(
                "div",
                {
                  staticClass: "chat-header py-2 pl-4 pr-4 d-flex",
                  attrs: { dark: "" },
                },
                [
                  _c("p", { staticClass: "white--text" }, [
                    _vm._v("Chat with " + _vm._s(_vm.customer.full_name)),
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: { icon: "" },
                      on: {
                        click: function ($event) {
                          _vm.fab = !_vm.fab
                          _vm.menu = false
                        },
                      },
                    },
                    [
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-close"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-container", { staticClass: "chat-container" }, [
                _c(
                  "ul",
                  {
                    directives: [
                      { name: "chat-scroll", rawName: "v-chat-scroll" },
                    ],
                    staticClass: "chat-screen",
                    attrs: { id: "style-2" },
                    on: { scroll: _vm.handleScroll },
                  },
                  _vm._l(_vm.messages, function (message, index) {
                    return _c(
                      "v-card",
                      { key: message.id, attrs: { flat: "" } },
                      [
                        message.from_id !== _vm.admin.id
                          ? _c(
                              "v-list-item",
                              {
                                key: message.id,
                                staticClass: "message-item text_right",
                              },
                              [
                                _c(
                                  "v-list-item-avatar",
                                  { staticClass: "align-self-start mr-2" },
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { size: "40" } },
                                      [
                                        _c("v-img", {
                                          attrs: { src: message.avatar },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  { staticClass: "received-message" },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "flex-none",
                                        attrs: { color: "success" },
                                      },
                                      [
                                        _c(
                                          "v-card-text",
                                          {
                                            staticClass:
                                              "white--text pa-2 d-flex flex-column",
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "text-caption" },
                                              [
                                                _vm._v(
                                                  _vm._s(message.full_name) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "align-self-start text-subtitle-1",
                                              },
                                              [_vm._v(_vm._s(message.message))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-caption font-italic align-self-end",
                                              },
                                              [_vm._v(_vm._s(message.time))]
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
                            )
                          : _c(
                              "v-list-item",
                              {
                                key: message.id,
                                staticClass: "message-item text_left",
                              },
                              [
                                _c(
                                  "v-list-item-content",
                                  { staticClass: "sent-message justify-end" },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "flex-none",
                                        attrs: { color: "primary" },
                                      },
                                      [
                                        _c(
                                          "v-card-text",
                                          {
                                            staticClass:
                                              "white--text pa-2 d-flex flex-column",
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "text-caption" },
                                              [
                                                _vm._v(
                                                  _vm._s(message.full_name) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-subtitle-1 chat-message",
                                              },
                                              [_vm._v(_vm._s(message.message))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-caption font-italic align-self-start",
                                              },
                                              [_vm._v(_vm._s(message.time))]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-avatar",
                                  { staticClass: "align-self-start ml-2" },
                                  [
                                    _c("v-img", {
                                      attrs: { src: message.avatar },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-box d-flex" },
                [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.text,
                        expression: "text",
                      },
                    ],
                    staticClass: "text-input",
                    attrs: { rows: "2" },
                    domProps: { value: _vm.text },
                    on: {
                      keyup: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.send.apply(null, arguments)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.text = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      staticClass: "white--text send-btn",
                      attrs: { small: "" },
                      on: {
                        click: _vm.send,
                        keyup: function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.send.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("mdi-send")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/CustomerView.vue?vue&type=template&id=33f52918&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Customer Details"),
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { color: "primary", dark: "", link: "" },
              on: {
                click: function ($event) {
                  return _vm.$router.push({ name: "customer" })
                },
              },
            },
            [_vm._v("\n                All Customer\n            ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5" } },
            [
              _c(
                "v-card",
                {},
                [
                  _c("v-card-title", [_vm._v("Customer info")]),
                  _vm._v(" "),
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function () {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                    Key\n                                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                    Value\n                                "
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.user.full_name) +
                                      "\n                                "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Avatar")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { size: "36px" } },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.user.avatar,
                                            alt: _vm.user.first_name,
                                          },
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Email")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.user.email) +
                                      "\n                                "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Phone")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.user.phone) +
                                      "\n                                "
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("page-chat", { attrs: { customer: _vm.user } }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "7" } },
            [
              _c(
                "v-card",
                { staticClass: "mb-5" },
                [_c("v-card-title", [_vm._v("Order History")])],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.orders, function (order, index) {
                return _vm.orders.length > 0
                  ? _c(
                      "v-card",
                      { key: order.id, staticClass: "mb-5" },
                      [
                        _c(
                          "v-card-title",
                          [
                            _c("div", {}, [_vm._v("#" + _vm._s(order.SKU))]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                staticClass: "text-capitalize",
                                attrs: {
                                  color: _vm.$helpers.getOrderStatusColor(
                                    order.status
                                  ),
                                  dark: "",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(order.status) +
                                    "\n                        "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("v-simple-table", {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Key\n                                "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Value\n                                "
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tbody", [
                                      _c("tr", [
                                        _c("td", [
                                          _vm._v("Total Product Quantity"),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                order.total_product_quantity
                                              ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [_vm._v("Total Price")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(order.total_price) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [_vm._v("Address")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(order.address) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [_vm._v("Order Date")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(order.created_at) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                        _vm._v(" "),
                        _c("v-card-title", [_vm._v("Products")]),
                        _vm._v(" "),
                        _c("v-simple-table", {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Image\n                                "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Name\n                                "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Price\n                                "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Quantity\n                                "
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        order.products,
                                        function (product, index) {
                                          return order.products.length > 0
                                            ? _c("tr", { key: product.id }, [
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "v-avatar",
                                                      {
                                                        attrs: { size: "36px" },
                                                      },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            src: product.image,
                                                            alt: product.name,
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(product.name)),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(product.price)),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(product.quantity)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e()
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
                    )
                  : _vm._e()
              }),
            ],
            2
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/customer.vue?vue&type=template&id=967f339a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { lg: "12", cols: "12" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { lg: "3", cols: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "rounded-lg",
                          attrs: { elevation: "2" },
                        },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticClass:
                                "d-flex justify-space-between align-center",
                            },
                            [
                              _c("div", [
                                _c("strong", [_vm._v("Total User")]),
                                _vm._v(" "),
                                _c("br"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-avatar",
                                {
                                  staticStyle: { border: "3px solid #444" },
                                  attrs: {
                                    size: "60",
                                    color: "cyan lighten-3",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "white" } },
                                    [_vm._v(_vm._s(_vm.total_users) + " +")]
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
                    "v-col",
                    { attrs: { lg: "3", cols: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "rounded-lg",
                          attrs: { elevation: "2" },
                        },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticClass:
                                "d-flex justify-space-between align-center",
                            },
                            [
                              _c("div", [
                                _c("strong", [_vm._v("Total Admin")]),
                                _vm._v(" "),
                                _c("br"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-avatar",
                                {
                                  staticStyle: { border: "3px solid #444" },
                                  attrs: {
                                    size: "60",
                                    color: "green darken-2",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "white" } },
                                    [_vm._v(_vm._s(_vm.total_admins) + " +")]
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
                    "v-col",
                    { attrs: { lg: "3", cols: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "rounded-lg",
                          attrs: { elevation: "2" },
                        },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticClass:
                                "d-flex justify-space-between align-center",
                            },
                            [
                              _c("div", [
                                _c("strong", [_vm._v("Total Customer")]),
                                _vm._v(" "),
                                _c("br"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-avatar",
                                {
                                  staticStyle: { border: "3px solid #444" },
                                  attrs: {
                                    size: "60",
                                    color: "purple darken-2",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "white" } },
                                    [_vm._v(_vm._s(_vm.total_customers) + " +")]
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
                    "v-col",
                    { attrs: { lg: "3", cols: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "rounded-lg",
                          attrs: { elevation: "2" },
                        },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticClass:
                                "d-flex justify-space-between align-center",
                            },
                            [
                              _c("div", [
                                _c("strong", [_vm._v("Total Driver")]),
                                _vm._v(" "),
                                _c("br"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-avatar",
                                {
                                  staticStyle: { border: "3px solid #444" },
                                  attrs: {
                                    size: "60",
                                    color: "deep-orange darken-1",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "white" } },
                                    [_vm._v(_vm._s(_vm.total_customers) + " +")]
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
          _vm._v(" "),
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
                        "\n                        " +
                          _vm._s(_vm.message) +
                          "\n                    "
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
                        "\n                        " +
                          _vm._s(_vm.message) +
                          "\n                    "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 py-16",
                    attrs: {
                      headers: _vm.headers,
                      "server-items-length": _vm.total,
                      items: _vm.users,
                      "items-per-page": 5,
                      search: _vm.search,
                      loading: _vm.loading,
                      "loading-text": "Loading... Please wait",
                      "footer-props": {
                        "items-per-page-options": [5, 10, 20],
                        "items-per-page-text": "Items per page",
                        "show-current-page": true,
                        "show-first-last-page": true,
                      },
                    },
                    on: { pagination: _vm.paginate },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function () {
                          return [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "" } },
                              [
                                _c(
                                  "v-toolbar-title",
                                  { staticClass: "text-capitalize" },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$route.meta.title) + "'s List"
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "mx-4",
                                  attrs: { inset: "", vertical: "" },
                                }),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  staticClass: "datatable-search",
                                  attrs: {
                                    "append-icon": "mdi-magnify",
                                    label: "Search...",
                                    "single-line": "",
                                    "hide-details": "",
                                  },
                                  on: { input: _vm.datatableSearch },
                                }),
                              ],
                              1
                            ),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "item.avatar",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("v-avatar", { attrs: { size: "36px" } }, [
                              _c("img", {
                                attrs: {
                                  src: item.avatar,
                                  alt: item.full_name,
                                },
                              }),
                            ]),
                          ]
                        },
                      },
                      {
                        key: "item.user_type",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                staticClass: "text-capitalize",
                                attrs: {
                                  color:
                                    item.user_type == "admin"
                                      ? "green"
                                      : "deep-purple accent-4 white--text",
                                  dark: "",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(item.user_type) +
                                    "\n                            "
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                      {
                        key: "item.action",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-menu",
                              {
                                attrs: { transition: "slide-x-transition" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    color: "black",
                                                    dark: "",
                                                    small: "",
                                                  },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-dots-vertical"),
                                              ]),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  [
                                    _c(
                                      "v-list-item-group",
                                      { staticClass: "datatable-action-item" },
                                      [
                                        _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function ($event) {
                                                return _vm.$router.push({
                                                  name: "customer-details",
                                                  params: { id: item.id },
                                                })
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "v-list-item-icon",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      color: "orange",
                                                      small: "",
                                                    },
                                                  },
                                                  [_vm._v("mdi-eye")]
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  {
                                                    staticClass: "details-text",
                                                  },
                                                  [_vm._v("Details")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            staticClass:
                                              "datatable-dropdown-item",
                                            on: {
                                              click: function ($event) {
                                                return _vm.$router.push({
                                                  name: "customer-chat",
                                                  params: { id: item.id },
                                                })
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "v-list-item-icon",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      color: "green",
                                                      small: "",
                                                    },
                                                  },
                                                  [_vm._v("mdi-comment")]
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  { staticClass: "chat-text" },
                                                  [_vm._v("Chat")]
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
                          ]
                        },
                      },
                    ]),
                  }),
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