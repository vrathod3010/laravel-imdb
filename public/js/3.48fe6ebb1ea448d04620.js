(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    movie: Object
  },
  methods: {
    releaseDate: function releaseDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMM Do YYYY");
    }
  },
  computed: {
    genresString: function genresString() {
      var result = "";

      for (var i = 0; i < this.movie.genres.length; i++) {
        if (this.movie.genres.length - 1 == i) {
          result += this.movie.genres[i].name;
        } else {
          result += this.movie.genres[i].name + ", ";
        }
      }

      return result;
    },
    movieCrew: function movieCrew() {
      return this.movie.credits.crew.splice(0, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", [
    _c("div", { staticClass: "movie-info border-b border-gray-700" }, [
      _c(
        "div",
        {
          staticClass:
            "container mx-auto px-4 py-16 items-center flex flex-col lg:flex-row"
        },
        [
          _c("img", {
            staticClass:
              "w-96 transition transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl",
            attrs: {
              src: "https://image.tmdb.org/t/p/w500/" + _vm.movie.poster_path,
              alt: "joker",
              width: "md:24rem w-64"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mt-12 lg:mt-0 lg:ml-24" }, [
            _c("h2", { staticClass: "text-4xl font-semibold" }, [
              _vm._v(_vm._s(_vm.movie.title))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center text-gray-300 text-sm mt-1" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current text-orange-400 w-4",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-1" }, [
                  _vm._v(_vm._s(_vm.movie.vote_average * 10) + "%")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mx-2" }, [_vm._v("|")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.releaseDate(_vm.movie.release_date)))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mx-2" }, [_vm._v("|")]),
                _vm._v(" "),
                _c("div", { staticClass: "text-gray-300 text-sm" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.genresString) +
                      "\n                    "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "text-gray-200 mt-8 text-justify" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.movie.overview) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-12" }, [
              _c("h4", { staticClass: "text-white font-semibold" }, [
                _vm._v("Featured Cast")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex mt-4" },
                _vm._l(_vm.movieCrew, function(crew) {
                  return _c("div", { key: crew.id, staticClass: "mr-8" }, [
                    _c("div", [_vm._v(_vm._s(crew.name))]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-sm text-gray-300" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(crew.job) +
                          "\n                            "
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-12" }, [
              _c(
                "button",
                {
                  staticClass:
                    "flex focus:outline-none focus:shadow-outline items-center bg-orange-400 text-gray-800 rounded font-semibold px-5 py-4 hover:bg-orange-500 transition ease-in-out duration-300"
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "w-6 current-fill mr-2",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d:
                            "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                          "clip-rule": "evenodd"
                        }
                      })
                    ]
                  ),
                  _vm._v(
                    "\n                        Play Trailer\n                    "
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "movie-cast border-b border-gray-700" }, [
      _c("div", { staticClass: "container mx-auto px-4 py-16" }, [
        _c("h2", { staticClass: "text-4xl font-semibold" }, [_vm._v("Cast")])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/MovieInfo.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/MovieInfo.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieInfo.vue?vue&type=template&id=77f7f1a5& */ "./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5&");
/* harmony import */ var _MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/MovieInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MovieInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieInfo.vue?vue&type=template&id=77f7f1a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MovieInfo.vue?vue&type=template&id=77f7f1a5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_77f7f1a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);