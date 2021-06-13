(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+YSX":
    /*!**********************************************!*\
      !*** ./src/app/pipes/imagenes-pipes.pipe.ts ***!
      \**********************************************/

    /*! exports provided: ImagenesPipesPipe */

    /***/
    function YSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagenesPipesPipe", function () {
        return ImagenesPipesPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImagenesPipesPipe = /*#__PURE__*/function () {
        function ImagenesPipesPipe() {
          _classCallCheck(this, ImagenesPipesPipe);
        }

        _createClass(ImagenesPipesPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value.length > 0) {
              return value;
            }

            return 'assets/images/defecto.png';
          }
        }]);

        return ImagenesPipesPipe;
      }();

      ImagenesPipesPipe.ɵfac = function ImagenesPipesPipe_Factory(t) {
        return new (t || ImagenesPipesPipe)();
      };

      ImagenesPipesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "imagenesPipes",
        type: ImagenesPipesPipe,
        pure: true
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\digim\OneDrive\Escritorio\beuna buena\tefege\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4/8k":
    /*!***************************************************************************!*\
      !*** ./src/app/components/pagar-components/pagar-components.component.ts ***!
      \***************************************************************************/

    /*! exports provided: PagarComponentsComponent */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagarComponentsComponent", function () {
        return PagarComponentsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pdfmake-wrapper */
      "oNuZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/peticiones-api.service */
      "xwVy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function PagarComponentsComponent_div_0_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r5, " ");
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El nombre como minimo tiene que tener 15 caracteres ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_7_div_8_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagarComponentsComponent_div_0_div_7_div_8_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.nombre.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.nombre.errors.minlength);
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_7_div_13_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.fecha.errors.required);
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El numero de la tarjeta debe contener 16 digitos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_7_div_18_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagarComponentsComponent_div_0_div_7_div_18_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.numero.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.numero.errors.minlength || ctx_r8.numero.errors.maxlength);
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_23_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El ccv debe contener solo 3 digitos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_7_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_7_div_23_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagarComponentsComponent_div_0_div_7_div_23_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.ccv.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.ccv.errors.maxlength || ctx_r9.ccv.errors.minlength);
        }
      }

      var _c0 = function _c0() {
        return ["/carrito"];
      };

      function PagarComponentsComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "VISA");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Nombre del titular:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PagarComponentsComponent_div_0_div_7_div_8_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fecha de caducidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PagarComponentsComponent_div_0_div_7_div_13_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Numero de la tarjeta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PagarComponentsComponent_div_0_div_7_Template_input_keypress_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r17.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PagarComponentsComponent_div_0_div_7_div_18_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "CCV:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PagarComponentsComponent_div_0_div_7_Template_input_keypress_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r19.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PagarComponentsComponent_div_0_div_7_div_23_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagarComponentsComponent_div_0_div_7_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r20.pagarDef();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Pagar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Volver al carrito ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.nombre.invalid && (ctx_r3.nombre.dirty || ctx_r3.nombre.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.fecha.invalid && (ctx_r3.fecha.dirty || ctx_r3.fecha.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.numero.invalid && (ctx_r3.numero.dirty || ctx_r3.numero.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.ccv.invalid && (ctx_r3.ccv.dirty || ctx_r3.ccv.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r3.contactForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0));
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El numero de la tarjeta debe contener 16 digitos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_8_div_8_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagarComponentsComponent_div_0_div_8_div_8_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.numeroPayPal.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.numeroPayPal.errors.minlength || ctx_r21.numeroPayPal.errors.maxlength);
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_8_div_14_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.fechaPayPal.errors.required);
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo obligatorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_21_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El ccv debe contener solo 3 digitos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PagarComponentsComponent_div_0_div_8_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_0_div_8_div_21_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagarComponentsComponent_div_0_div_8_div_21_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.ccvPayPal.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.ccvPayPal.errors.maxlength || ctx_r23.ccvPayPal.errors.minlength);
        }
      }

      function PagarComponentsComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "PAYPAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Numero de PayPal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PagarComponentsComponent_div_0_div_8_Template_input_keypress_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r29.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PagarComponentsComponent_div_0_div_8_div_8_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fecha de caducidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PagarComponentsComponent_div_0_div_8_div_14_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "CCV:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PagarComponentsComponent_div_0_div_8_Template_input_keypress_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r31.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PagarComponentsComponent_div_0_div_8_div_21_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagarComponentsComponent_div_0_div_8_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r32.pagarDef();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Pagar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Volver al carrito ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.contactFormPayPal);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.numeroPayPal.invalid && (ctx_r4.numeroPayPal.dirty || ctx_r4.numeroPayPal.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.fechaPayPal.invalid && (ctx_r4.fechaPayPal.dirty || ctx_r4.fechaPayPal.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ccvPayPal.invalid && (ctx_r4.ccvPayPal.dirty || ctx_r4.ccvPayPal.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r4.contactFormPayPal.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
        }
      }

      function PagarComponentsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Elija metodo de pago");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PagarComponentsComponent_div_0_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r33.metodoPagoElegido = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PagarComponentsComponent_div_0_option_4_Template, 2, 1, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Volver al carrito ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PagarComponentsComponent_div_0_div_7_Template, 28, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PagarComponentsComponent_div_0_div_8_Template, 26, 7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.metodoPagoElegido);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.metodosPago);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.metodoPagoElegido == ctx_r0.metodosPago[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.metodoPagoElegido == ctx_r0.metodosPago[1]);
        }
      }

      var _c1 = function _c1() {
        return ["/home"];
      };

      function PagarComponentsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "PAGADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\xBFDesea un ticket de su compra?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagarComponentsComponent_div_1_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r35.generarPDF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Generar ticket de compra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Para volver al menu principal pulse al aqui");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagarComponentsComponent_div_1_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r37.borrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Volver al menu principal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" El envio se enviar\xE1 a esta direccion: ", ctx_r1.direccion, ",gracias por confiar en nosotros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1));
        }
      }

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;

      var PagarComponentsComponent = /*#__PURE__*/function () {
        function PagarComponentsComponent(servicios, serApi) {
          _classCallCheck(this, PagarComponentsComponent);

          this.servicios = servicios;
          this.serApi = serApi;
          this.metodoPagoElegido = '0';
          this.noPagado = true;
          this.listaPDF = [];
          this.precioFinal = 0;
          this.pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["PdfMakeWrapper"]();
          this.listaCarrito = [];
          this.listaCompra = [];
          this.metodosPago = ['Tarjeta de credito', 'PayPal'];
          this.contactForm = this.createFormGroup();
          this.contactFormPayPal = this.createFormGroupPayPal();
        }

        _createClass(PagarComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listaCarrito = this.servicios.getListaCarrito();
            this.listaCompra = this.servicios.getListaNueva();
            this.listaPDF = this.servicios.getListaNueva();
            this.listaPDF.forEach(function (element) {
              element.forEach(function (elemento) {
                _this.precioFinal += elemento.precio;
              });
            });
          }
        }, {
          key: "generarPDF",
          value: function generarPDF() {
            this.pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('Gracias por comprar con NEW SONY').fontSize(19).relativePosition(100, -25).bold().italics().end);
            this.pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Txt"]('Resumen del pedido:').end);
            this.pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([['NOMBRE', 'PRECIO']]).widths([260, 240]).bold().end);

            for (var index = 0; index < this.listaPDF.length; index++) {
              var element = this.listaPDF[index];

              for (var _index = 0; _index < element.length; _index++) {
                var elemento = element[_index];
                this.nombrePDF = elemento.nombre;
                this.precioPDF = elemento.precio;
                this.pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[this.nombrePDF, this.precioPDF + '€']]).widths([260, 240]).bold().end);
              }
            }

            this.pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_3__["Table"]([[' ', 'Precio Total:' + this.precioFinal + '€']]).widths([260, 240]).bold().end);
            this.pdf.create().open();

            for (var _index2 = 0; _index2 < this.listaCarrito.length; _index2++) {
              var _element = this.listaCarrito[_index2];
              this.listaCarrito.splice(_index2, this.listaCarrito.length);
              this.listaCompra.splice(_index2, this.listaCompra.length);
            }
          }
        }, {
          key: "createFormGroup",
          value: function createFormGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(15)]),
              fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(16)]),
              ccv: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)])
            });
          }
        }, {
          key: "createFormGroupPayPal",
          value: function createFormGroupPayPal() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              numeroPayPal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(16)]),
              fechaPayPal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              ccvPayPal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)])
            });
          }
        }, {
          key: "borrar",
          value: function borrar() {
            for (var index = 0; index < this.listaCarrito.length; index++) {
              var element = this.listaCarrito[index];
              this.listaCarrito.splice(index, this.listaCarrito.length);
              this.listaCompra.splice(index, this.listaCompra.length);
            }
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.contactForm.reset();
            this.contactFormPayPal.reset();
          }
        }, {
          key: "nombre",
          get: function get() {
            return this.contactForm.get('nombre');
          }
        }, {
          key: "fecha",
          get: function get() {
            return this.contactForm.get('fecha');
          }
        }, {
          key: "numero",
          get: function get() {
            return this.contactForm.get('numero');
          }
        }, {
          key: "ccv",
          get: function get() {
            return this.contactForm.get('ccv');
          }
        }, {
          key: "fechaPayPal",
          get: function get() {
            return this.contactFormPayPal.get('fechaPayPal');
          }
        }, {
          key: "numeroPayPal",
          get: function get() {
            return this.contactFormPayPal.get('numeroPayPal');
          }
        }, {
          key: "ccvPayPal",
          get: function get() {
            return this.contactFormPayPal.get('ccvPayPal');
          }
        }, {
          key: "pagarDef",
          value: function pagarDef() {
            this.noPagado = false;
            this.direccion = this.servicios.getCoordenadas();
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode < 48 || charCode > 57) {
              return false;
            }

            return true;
          }
        }]);

        return PagarComponentsComponent;
      }();

      PagarComponentsComponent.ɵfac = function PagarComponentsComponent_Factory(t) {
        return new (t || PagarComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_5__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_6__["PeticionesApiService"]));
      };

      PagarComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: PagarComponentsComponent,
        selectors: [["app-pagar-components"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["id", "pagado", 4, "ngIf"], ["id", "label"], ["id", "eleccion", 1, "form-select", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "botonVolvere", "routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"], ["id", "visarow", 4, "ngIf"], ["id", "paypalrow", 4, "ngIf"], ["id", "visarow"], [1, "form-container"], [3, "formGroup"], ["type", "text", "formControlName", "nombre", "placeholder", " nombre", "required", ""], ["class", "alert alert-danger", 4, "ngIf"], ["type", "date", "formControlName", "fecha"], ["class", "alert alert-danger", "id", "alertaTodosTop", 4, "ngIf"], ["id", "ccvVisaTop"], ["type", "text", "formControlName", "numero", "placeholder", " numero tarjeta", 3, "keypress"], ["maxlength", "3", "type", "password", "formControlName", "ccv", "placeholder", " CCV", 3, "keypress"], ["type", "submit", 1, "btn-send", 3, "disabled", "click"], ["id", "botonVolver", "routerLinkActive", "router-link-active", 1, "btn-send", 3, "routerLink"], [1, "alert", "alert-danger"], ["class", "container-error-message", 4, "ngIf"], [1, "container-error-message"], ["id", "alertaTodosTop", 1, "alert", "alert-danger"], ["id", "paypalrow"], ["type", "text", "formControlName", "numeroPayPal", "placeholder", " numero paypal", 3, "keypress"], ["type", "date", "formControlName", "fechaPayPal"], ["id", "ccvPayPalTop"], ["type", "password", "formControlName", "ccvPayPal", "placeholder", " CCV", "maxlength", "3", 3, "keypress"], ["id", "pagado"], [1, "row"], [2, "color", "limegreen", "font-size", "40px"], [2, "color", "white"], ["id", "centrarSalir", "type", "submit", 1, "btn", "btn-primary", 2, "height", "15%", "width", "15%", 3, "click"], ["id", "centrarSalir", "routerLinkActive", "active", 1, "btn", "btn-primary", 2, "height", "15%", "width", "15%", 3, "routerLink", "click"], ["id", "imagen_pagado", 1, "col"], ["id", "imagen_pagado", "src", "../assets/images/pagadoporfin.webp", "alt", "imagen_pagado"]],
        template: function PagarComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PagarComponentsComponent_div_0_Template, 9, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PagarComponentsComponent_div_1_Template, 19, 3, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.noPagado);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.noPagado);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"]],
        styles: ["#label[_ngcontent-%COMP%]{\r\n    font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n    color: white;\r\n    margin-left: 5px;\r\n}\r\n#eleccion[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    margin-left: 5px;\r\n}\r\n#botonPagar[_ngcontent-%COMP%], #botonVolver[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n\r\n}\r\n#botonVolvere[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-top:7px;\r\n}\r\n#botonPagar[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n#paypalrow[_ngcontent-%COMP%], #visarow[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin-top: 7px;\r\n    margin-left: 10px;\r\n}\r\n#centrarSalir[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n}\r\n#pagado[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n.form-container[_ngcontent-%COMP%]{\r\n    font-family: 95% \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n    max-width: 500px;\r\n    padding: 16px;\r\n    margin: 10px auto;\r\n    background:darkturquoise;\r\n}\r\n.form-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    background:darkturquoise;\r\n    padding: 20px 0;\r\n    font-size: 140%;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    color: #fff;\r\n    margin: -16px;\r\n}\r\n.form-container[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]{\r\n    transition: all 0,30% ease-in-out;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background: white;\r\n    margin-bottom:4%;\r\n    border:1px solid #ccc;\r\n    padding: 3%;\r\n    color: #555;\r\n    font: 95% \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;;\r\n}\r\n.form-container[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    box-sizing:  border-box;\r\n    width: 100%;\r\n    padding: 3%;\r\n    background: #43d1af;\r\n    border-bottom: 2px solid #30c29e;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n    color: #fff;\r\n    border-left-style: none;\r\n    font-size: 15px;\r\n}\r\n.form-container[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%]:hover:not([disabled]){\r\n    background: #2ebc99;\r\n}\r\n.alert-danger[_ngcontent-%COMP%]{\r\n    color:#721c24;\r\n    background: #f8d7da;\r\n    border-color: #f5c6cd;\r\n    margin-bottom: 5px;\r\n}\r\n.container-error-message[_ngcontent-%COMP%]{\r\n    padding: 3px;\r\n}\r\n#alertaTodosTop[_ngcontent-%COMP%]{\r\n    margin-top: 14px;\r\n}\r\n#ccvPayPalTop[_ngcontent-%COMP%]{\r\n    margin-top: 15px !important;\r\n}\r\n#ccvVisaTop[_ngcontent-%COMP%]{\r\n    margin-top: 13px !important;\r\n}\r\n#imagen_pagado[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2FyLWNvbXBvbmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO29DQUNnQztJQUNoQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtvQ0FDZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0lBQ1g7b0NBQ2dDO0FBQ3BDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwYWdhci1jb21wb25lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuI2VsZWNjaW9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuI2JvdG9uUGFnYXIsI2JvdG9uVm9sdmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuI2JvdG9uVm9sdmVyZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxufVxyXG4jYm90b25QYWdhcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiNwYXlwYWxyb3csI3Zpc2Fyb3d7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4jY2VudHJhclNhbGlye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuI3BhZ2Fkb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogOTUlIFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDpkYXJrdHVycXVvaXNlO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciBoMXtcclxuICAgIGJhY2tncm91bmQ6ZGFya3R1cnF1b2lzZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogLTE2cHg7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJde1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAsMzAlIGVhc2UtaW4tb3V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0JTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250OiA5NSUgXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjs7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIC5idG4tc2VuZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiAgYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNkMWFmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMGMyOWU7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZm9ybS1jb250YWluZXIgLmJ0bi1zZW5kOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtcclxuICAgIGJhY2tncm91bmQ6ICMyZWJjOTk7XHJcbn1cclxuLmFsZXJ0LWRhbmdlcntcclxuICAgIGNvbG9yOiM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250YWluZXItZXJyb3ItbWVzc2FnZXtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4jYWxlcnRhVG9kb3NUb3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbiNjY3ZQYXlQYWxUb3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NjdlZpc2FUb3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2ltYWdlbl9wYWdhZG97XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "AElH":
    /*!*****************************************************************!*\
      !*** ./src/app/components/perifericos/perifericos.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PerifericosComponent */

    /***/
    function AElH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerifericosComponent", function () {
        return PerifericosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/peticiones-api.service */
      "xwVy");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/imagenes-pipes.pipe */
      "+YSX");

      function PerifericosComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay perifericos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PerifericosComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "imagenesPipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerifericosComponent_div_17_div_2_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.agregarCarrito(item_r5.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agregar carrito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, item_r5.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio:", item_r5.precio, "\u20AC");
        }
      }

      function PerifericosComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PerifericosComponent_div_17_div_2_Template, 17, 6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listaFiltradaPeriferico);
        }
      }

      var PerifericosComponent = /*#__PURE__*/function () {
        function PerifericosComponent(servicioProductos, toastSvc, apiService, bda) {
          _classCallCheck(this, PerifericosComponent);

          this.servicioProductos = servicioProductos;
          this.toastSvc = toastSvc;
          this.apiService = apiService;
          this.bda = bda;
          this.listaNuevaPrueba = []; //y la usaremos para poner el numerito de datos que tenemos en el carrito y luego la tercera se rellenara con IMAGEN Y PRECIO que luego juntaremos en un futuro en una unica lista para el pago final

          this.identificador = 0;
        } //en el constructor se mete la variable servicio porque sino no tenemos acceso a todos los datos porque los objetos creados estan en los servicios


        _createClass(PerifericosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 

            this.periferico = this.bda.list('Productos').valueChanges();
            this.periferico.forEach(function (element) {
              element.forEach(function (x) {
                if (x.tipo == "periferico") {
                  i++;
                }

                if (_this2.listaPerifericos.length < i && x.tipo == "periferico") {
                  _this2.listaPerifericos.push(x);
                }
              });
            });
            this.perifericoSelected = {
              nombre: "",
              imagen: "",
              descripcion: "",
              precio: 0,
              id: 0,
              tipo: "periferico"
            };
            this.identificador = this.servicioProductos.getIdentificador();
            this.listaPerifericos = this.servicioProductos.getListaPerifericos(); //lo dicho, llenamos el array que hemos creado aqui con los datos del service

            this.listaCarritoNombre = this.servicioProductos.getListaCarrito(); //igualamos lista carritos al del servicio porque sino no va xD
            //this.listaCarritoPrecioImagen = this.servicioProductos.getlistaCarritoPrecioImagen(); //lo mismo que lo anterior
          }
        }, {
          key: "agregarCarrito",
          value: function agregarCarrito(nombre) {
            var _this3 = this;

            /*
            //pide por parametros 3 atributos uno para listaCarrito y dos para listaCarritoPrecioImagen
            this.listaCarrito.push(nombre); //aqui pusheamos el nombre que le pasamos por el html (explicado ahi que dato pasa) para llenar el array en 1 y asi con cada dato que meta
            this.servicioProductos.setListaCarrito = this.listaCarrito; //aqui lo que hacemos es pasar la listaCarrito desde el TS al Service de manera que sera comun con todas las clases
                  this.listaCarritoPrecioImagen.push(precio); //lo mismo que lo anterior
            this.listaCarritoPrecioImagen.push(imagen); //lo mismo que lo anterior
            this.servicioProductos.setlistaCarritoPrecioImagen = this.listaCarritoPrecioImagen; //lo mismo que lo anterior
            */
            this.listaCarritoNombre.push(nombre);
            this.listaPerifericos.forEach(function (objetoC) {
              if (objetoC.nombre == nombre) {
                _this3.perifericoSelected = {
                  nombre: objetoC.nombre,
                  imagen: objetoC.imagen,
                  descripcion: objetoC.descripcion,
                  precio: objetoC.precio,
                  id: _this3.identificador,
                  tipo: objetoC.tipo
                };
                _this3.identificador++;

                _this3.listaNuevaPrueba.push(_this3.perifericoSelected);
              }
            });
            this.servicioProductos.setIdentificador = this.identificador;
            this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
            this.toastSvc.success('Has añadido:' + nombre);
            this.listaNuevaPrueba = [];
          }
        }, {
          key: "filtrarPeriferico",
          value: function filtrarPeriferico(nombre, precio) {
            var _this4 = this;

            this.listaFiltradaPeriferico = [];
            this.listaPerifericos.forEach(function (periferico) {
              if (periferico.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()) && periferico.precio.toString().includes(precio.toString())) {
                _this4.listaFiltradaPeriferico.push(periferico);
              }
            });
          }
        }]);

        return PerifericosComponent;
      }();

      PerifericosComponent.ɵfac = function PerifericosComponent_Factory(t) {
        return new (t || PerifericosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__["PeticionesApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
      };

      PerifericosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PerifericosComponent,
        selectors: [["app-perifericos"]],
        decls: 18,
        vars: 2,
        consts: [["id", "filtrarVidejuegos", 1, "row"], [1, "col"], ["id", "centrarInput"], ["type", "text", "placeholder", "Introduce el nombre del periferico", 1, "form-control", "position-relative"], ["inputNombre", ""], ["type", "text", "placeholder", "Introduce el precio del periferico", 1, "form-control", "position-relative"], ["inputPrecio", ""], ["id", "botonFiltrar", 1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["id", "alertNohay", "role", "alert", 1, "alert", "alert-secondary"], ["id", "rowVideojuegos", 1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["alt", "imagen_vegetal", 1, "card-img-top", 2, "height", "18rem", "width", "18rem", 3, "src"], [1, "list-group", "list-group-flush"], ["id", "nombrePro", 1, "card-title"], ["id", "descripcionPro", 1, "card-text"], ["id", "precioPro", 1, "list-group-item"], [1, "card-body"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "250px", "height", "46px", 3, "click"]],
        template: function PerifericosComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduzca Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerifericosComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.filtrarPeriferico(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PerifericosComponent_div_16_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PerifericosComponent_div_17_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listaFiltradaPeriferico.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagenesPipesPipe"]],
        styles: ["#rowConsolas[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 15px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#imagen[_ngcontent-%COMP%]{\r\n    background-position: inherit;\r\n    background-size: inherit;\r\n    background-attachment: inherit;\r\n}\r\n#rowVideojuegos[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 16px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#botonFiltrar[_ngcontent-%COMP%]{\r\n    margin-top: 31px !important;\r\n    height: 40px;\r\n    width: 85px;\r\n}\r\n#filtrarVidejuegos[_ngcontent-%COMP%]{\r\n    margin-top: 25px !important;\r\n}\r\n#centrarInput[_ngcontent-%COMP%]{\r\n   margin-left: 30%;\r\n   font-family: sans-serif;\r\n   font-size: 20px;\r\n   color: white;\r\n}\r\n#alertNohay[_ngcontent-%COMP%]{\r\n    margin-top: 10px !important;\r\n}\r\n#nombrePro[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n}\r\n#precioPro[_ngcontent-%COMP%]{\r\n    margin-left: 14px;\r\n}\r\n#descripcionPro[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlmZXJpY29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixlQUFlO0dBQ2YsWUFBWTtBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicGVyaWZlcmljb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcm93Q29uc29sYXN7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcbiNpbWFnZW57XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbmhlcml0O1xyXG59XHJcbiNyb3dWaWRlb2p1ZWdvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuI2JvdG9uRmlsdHJhcntcclxuICAgIG1hcmdpbi10b3A6IDMxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG59XHJcbiNmaWx0cmFyVmlkZWp1ZWdvc3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4jY2VudHJhcklucHV0e1xyXG4gICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2FsZXJ0Tm9oYXl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI25vbWJyZVByb3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNwcmVjaW9Qcm97XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4jZGVzY3JpcGNpb25Qcm97XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B/Ku":
    /*!*********************************************************!*\
      !*** ./src/app/components/moviles/moviles.component.ts ***!
      \*********************************************************/

    /*! exports provided: MovilesComponent */

    /***/
    function BKu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovilesComponent", function () {
        return MovilesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/peticiones-api.service */
      "xwVy");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/imagenes-pipes.pipe */
      "+YSX");

      function MovilesComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay moviles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MovilesComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "imagenesPipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovilesComponent_div_17_div_2_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.agregarCarrito(item_r5.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Agregar carrito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, item_r5.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capacidad: ", item_r5.capacidad, "GB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pulgadas: ", item_r5.pixeles, "''");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio: ", item_r5.precio, "\u20AC");
        }
      }

      function MovilesComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovilesComponent_div_17_div_2_Template, 25, 8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listaMovilFiltrada);
        }
      }

      var MovilesComponent = /*#__PURE__*/function () {
        function MovilesComponent(servicioProductos, toastSvc, apiService, bda) {
          _classCallCheck(this, MovilesComponent);

          this.servicioProductos = servicioProductos;
          this.toastSvc = toastSvc;
          this.apiService = apiService;
          this.bda = bda;
          this.listaNuevaPrueba = [];
          this.identificador = 0;
        }

        _createClass(MovilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 

            this.movil = this.bda.list('Productos').valueChanges();
            this.movil.forEach(function (element) {
              element.forEach(function (x) {
                if (x.tipo == "movil") {
                  i++;
                }

                if (_this5.listaMoviles.length < i && x.tipo == "movil") {
                  _this5.listaMoviles.push(x);
                }
              });
            });
            this.movilSelected = {
              nombre: "",
              imagen: "",
              precio: 0,
              descripcion: "",
              capacidad: 0,
              id: 0,
              tipo: "movil",
              pixeles: 0
            };
            this.identificador = this.servicioProductos.getIdentificador();
            this.listaMoviles = this.servicioProductos.getListaMoviles();
            this.listaCarritoNombre = this.servicioProductos.getListaCarrito(); //this.listaNuevaPrueba = this.servicioProductos.getlistaCarritoPrecioImagen();
          }
        }, {
          key: "agregarCarrito",
          value: function agregarCarrito(nombre, precio, imagen) {
            var _this6 = this;

            this.listaCarritoNombre.push(nombre);
            this.listaMoviles.forEach(function (objetoC) {
              if (objetoC.nombre == nombre) {
                _this6.movilSelected = {
                  nombre: objetoC.nombre,
                  imagen: objetoC.imagen,
                  precio: objetoC.precio,
                  descripcion: objetoC.descripcion,
                  capacidad: objetoC.capacidad,
                  id: _this6.identificador,
                  tipo: objetoC.tipo,
                  pixeles: objetoC.pixeles
                };
                _this6.identificador++;

                _this6.listaNuevaPrueba.push(_this6.movilSelected);
              }
            });
            this.servicioProductos.setIdentificador = this.identificador;
            this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
            this.toastSvc.success('Has añadido:' + nombre);
            this.listaNuevaPrueba = [];
          }
        }, {
          key: "filtrarMovil",
          value: function filtrarMovil(nombre, precio) {
            var _this7 = this;

            this.listaMovilFiltrada = [];
            this.listaMoviles.forEach(function (movil) {
              if (movil.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()) && movil.precio.toString().includes(precio.toString())) {
                _this7.listaMovilFiltrada.push(movil);
              }
            });
          }
        }]);

        return MovilesComponent;
      }();

      MovilesComponent.ɵfac = function MovilesComponent_Factory(t) {
        return new (t || MovilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__["PeticionesApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
      };

      MovilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MovilesComponent,
        selectors: [["app-moviles"]],
        decls: 18,
        vars: 2,
        consts: [["id", "filtrarVidejuegos", 1, "row"], [1, "col"], ["id", "centrarInput"], ["type", "text", "placeholder", "Introduce el nombre del movil", 1, "form-control", "position-relative"], ["inputNombre", ""], ["type", "text", "placeholder", "Introduce el precio del movil", 1, "form-control", "position-relative"], ["inputPrecio", ""], ["id", "botonFiltrar", 1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["id", "alertNohay", "role", "alert", 1, "alert", "alert-secondary"], ["id", "rowVideojuegos", 1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "height", "auto"], ["alt", "imagen_vegetal", 1, "card-img-top", 2, "height", "18rem", "width", "18rem", 3, "src"], [1, "list-group", "list-group-flush"], ["id", "nombrePro", 1, "card-title"], ["id", "descripcionPro", 1, "card-text"], ["id", "precioPro", 1, "list-group-item"], [1, "card-body"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "250px", "height", "46px", 3, "click"]],
        template: function MovilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduzca Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovilesComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.filtrarMovil(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovilesComponent_div_16_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovilesComponent_div_17_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listaMovilFiltrada.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagenesPipesPipe"]],
        styles: ["#imagen[_ngcontent-%COMP%]{\r\n    background-position: inherit;\r\n    background-size: inherit;\r\n    background-attachment: inherit;\r\n}\r\n#rowVideojuegos[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 16px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#botonFiltrar[_ngcontent-%COMP%]{\r\n    margin-top: 31px !important;\r\n    height: 40px;\r\n    width: 85px;\r\n}\r\n#filtrarVidejuegos[_ngcontent-%COMP%]{\r\n    margin-top: 25px !important;\r\n}\r\n#centrarInput[_ngcontent-%COMP%]{\r\n   margin-left: 30%;\r\n   font-family: sans-serif;\r\n   font-size: 20px;\r\n   color: white;\r\n}\r\n#alertNohay[_ngcontent-%COMP%]{\r\n    margin-top: 10px !important;\r\n}\r\n#nombrePro[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n}\r\n#precioPro[_ngcontent-%COMP%]{\r\n    margin-left: 14px;\r\n}\r\n#descripcionPro[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixlQUFlO0dBQ2YsWUFBWTtBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibW92aWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlbntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaGVyaXQ7XHJcbn1cclxuI3Jvd1ZpZGVvanVlZ29ze1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxufVxyXG4jYm90b25GaWx0cmFye1xyXG4gICAgbWFyZ2luLXRvcDogMzFweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbn1cclxuI2ZpbHRyYXJWaWRlanVlZ29ze1xyXG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiNjZW50cmFySW5wdXR7XHJcbiAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jYWxlcnROb2hheXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4jbm9tYnJlUHJve1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI3ByZWNpb1Byb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbiNkZXNjcmlwY2lvblByb3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "DsT9":
    /*!*****************************************************************!*\
      !*** ./src/app/components/videojuegos/videojuegos.component.ts ***!
      \*****************************************************************/

    /*! exports provided: VideojuegosComponent */

    /***/
    function DsT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideojuegosComponent", function () {
        return VideojuegosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/peticiones-api.service */
      "xwVy");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/imagenes-pipes.pipe */
      "+YSX");

      function VideojuegosComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay videojuegos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VideojuegosComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "imagenesPipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideojuegosComponent_div_17_div_2_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.agregarCarrito(item_r5.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Agregar carrito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, item_r5.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tiempo medio de juego: ", item_r5.tiempodejuego, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio: ", item_r5.precio, "\u20AC");
        }
      }

      function VideojuegosComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideojuegosComponent_div_17_div_2_Template, 21, 7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listaFiltradaVideojuegos);
        }
      }

      var VideojuegosComponent = /*#__PURE__*/function () {
        function VideojuegosComponent(servicioProductos, toastSvc, apiService, bda) {
          _classCallCheck(this, VideojuegosComponent);

          this.servicioProductos = servicioProductos;
          this.toastSvc = toastSvc;
          this.apiService = apiService;
          this.bda = bda;
          this.listaNuevaPrueba = []; //IGUAL QUE BEBIDAS TS
          //this.identificador = 0
        }

        _createClass(VideojuegosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            var i = 0;
            this.videojuego = this.bda.list('Productos').valueChanges();
            this.videojuego.forEach(function (element) {
              element.forEach(function (x) {
                if (x.tipo == "videojuego") {
                  i++;
                }

                if (_this8.listaVideojuegos.length < i && x.tipo == "videojuego") {
                  _this8.listaVideojuegos.push(x);
                }
              });
            });
            this.videojuegoSelected = {
              nombre: "",
              descripcion: "",
              imagen: "",
              precio: 0,
              tiempodejuego: 0,
              tipo: "videojuego",
              id: 0
            };
            this.identificador = this.servicioProductos.getIdentificador();
            this.listaVideojuegos = this.servicioProductos.getListaVideojuegos();
            this.listaCarritoNombre = this.servicioProductos.getListaCarrito(); //this.listaCarritoPrecioImagen = this.servicioProductos.getlistaCarritoPrecioImagen();
          }
        }, {
          key: "agregarCarrito",
          value: function agregarCarrito(nombre) {
            var _this9 = this;

            /*
             this.listaCarrito.push(nombre);
            this.servicioProductos.setListaCarrito = this.listaCarrito;
                  this.listaCarritoPrecioImagen.push(precio);
            this.listaCarritoPrecioImagen.push(imagen);
            this.servicioProductos.setlistaCarritoPrecioImagen = this.listaCarritoPrecioImagen;
            */
            this.listaCarritoNombre.push(nombre);
            this.listaVideojuegos.forEach(function (objetoC) {
              if (objetoC.nombre == nombre) {
                //this.listaNuevaPrueba.push(objetoC);
                _this9.videojuegoSelected = {
                  nombre: objetoC.nombre,
                  descripcion: objetoC.descripcion,
                  imagen: objetoC.imagen,
                  precio: objetoC.precio,
                  tiempodejuego: objetoC.tiempodejuego,
                  tipo: objetoC.tipo,
                  id: _this9.identificador
                };
                _this9.identificador++;

                _this9.listaNuevaPrueba.push(_this9.videojuegoSelected);
              }
            });
            this.servicioProductos.setIdentificador = this.identificador;
            this.servicioProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
            this.toastSvc.success('Has añadido:' + nombre);
            this.listaNuevaPrueba = [];
          }
        }, {
          key: "filtrarVideojuego",
          value: function filtrarVideojuego(nombre, precio) {
            var _this10 = this;

            this.listaFiltradaVideojuegos = [];
            this.listaVideojuegos.forEach(function (juego) {
              if (juego.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()) && juego.precio.toString().includes(precio.toString())) {
                _this10.listaFiltradaVideojuegos.push(juego);
              }
            });
          }
        }]);

        return VideojuegosComponent;
      }();

      VideojuegosComponent.ɵfac = function VideojuegosComponent_Factory(t) {
        return new (t || VideojuegosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_3__["PeticionesApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
      };

      VideojuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideojuegosComponent,
        selectors: [["app-videojuegos"]],
        decls: 18,
        vars: 2,
        consts: [["id", "filtrarVidejuegos", 1, "row"], [1, "col"], ["id", "centrarInput"], ["type", "text", "placeholder", "Introduce el nombre del videojuego", 1, "form-control", "position-relative"], ["inputNombre", ""], ["type", "text", "placeholder", "Introduce el precio del videojuego", 1, "form-control", "position-relative"], ["inputPrecio", ""], ["id", "botonFiltrar", 1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["id", "alertNohay", "role", "alert", 1, "alert", "alert-secondary"], ["id", "rowVideojuegos", 1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["alt", "imagen_vegetal", 1, "card-img-top", 2, "height", "18rem", "width", "18rem", 3, "src"], [1, "list-group", "list-group-flush"], ["id", "nombrePro", 1, "card-title"], ["id", "descripcionPro", 1, "card-text"], ["id", "precioPro", 1, "list-group-item"], [1, "card-body"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "250px", "height", "46px", 3, "click"]],
        template: function VideojuegosComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduzca Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideojuegosComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.filtrarVideojuego(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VideojuegosComponent_div_16_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VideojuegosComponent_div_17_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listaFiltradaVideojuegos.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagenesPipesPipe"]],
        styles: ["#rowVideojuegos[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 15px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#botonFiltrar[_ngcontent-%COMP%]{\r\n    margin-top: 31px !important;\r\n    height: 40px;\r\n    width: 85px;\r\n}\r\n#filtrarVidejuegos[_ngcontent-%COMP%]{\r\n    margin-top: 25px !important;\r\n}\r\n#centrarInput[_ngcontent-%COMP%]{\r\n   margin-left: 30%;\r\n   font-family: sans-serif;\r\n   font-size: 20px;\r\n   color: white;\r\n}\r\n#alertNohay[_ngcontent-%COMP%]{\r\n    margin-top: 10px !important;\r\n}\r\n#nombrePro[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n}\r\n#precioPro[_ngcontent-%COMP%]{\r\n    margin-left: 14px;\r\n}\r\n#descripcionPro[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvanVlZ29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixlQUFlO0dBQ2YsWUFBWTtBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoidmlkZW9qdWVnb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3dWaWRlb2p1ZWdvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuI2JvdG9uRmlsdHJhcntcclxuICAgIG1hcmdpbi10b3A6IDMxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG59XHJcbiNmaWx0cmFyVmlkZWp1ZWdvc3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4jY2VudHJhcklucHV0e1xyXG4gICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2FsZXJ0Tm9oYXl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI25vbWJyZVByb3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNwcmVjaW9Qcm97XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4jZGVzY3JpcGNpb25Qcm97XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ECQP":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/pagina-inicial-components/pagina-inicial-components.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PaginaInicialComponentsComponent */

    /***/
    function ECQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginaInicialComponentsComponent", function () {
        return PaginaInicialComponentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaginaInicialComponentsComponent = /*#__PURE__*/function () {
        function PaginaInicialComponentsComponent() {
          _classCallCheck(this, PaginaInicialComponentsComponent);
        }

        _createClass(PaginaInicialComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaginaInicialComponentsComponent;
      }();

      PaginaInicialComponentsComponent.ɵfac = function PaginaInicialComponentsComponent_Factory(t) {
        return new (t || PaginaInicialComponentsComponent)();
      };

      PaginaInicialComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginaInicialComponentsComponent,
        selectors: [["app-pagina-inicial-components"]],
        decls: 133,
        vars: 0,
        consts: [["id", "wrapper"], ["id", "seccion_titulo_principal"], ["id", "bienvenidos"], ["id", "seccion_presentacion"], ["id", "quienes"], ["id", "seccion_vendemos"], [1, "quevendemos"], ["id", "seccion_consolas"], [2, "font-size", "50px"], ["id", "seccion_videojuegos"], ["id", "seccion_perifericos"], ["id", "seccion_moviles"]],
        template: function PaginaInicialComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BIENVENIDOS A NEW SONY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xBFQUIENES SOMOS?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " PlayStation es el nombre de una serie de consolas de videojuegos creadas y desarrolladas por Sony Interactive Entertainment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Han estado presentes en la quinta, sexta, s\xE9ptima, octava y novena generaci\xF3n de videoconsolas, la compa\xF1\xEDa promotora est\xE1 actualmente en el mercado con su PlayStation 5.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " La marca se introdujo por primera vez el 3 de diciembre de 1994 en Jap\xF3n y ha desarrollado y publicado cinco videoconsolas de sobremesa, que incluyen un centro de medios de comunicaci\xF3n y un servicio en l\xEDnea, posteriormente se introdujeron revistas y computadoras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " La primera consola de la serie, fue PlayStation, que tambi\xE9n fue la primera en vender 100 millones de unidades.Su sucesora, PlayStation 2, es la segunda consola de la serie, y la m\xE1s vendida de la historia hasta la fecha, alcanzando m\xE1s de 155 millones de unidades vendidas, llegando a estar en el mercado por 13 a\xF1os.PlayStation 3, ha vendido m\xE1s de 87 millones de consolas en todo el mundo,3\u200B despu\xE9s le sigue PlayStation 4 lanzada en 2013 & 2014 con 118 millones de unidades vendidas como la tercera consola en superar dicho formato Y la m\xE1s reciente consola de Sony, PlayStation 5, lanzada en noviembre de 2020, ha llegado a las 2,1 millones de unidades. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xBFQUE VENDEMOS?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "-CONSOLAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "-VIDEOJUEGOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "-PERIF\xC9RICOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "-M\xD3VILES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "CONSOLAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PlayStation 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Su lanzamiento fue el 15 de noviembre de 2013 en Estados Unidos y en Europa y Sudam\xE9rica fue el 29 de noviembre de 2013. Cuenta con una memoria Ram 8 veces m\xE1s potente que la de la PlayStation 3. Esta consola compite con Wii U y Switch de Nintendo y Xbox One de Microsoft.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "PlayStation 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "En una entrevista con Wired en abril de 2019, Mark Cerny, declar\xF3 que Sony estaba trabajando en una quinta consola sin nombre de la marca PlayStation que servir\xEDa como entrada a la pr\xF3xima generaci\xF3n de consolas. Sin embargo, el d\xEDa 8 de octubre de 2019, a trav\xE9s de un comunicado en el blog de Sony PlayStation, Sony hizo oficial el nombre de su consola de pr\xF3xima generaci\xF3n, la cual ser\xE1 llamada PlayStation 5, la empresa a su vez, afirm\xF3 que incluir\xE1 nueva tecnolog\xEDa y mejoras en los controles. De acuerdo con Cerny, la consola usar\xE1 el procesador Ryzen de AMD con la arquitectura Zen 2 de 7 nm y con una GPU de la familia Navi de Radeon que incluye soporte para el renderizado de trazado de rayos en tiempo real, y a\xFAn ser\xEDa compatible con medios f\xEDsicos. La nueva consola contar\xEDa con almacenamiento SSD, ya que Cerny enfatiz\xF3 la necesidad de tiempos de carga r\xE1pidos y mayor ancho de banda para hacer que los videojuegos sean m\xE1s inmersivos, as\xED como para admitir la transmisi\xF3n de contenido requerida del disco para resoluciones gr\xE1ficas de 8K. Cerny afirma que la nueva consola es totalmente compatible con los t\xEDtulos de PlayStation 4 y PlayStation VR, e indica que la transici\xF3n a la nueva consola ser\xEDa suave.Si bien es compatible con videojuegos en streaming, se espera que la consola incluya alg\xFAn tipo de unidad de disco \xF3ptico, para videojuegos que a\xFAn se distribuyan en dichos medios.18\u200B Los rumores de la industria indicaron que la declaraci\xF3n de Cerny coincidi\xF3 con el env\xEDo del kit de desarrollo de software de la futura consola a terceros para evitar m\xE1s rumores. El informe financiero de Sony para el trimestre que finaliz\xF3 el 31 de marzo de 2019 afirm\xF3 que se estaba desarrollando un nuevo hardware de pr\xF3xima generaci\xF3n, pero que no se vender\xEDa antes de abril de 2020. Se espera que la nueva consola tenga compatibilidad intergeneracional. Eso significa que los jugadores podr\xE1n comenzar una partida de un videojuego en la PlayStation 4 o cambiar a la misma partida guardada en la nueva consola y volver a cambiar tambi\xE9n\u200B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "VIDEOJUEGOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ratchet & Clank ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Es otra de las sagas m\xE1s populares de la marca de Playstation y de las m\xE1s queridas por los fanes. Desde su estreno en PlayStation 2 ha sido muy controvertida, debido a sus escenas de sexo y violencia en cada una de sus entregas. La serie se enfoca en el g\xE9nero de Hack and slash, donde el jugador toma control del personaje de Kratos, siendo otro de los personajes m\xE1s emblem\xE1ticos de PlayStation y de los videojuegos. La saga desde mayo de 2019, ha logrado unas ventas de 32 millones de unidades para PlayStation 2, PlayStation 3, PlayStation Vita y PlayStation 4.24\u200B25\u200B La franquicia es desarrollada por SCE Santa Monica Studio.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "God of War");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Es conocida como la serie actual de Sony del g\xE9nero de Plataformas y disparos en tercera persona, m\xE1s importante y conocida de Playstation. La saga gira en torno a Ratchet y su compa\xF1ero Clank en sus aventuras espaciales. La serie la logrado vender cerca de 27 millones de unidades a lo largo de las consolas de PlayStation 2, PlayStation Portable, PlayStation 3, PlayStation Vita y PlayStation 4.26\u200B La serie fue creada por la compa\xF1\xEDa Insomniac Games. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Gran Turismo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Es considerada la franquicia m\xE1s importante y el buque insignia de Playstation. Debido a que es la saga que m\xE1s venta ha tenido con m\xE1s de 80 millones de copias vendidas, durante todas las consolas de Playstation.22\u200B La tem\xE1tica de la saga es en base al g\xE9nero de Videojuego de carreras y simulaci\xF3n, en la cual el jugador deber\xE1 aprender a saber los diferentes mecanismos del auto para lograr un rendimiento eficiente. La franquicia es desarrollada por Polyphony Digital. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Uncharted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Es una de las sagas m\xE1s populares de Playstation y la que mayor premios y reconocimiento ha tenido. Las ventas de la saga que empez\xF3 desde PlayStation 3 con la trilog\xEDa original y posteriormente con nuevas entregas para PlayStation Vita y PlayStation 4, han sido de casi 42 millones de unidades vendidas para diciembre del 2017.23\u200B La saga se enfoca en el g\xE9nero de Videojuego de acci\xF3n-aventura tomando control de Nathan Drake considerado por muchos fanes y cr\xEDticos, como la figura m\xE1s emblem\xE1tica de PlayStation 3, uno de los m\xE1s emblem\xE1ticos para la marca de Playstation y para el mundo de los videojuegos. La saga tiene influencias a la saga de Tomb Raider y la franquicia de pel\xEDculas Indiana Jones. Fue desarrollada por Naughty Dog.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "PERIF\xC9RICOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Mando PS4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "DualShock 4 fue anunciado el 20 de febrero de 2013 y fue lanzado el 15 de noviembre de 2013 junto con la PlayStation 4, en la conferencia PlayStation Meeting, junto con la confirmaci\xF3n de la PlayStation 4. Es el primer mando de la l\xEDnea DualShock en cambiar significativamente su dise\xF1o, presentando un dise\xF1o m\xE1s redondeado que sus predecesores. Presenta un panel t\xE1ctil parecido al usado en la PlayStation Vita. Posee un dise\xF1o m\xE1s ergon\xF3mico, junto con una barra de luz LED en su parte frontal, la cual cambia de color de acuerdo al n\xFAmero de jugador (Jugador 1 azul, jugador 2 rojo, jugador 3 verde, jugador 4 morado), tomando los cuatro colores de los botones emblem\xE1ticos de Playstation; adem\xE1s en juegos de un solo jugador se permite a los desarrolladores cambiar el color o la intensidad del LED para crear efectos relacionados con el juego, como por ejemplo cuando el jugador recibe da\xF1o. Cabe destacar que el Mando cambia a naranja cuando se conecta a cualquier dispositivo con Bluetooth o por medio de USB. Adem\xE1s incluye un peque\xF1o altavoz en el centro por arriba del bot\xF3n PS, dando indicios al jugador en algunos juegos, eventos significativos por medio de un sonido como golpes, apertura de puertas, estado de vida, mejorando la experiencia de inmersi\xF3n en el juego.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mando PS5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " El DualSense es el mando de la PlayStation 5 y fue presentado el 7 de abril de 2020. Se basa en el controlador DualShock 4 que vino antes que \xE9l, pero con una evoluci\xF3n a su dise\xF1o y capacidades influenciadas por discusiones con dise\xF1adores de juegos y jugadores. A diferencia de los mandos DualShock anteriores, el DualSense tiene un esquema de coloraci\xF3n bicolor (principalmente blanco con orientaci\xF3n negra) y botones de acci\xF3n monocrom\xE1ticos, marcando la primera vez que los botones de acci\xF3n para un mando PlayStation est\xE1ndar no est\xE1n coloreados en colores arco iris, aunque las consolas port\xE1tiles de PlayStation, PlayStation Vita y PlayStation Portable, ambos ten\xEDan botones monocrom\xE1ticos. Incorpora un dise\xF1o m\xE1s ergon\xF3mico que es algo m\xE1s grande y redondo que el DualShock 4. La barra de luz se ha movido desde la parte superior del controlador a los bordes izquierdo y derecho del panel t\xE1ctil. Mientras que el controlador mantiene el mismo n\xFAmero de botones que el DualShock 4, el bot\xF3n \"Compartir\" se ha reemplazado por \"Crear\" con un enfoque ampliado en la creaci\xF3n de contenido para compartir con otros. El DualSense tiene una fuerte retroalimentaci\xF3n h\xE1ptica a trav\xE9s de actuadores de bobina de voz, que est\xE1n destinados a dar una mejor retroalimentaci\xF3n en el juego. El altavoz del controlador se ha mejorado y ahora se ve aumentado por una nueva matriz de micr\xF3fonos integrada que permite a los jugadores hablar con otros usando s\xF3lo el controlador. El controlador tiene disparadores adaptativos que pueden cambiar la resistencia al jugador seg\xFAn sea necesario, apoyando una experiencia como dibujar virtualmente una flecha de un arco. La conectividad incluye un conector de audio de 3,5 mm y USB-C, que reemplaza el puerto microUSB en el DualShock 4 Su bater\xEDa se ha actualizado a una capacidad de mayor clasificaci\xF3n. Adem\xE1s, la pieza de pl\xE1stico negro se puede quitar f\xE1cilmente, sin ning\xFAn desmontaje. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "section", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "M\xD3VILES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Xperia X1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "El Sony Ericsson Xperia X1 Es un tel\xE9fono 3G, lanzado en febrero de 2008, con pantalla t\xE1ctil TFT de 3 pulgadas (800 \xD7 480 p\xEDxeles). Tiene una c\xE1mara digital de 3.2 megap\xEDxeles con selecci\xF3n de foco mediante tocar la zona deseada para enfocar, graba videos en calidad VGA con 30 fps. Adem\xE1s su c\xE1mara tiene zoom digital y flash. Adem\xE1s posee una c\xE1mara frontal para videollamadas. Tiene una memoria interna de 400mb y soporte externo para microSD (TransFlash) de hasta 16 GB para una mayor capacidad. Tiene una bater\xEDa con 580 horas de duraci\xF3n en Stand-By (tiempo de espera) y 10 horas en llamada en GSM/GPRS/EDGE, 640 horas en Stand-By y 6 horas en llamada en UMTS/HSPA. Posee reproductor Windows Media Player y Radio FM. Tiene sistema operativo Windows Mobile Professional 6.1, un procesador Qualcomm a 528MHz y 256 MB de memoria RAM, Posee a-GPS y un puerto mini-USB. Con tecnolog\xEDa Slide, incorpora un teclado QWERTY completo y un Optical trackpad. Env\xEDa SMS, MMS, Mensajes instant\xE1neos y E-mails (Push email). Soporta la tecnolog\xEDa JAVA 2.0, y gracias a su tecnolog\xEDa UMTS, permite navegar con una velocidad de hasta 7.2 Mbps. Incluye WLAN Wi-Fi 802.11b/g permitiendo conectar a un hotspot local.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Xperia X8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " El Sony Ericsson Xperia X8 es un tel\xE9fono inteligente 3G de gama media con Android, desarrollado por Sony Ericsson, de la serie Xperia publicado en el Q4 de 2010. Se vende en muchos pa\xEDses del mundo, incluyendo los Estados Unidos en AT&T Mobility y con contratos de pago m\xF3dicos mensuales en el Reino Unido. Originalmente funcionaba con Android 1.6, pero se actualiz\xF3 a principios de 2011 a Android 2.1. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Xperia X2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Sony Ericsson Xperia X2, anunciado en septiembre de 20091\u200B es un tel\xE9fono inteligente de la serie Xperia de la multinacional japonesa Sony Ericsson. Es el sucesor del modelo X1. Tiene una pantalla t\xE1ctil de 3.2 pulgadas, teclado deslizante, c\xE1mara de 8.1 megap\xEDxeles, Wi-Fi, GPS y 3G. Funciona con Windows Mobile 6.5 y la pantalla principal puede ser personalizada como Windows 6.5 o Xperia. El Xperia X2 es el \xFAltimo tel\xE9fono inteligente de Sony Ericsson en usar el sistema operativo Windows Mobile,2\u200B al haber optado en su sucesor (Xperia X10) el sistema operativo Android.3\u200B En abril de 2010, Sony Ericsson lanz\xF3 su primera actualizaci\xF3n (MR1), que permit\xEDa transformar Windows Mobile de su versi\xF3n 6.5.1 a la versi\xF3n 6.5.2. Est\xE1 actualizaci\xF3n mejor\xF3 la estabilidad y usabilidad del dispositivo. Tambi\xE9n integr\xF3 el uso de videollamada, radio FM, un GPS m\xE1s r\xE1pido y muchas de las aplicaciones disponibles. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#titulo_pagina_principal[_ngcontent-%COMP%] {\r\n  color: black;\r\n  text-align: center;\r\n}\r\n#bienvenidos[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-top: 30%;\r\n  font-family:Verdana, Geneva, Tahoma, sans-serif; \r\n  color: white;\r\n}\r\n#quienes[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-top: 5%;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n  \"Lucida Sans\", Arial,sans-serif;\r\n  color:white;\r\n}\r\n#imagen_central[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  height: 1080px;\r\n  margin: 0 auto;\r\n  width: 1920px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n#wrapper[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);\r\n  margin: 0 auto;\r\n  max-width: 1440px;\r\n  width: 100%;\r\n}\r\n#seccion_titulo_principal[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: center;\r\n  background-image: url('fondo2.jpg');\r\n}\r\n#seccion_presentacion[_ngcontent-%COMP%] {\r\n  background-image: url('pantalladoss.jpg');\r\n  text-align: center;\r\n  color: white;\r\n}\r\n#seccion_consolas[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-image: url('fondo2.jpg');\r\n  color: white;\r\n}\r\n#seccion_vendemos[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-image: url('fondo4.jpg');\r\n  color: white;\r\n}\r\n#seccion_videojuegos[_ngcontent-%COMP%] {\r\n  background-image: url('pantalladoss.jpg');\r\n  text-align: center;\r\n  color: white;\r\n}\r\n#seccion_perifericos[_ngcontent-%COMP%] {\r\n  background-image: url('fondo2.jpg');\r\n  text-align: center;\r\n  color: white;\r\n}\r\n#seccion_moviles[_ngcontent-%COMP%] {\r\n  background-image: url('fondo4.jpg');\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.quevendemos[_ngcontent-%COMP%]{\r\n  margin-top: 15%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYS1pbmljaWFsLWNvbXBvbmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZDtpQ0FDK0I7RUFDL0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFxRDtBQUN2RDtBQUNBO0VBQ0UseUNBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBcUQ7RUFDckQsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQXFEO0VBQ3JELFlBQVk7QUFDZDtBQUNBO0VBQ0UseUNBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1DQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQ0FBcUQ7RUFDckQsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJwYWdpbmEtaW5pY2lhbC1jb21wb25lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxvX3BhZ2luYV9wcmluY2lwYWwge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2JpZW52ZW5pZG9ze1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7IFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jcXVpZW5lc3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuI2ltYWdlbl9jZW50cmFsIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTkyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN3cmFwcGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTJweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3NlY2Npb25fdGl0dWxvX3ByaW5jaXBhbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmNcXGFzc2V0c1xcaW1hZ2VzXFxmb25kbzIuanBnXCIpO1xyXG59XHJcbiNzZWNjaW9uX3ByZXNlbnRhY2lvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXGltYWdlc1xccGFudGFsbGFkb3NzLmpwZ1wiKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNzZWNjaW9uX2NvbnNvbGFzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXGltYWdlc1xcZm9uZG8yLmpwZ1wiKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3NlY2Npb25fdmVuZGVtb3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmNcXGFzc2V0c1xcaW1hZ2VzXFxmb25kbzQuanBnXCIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jc2VjY2lvbl92aWRlb2p1ZWdvcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXGltYWdlc1xccGFudGFsbGFkb3NzLmpwZ1wiKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNzZWNjaW9uX3BlcmlmZXJpY29zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmNcXGFzc2V0c1xcaW1hZ2VzXFxmb25kbzIuanBnXCIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3NlY2Npb25fbW92aWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXGltYWdlc1xcZm9uZG80LmpwZ1wiKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5xdWV2ZW5kZW1vc3tcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "P91O":
    /*!********************************************************!*\
      !*** ./src/app/services/productos-services.service.ts ***!
      \********************************************************/

    /*! exports provided: ProductosServicesService */

    /***/
    function P91O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductosServicesService", function () {
        return ProductosServicesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductosServicesService = /*#__PURE__*/function () {
        function ProductosServicesService() {
          _classCallCheck(this, ProductosServicesService);

          this.listaConsolas = [];
          this.listaVideojuegos = [];
          this.listaPerifericos = [];
          this.listaMoviles = [];
          this.identificador = 0;
          this.listaCarrito = []; //DOS LISTAS CREADAS SOLO PARA METER LAS COSAS EN EL CARRITO QUE AL FINAL SE JUNTARAN EN UNA LISTA AUN POR CREAR
          //listaCarritoPrecioImagen: any[] = [];

          this.listaNuevaPrueba = [];
        } //CREACION DE GETTER  SETTER


        _createClass(ProductosServicesService, [{
          key: "getListaConsola",
          value: function getListaConsola() {
            return this.listaConsolas;
          }
        }, {
          key: "setlistaConsolas",
          set: function set(listaConsolas) {
            this.listaConsolas = listaConsolas;
          }
        }, {
          key: "getIdentificador",
          value: function getIdentificador() {
            return this.identificador;
          }
        }, {
          key: "setIdentificador",
          set: function set(identificador) {
            this.identificador = identificador;
          }
        }, {
          key: "getListaVideojuegos",
          value: function getListaVideojuegos() {
            return this.listaVideojuegos;
          }
        }, {
          key: "setListaVideojuegos",
          set: function set(listaVideojuegos) {
            this.listaVideojuegos = listaVideojuegos;
          }
        }, {
          key: "getListaMoviles",
          value: function getListaMoviles() {
            return this.listaMoviles;
          }
        }, {
          key: "setListaMoviles",
          set: function set(listaMoviles) {
            this.listaMoviles = listaMoviles;
          }
        }, {
          key: "getListaPerifericos",
          value: function getListaPerifericos() {
            return this.listaPerifericos;
          }
        }, {
          key: "setListaPerifericos",
          set: function set(listaPerifericos) {
            this.listaPerifericos = listaPerifericos;
          }
        }, {
          key: "getListaCarrito",
          value: function getListaCarrito() {
            return this.listaCarrito;
          }
          /*
          getlistaCarritoPrecioImagen(): any[] {
            return this.listaCarritoPrecioImagen;
          }
          */

        }, {
          key: "getListaNueva",
          value: function getListaNueva() {
            return this.listaNuevaPrueba;
          }
        }, {
          key: "setListaNuevaPrueba",
          set: function set(listaNuevaPrueba) {
            this.listaNuevaPrueba.push(listaNuevaPrueba);
          }
        }, {
          key: "setListaCarrito",
          set: function set(listaCarrito) {
            this.listaCarrito = listaCarrito;
          }
        }, {
          key: "getCoordenadas",
          value: function getCoordenadas() {
            return this.coordenadas;
          }
        }, {
          key: "setCoordenadas",
          set: function set(coordenadas) {
            this.coordenadas = coordenadas;
          }
        }]);

        return ProductosServicesService;
      }();

      ProductosServicesService.ɵfac = function ProductosServicesService_Factory(t) {
        return new (t || ProductosServicesService)();
      };

      ProductosServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductosServicesService,
        factory: ProductosServicesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'TFG IGNACIO ARROYO MAYO';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/firebase.service */
      "Z2Br");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../nav-bar/nav-bar.component */
      "g/Dx");

      function LoginComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenidos a New Sony");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_0_div_3_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.onSingin(_r3.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Iniciar Sesi\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_0_div_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.onSignup(_r3.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Registrarse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_0_div_3_Template, 16, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isSignedIn);
        }
      }

      function LoginComponent_app_nav_bar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(firebase, toastSvc) {
          _classCallCheck(this, LoginComponent);

          this.firebase = firebase;
          this.toastSvc = toastSvc;
          this.flag = false;
          this.mostrarInicio = false;
          this.isSignedIn = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('user') !== null) this.isSignedIn = false;else this.isSignedIn = false;
          }
        }, {
          key: "onSignup",
          value: function onSignup(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.firebase.onSignup(email, password).then(function (res) {
                        if (_this11.firebase.isLoggedIn) _this11.isSignedIn = false;
                      })["catch"](function (err) {
                        _this11.toastSvc.error(err);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSingin",
          value: function onSingin(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.firebase.onSingin(email, password).then(function (res) {
                        if (_this12.firebase.isLoggedIn && email == 'admin@gmail.com') {
                          _this12.isSignedIn = true;
                          _this12.flag = true; //linea 28 y 29 sirve para pasarle este parametro al navBar y saber si el que ha iniciado sesion es el admin o no si la bandera esta en true se mostrara el menu de admin

                          _this12.firebase.setFlag = _this12.flag;
                          _this12.usuario = email;
                          _this12.firebase.setUsuario = _this12.usuario;

                          _this12.toastSvc.success('Has iniciado sesion cómo  ' + _this12.usuario);
                        } else {
                          _this12.isSignedIn = true;
                          _this12.usuario = email;
                          _this12.firebase.setUsuario = _this12.usuario;

                          _this12.toastSvc.success('Has iniciado sesion cómo  ' + _this12.usuario);
                        }
                      })["catch"](function (err) {
                        _this12.toastSvc.error(err);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleLogout",
          value: function handleLogout() {
            this.isSignedIn = false;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 3,
        vars: 2,
        consts: [["id", "toop", 4, "ngIf"], [4, "ngIf"], ["id", "toop"], ["id", "center", "src", "../assets/images/logo_new_playstation.png", 2, "width", "30rem", "height", "23rem"], ["id", "contenedorLogin", 1, "row"], ["id", "iniciar", 4, "ngIf"], ["id", "iniciar"], ["id", "login"], ["id", "inputlogin1", "type", "text", "placeholder", "Email"], ["email", ""], ["id", "inputlogin2", "type", "password", "placeholder", "Contrase\xF1a"], ["password", ""], ["id", "botoneslogin2", 1, "btn", "btn-primary", 3, "click"], ["id", "botoneslogin1", 1, "btn", "btn-primary", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 4, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_app_nav_bar_1_Template, 1, 0, "app-nav-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSignedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSignedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"]],
        styles: ["#botoneslogin1[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n#botoneslogin2[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n#contenedorLogin[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n#iniciar[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n}\r\n#login[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n#center[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    image-orientation: initial;\r\n    margin-left: 38%;\r\n    margin-top:  60px;\r\n}\r\n#inputlogin1[_ngcontent-%COMP%]{\r\n    align-content: center;\r\n    align-items: center;\r\n    width: 23%;\r\n}\r\n#inputlogin2[_ngcontent-%COMP%]{\r\n    align-content: center;\r\n    align-items: center;\r\n    width: 23%;\r\n    margin-top: 10px;\r\n}\r\n#toop[_ngcontent-%COMP%]{\r\n    margin-top:50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdG9uZXNsb2dpbjF7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiNib3RvbmVzbG9naW4ye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4jY29udGVuZWRvckxvZ2lue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jaW5pY2lhcntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuI2xvZ2lue1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuI2NlbnRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWFnZS1vcmllbnRhdGlvbjogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAgNjBweDtcclxufVxyXG4jaW5wdXRsb2dpbjF7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIzJTtcclxufVxyXG4jaW5wdXRsb2dpbjJ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3Rvb3B7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Z2Br":
    /*!**********************************************!*\
      !*** ./src/app/services/firebase.service.ts ***!
      \**********************************************/

    /*! exports provided: FirebaseService */

    /***/
    function Z2Br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(firebaseAuth, router) {
          _classCallCheck(this, FirebaseService);

          this.firebaseAuth = firebaseAuth;
          this.router = router;
          this.isLoggedIn = false;
          this.flag = false; //esta flag es para saber si es modo admin o cualquier otro
        }

        _createClass(FirebaseService, [{
          key: "onSingin",
          value: function onSingin(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.firebaseAuth.signInWithEmailAndPassword(email, password).then(function (res) {
                        _this13.isLoggedIn = true;
                        localStorage.setItem('user', JSON.stringify(res.user));
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSignup",
          value: function onSignup(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(function (res) {
                        _this14.isLoggedIn = true;
                        localStorage.setItem('user', JSON.stringify(res.user));
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setFlag",
          set: function set(flag) {
            this.flag = flag;
          }
        }, {
          key: "getFlag",
          value: function getFlag() {
            return this.flag;
          }
        }, {
          key: "setUsuario",
          set: function set(usuario) {
            this.usuario = usuario;
          }
        }, {
          key: "getUsuario",
          value: function getUsuario() {
            return this.usuario;
          }
        }, {
          key: "logout",
          value: function logout() {
            try {
              this.firebaseAuth.signOut();
              localStorage.removeItem('user');
              this.router.navigate(['/home']);
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ɵfac = function FirebaseService_Factory(t) {
        return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FirebaseService,
        factory: FirebaseService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _components_pagina_inicial_components_pagina_inicial_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/pagina-inicial-components/pagina-inicial-components.component */
      "ECQP");
      /* harmony import */


      var _components_anadir_productos_components_anadir_productos_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/anadir-productos-components/anadir-productos-components.component */
      "jWPY");
      /* harmony import */


      var _components_carrito_components_carrito_components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/carrito-components/carrito-components.component */
      "pCCD");
      /* harmony import */


      var _components_pagar_components_pagar_components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/pagar-components/pagar-components.component */
      "4/8k");
      /* harmony import */


      var _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pipes/imagenes-pipes.pipe */
      "+YSX");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/analytics */
      "h+eY");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/firebase.service */
      "Z2Br");
      /* harmony import */


      var _components_consolas_consolas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/consolas/consolas.component */
      "lCWG");
      /* harmony import */


      var _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/videojuegos/videojuegos.component */
      "DsT9");
      /* harmony import */


      var _components_moviles_moviles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/moviles/moviles.component */
      "B/Ku");
      /* harmony import */


      var _components_perifericos_perifericos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/perifericos/perifericos.component */
      "AElH");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! pdfmake-wrapper */
      "oNuZ");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_22__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_21__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_22___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
        providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuth"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp({
          apiKey: "AIzaSyDvF7KLzph1C8eJqq7WDTDb_J6dUhX-7jE",
          authDomain: "tfg-ignacio-arroyo.firebaseapp.com",
          databaseURL: "https://tfg-ignacio-arroyo-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "tfg-ignacio-arroyo",
          storageBucket: "tfg-ignacio-arroyo.appspot.com",
          messagingSenderId: "1048738039204",
          appId: "1:1048738039204:web:a5681154d8f16845076d31",
          measurementId: "G-0Q79G6FDVN"
        }), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _components_pagina_inicial_components_pagina_inicial_components_component__WEBPACK_IMPORTED_MODULE_4__["PaginaInicialComponentsComponent"], _components_anadir_productos_components_anadir_productos_components_component__WEBPACK_IMPORTED_MODULE_5__["AnadirProductosComponentsComponent"], _components_carrito_components_carrito_components_component__WEBPACK_IMPORTED_MODULE_6__["CarritoComponentsComponent"], _components_pagar_components_pagar_components_component__WEBPACK_IMPORTED_MODULE_7__["PagarComponentsComponent"], _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_8__["ImagenesPipesPipe"], _components_consolas_consolas_component__WEBPACK_IMPORTED_MODULE_15__["ConsolasComponent"], _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_16__["VideojuegosComponent"], _components_moviles_moviles_component__WEBPACK_IMPORTED_MODULE_17__["MovilesComponent"], _components_perifericos_perifericos_component__WEBPACK_IMPORTED_MODULE_18__["PerifericosComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "g/Dx":
    /*!*********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function gDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/firebase.service */
      "Z2Br");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["/anadir"];
      };

      function NavBarComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\xF1adir productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/home"];
      };

      var _c2 = function _c2() {
        return ["/consolas"];
      };

      var _c3 = function _c3() {
        return ["/videojuegos"];
      };

      var _c4 = function _c4() {
        return ["/perifericos"];
      };

      var _c5 = function _c5() {
        return ["/moviles"];
      };

      var _c6 = function _c6() {
        return ["/carrito"];
      };

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(serviciosProductos, firebase) {
          _classCallCheck(this, NavBarComponent);

          this.serviciosProductos = serviciosProductos;
          this.firebase = firebase;
          this.bandera = false;
          this.contadorCarrito = [];
          this.contadorCarrito = this.serviciosProductos.getListaCarrito();
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contadorCarrito = this.serviciosProductos.getListaCarrito(); //sirve para el contador debajo del carrito que coge la lista con el getter porque ya hicimos setter desde los componentes de productos

            this.bandera = this.firebase.getFlag(); //ESTO ES PARA EL LOGIN SI ESTA TRUE SE MUESTRA AGREGAR PRODUCTOS Y SI ESTA EN FALSE SE ESCONDE

            this.usuario = this.firebase.getUsuario();
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]));
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 36,
        vars: 15,
        consts: [["id", "navBar", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "background"], ["id", "tituloNav", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["id", "nombretitulosnav", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-item"], ["class", "nav-item", 4, "ngIf"], [1, "row"], [1, "col"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["id", "imagen-carrito", "alt", "Carrito Imagen", "src", "assets/images/carrito.png"], ["id", "contador_carrito", 1, "badge", "bg-primary", "rounded-pill", 2, "color", "white", "background", "green"], ["id", "cerrar", 1, "col"], ["id", "cerrarSesion", "href", "#", 1, "navbar-brand"], ["id", "usuarioSign"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Sony");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Consolas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Videojuegos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Perif\xE9ricos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "M\xF3viles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_li_20_Template, 3, 2, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cerrar sesi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bandera);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contadorCarrito.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["#imagen-carrito[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    margin-top: 2px;\r\n    margin-right: 17px;\r\n}\r\n#contadorCarrito[_ngcontent-%COMP%]{\r\n    margin-left: 8%;\r\n    margin-bottom: 5px;\r\n}\r\n#tituloNav[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color:midnightblue;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n#cerrarSesion[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    font-size: 18px;\r\n    color: black;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.background[_ngcontent-%COMP%]{\r\n    background-color:powderblue !important;\r\n}\r\n#nombretitulosnav[_ngcontent-%COMP%]{\r\n    text-anchor: middle;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n#navBar[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:8.5%;\r\n}\r\n#usuarioSign[_ngcontent-%COMP%]{\r\n    margin-top: 20px i !important;\r\n    font-size: 5px i !important;\r\n}\r\n#cerrar[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFHQUFxRztBQUN6RztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUdBQXFHO0FBQ3pHO0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxR0FBcUc7QUFDekc7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2VuLWNhcnJpdG97XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbn1cclxuI2NvbnRhZG9yQ2Fycml0b3tcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4jdGl0dWxvTmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjptaWRuaWdodGJsdWU7XHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4jY2VycmFyU2VzaW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cG93ZGVyYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcbiNub21icmV0aXR1bG9zbmF2e1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNuYXZCYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo4LjUlO1xyXG59XHJcbiN1c3VhcmlvU2lnbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHggaSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA1cHggaSAhaW1wb3J0YW50O1xyXG59XHJcbiNjZXJyYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "jWPY":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/anadir-productos-components/anadir-productos-components.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AnadirProductosComponentsComponent */

    /***/
    function jWPY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnadirProductosComponentsComponent", function () {
        return AnadirProductosComponentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AnadirProductosComponentsComponent_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5, " ");
        }
      }

      function AnadirProductosComponentsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_8_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduzca URL de imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_8_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.imagen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introduzca descripcion del producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_8_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Introduzca el precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_8_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.precio = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_8_Template_input_keypress_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Introduzca la capacidad de almacenamiento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_8_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.capacidad = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_8_Template_input_keypress_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirProductosComponentsComponent_div_8_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.anadirConsola();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Agregar producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.imagen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.capacidad);
        }
      }

      function AnadirProductosComponentsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_9_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduzca URL de imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_9_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.imagen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introduzca descripcion del producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_9_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Introduzca el precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_9_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.precio = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_9_Template_input_keypress_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Introduzca el tiempo medio de juego ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_9_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.tiempoJuego = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_9_Template_input_keypress_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirProductosComponentsComponent_div_9_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.agregarVideojuego();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Agregar producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.imagen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.tiempoJuego);
        }
      }

      function AnadirProductosComponentsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_10_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduzca URL de imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_10_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.imagen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introduzca descripcion del producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_10_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Introduzca el precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_10_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.precio = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_10_Template_input_keypress_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirProductosComponentsComponent_div_10_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.agregarPeriferico();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Agregar producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.imagen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.precio);
        }
      }

      function AnadirProductosComponentsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introduzca URL de imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.imagen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Introduzca descripcion del producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Introduzca el precio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.precio = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_11_Template_input_keypress_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Introduzca la capacidad de almacenamiento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.capacidad = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_11_Template_input_keypress_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Introduzca los pixeles del movil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_div_11_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.pixeles = $event;
          })("keypress", function AnadirProductosComponentsComponent_div_11_Template_input_keypress_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirProductosComponentsComponent_div_11_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.agregarMovil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Agregar producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.imagen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.capacidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.pixeles);
        }
      }

      var AnadirProductosComponentsComponent = /*#__PURE__*/function () {
        function AnadirProductosComponentsComponent(servicioProductos, bda) {
          _classCallCheck(this, AnadirProductosComponentsComponent);

          this.servicioProductos = servicioProductos;
          this.bda = bda; //INICIO VARIABLES COMUNES//

          this.nombre = '';
          this.imagen = '';
          this.descripcion = '';
          this.precio = 0;
          this.capacidad = 0; //FIN VARIABLES COMUNES//
          //INICIO VARIABLES ESPECIFICAS VIDEOJUEGOS//

          this.tiempoJuego = 0; //FIN VARIABLES ESPECIFICAS MOVILES//

          this.listaConsolasTotal = [];
          this.listaMovilesTotal = [];
          this.listaPerifericosTotal = [];
          this.listaVideojuegosTotal = [];
          this.seleccion = '0'; //variable que se encarga de saber que <select> hemos escogido

          this.datos = ['Consolas', 'Videojuegos', 'Perifericos', 'Moviles']; //inicializacion de variable datos con los respectivos datos que en el HTML se recorrera para hacer tantos <select><option> sean necesarios
        }

        _createClass(AnadirProductosComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "anadirConsola",
          value: function anadirConsola() {
            /*
            Aqui lo que hacemos es:
            1ºcogemos la lista consola creada al principio de la clase
            2ºla lista creada la igualamos al servicio es decir al total(por ahora igual que con los cards)
            3ºcoges la lista total ya implementada y le metes el producto qe se crea justo arriba de este
            comentario recogiendo el valor de todos los inputs y colocandolos en sus respectivos huecos
            4ºUna vez la lista con todo MAS el producto que se PUSHEA cuando has pulsado el boton coges el SETTER
             creado en el SERVICIO y lo seteas a la lista de ahora mismo que se ha actualizado con el nuevo elemento
            */
            if (this.nombre.length == 0 || this.descripcion.length == 0 || this.precio == 0 || this.capacidad == 0) {
              alert("Faltan campos obligatorios por rellenar");
            } else {
              this.consolametidabda = {
                nombre: this.nombre,
                imagen: this.imagen,
                descripcion: this.descripcion,
                precio: this.precio,
                capacidad: this.capacidad,
                id: 0,
                tipo: "consola"
              };
              var tablaConsola = this.bda.list('Productos');
              tablaConsola.push(this.consolametidabda);
              this.listaConsolasTotal = this.servicioProductos.getListaConsola();
              this.listaConsolasTotal.push(this.consolametidabda);
              this.servicioProductos.setlistaConsolas = this.listaConsolasTotal;
            }
          }
        }, {
          key: "agregarVideojuego",
          value: function agregarVideojuego() {
            if (this.nombre.length == 0 || this.descripcion.length == 0 || this.precio == 0 || this.tiempoJuego == 0) {
              alert("Faltan campos obligatorios por rellenar");
            } else {
              this.videojuegometidabda = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                imagen: this.imagen,
                precio: this.precio,
                tiempodejuego: this.tiempoJuego,
                tipo: 'videojuego',
                id: 0
              };
              var tablaConsola = this.bda.list('Productos');
              tablaConsola.push(this.videojuegometidabda);
              this.listaVideojuegosTotal = this.servicioProductos.getListaVideojuegos();
              this.listaVideojuegosTotal.push(this.videojuegometidabda);
              this.servicioProductos.setListaVideojuegos = this.listaVideojuegosTotal;
            }
          }
        }, {
          key: "agregarMovil",
          value: function agregarMovil() {
            if (this.nombre.length == 0 || this.descripcion.length == 0 || this.precio == 0 || this.capacidad == 0 || this.pixeles == 0) {
              alert("Faltan campos obligatorios por rellenar");
            } else {
              this.movilemetidabda = {
                nombre: this.nombre,
                imagen: this.imagen,
                precio: this.precio,
                descripcion: this.descripcion,
                capacidad: this.capacidad,
                id: 0,
                tipo: "movil",
                pixeles: 1
              };
              var tablaConsola = this.bda.list('Productos');
              tablaConsola.push(this.movilemetidabda);
              this.listaMovilesTotal = this.servicioProductos.getListaMoviles();
              this.listaMovilesTotal.push(this.movilemetidabda);
              this.servicioProductos.setListaMoviles = this.listaMovilesTotal;
            }
          }
        }, {
          key: "agregarPeriferico",
          value: function agregarPeriferico() {
            if (this.nombre.length == 0 || this.descripcion.length == 0 || this.precio == 0 //this.cantidad == 0 ||
            ) {
                alert("Faltan campos obligatorios por rellenar");
              } else {
              this.perifericometidabda = {
                nombre: this.nombre,
                imagen: this.imagen,
                descripcion: this.descripcion,
                precio: this.precio,
                id: 0,
                tipo: 'periferico'
              };
              var tablaConsola = this.bda.list('Productos');
              tablaConsola.push(this.perifericometidabda);
              this.listaPerifericosTotal = this.servicioProductos.getListaPerifericos();
              this.listaPerifericosTotal.push(this.perifericometidabda);
              this.servicioProductos.setListaPerifericos = this.listaPerifericosTotal;
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode < 48 || charCode > 57) {
              return false;
            }

            return true;
          }
        }]);

        return AnadirProductosComponentsComponent;
      }();

      AnadirProductosComponentsComponent.ɵfac = function AnadirProductosComponentsComponent_Factory(t) {
        return new (t || AnadirProductosComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]));
      };

      AnadirProductosComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnadirProductosComponentsComponent,
        selectors: [["app-anadir-productos-components"]],
        decls: 12,
        vars: 6,
        consts: [[1, "row"], ["id", "cabecera"], [1, "col"], ["id", "spinner", 1, "col"], [1, "form-select", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "blanco", 4, "ngIf"], ["id", "blanco"], ["id", "label"], ["type", "text", "value", " ", 3, "ngModel", "ngModelChange"], ["id", "marginTop", 1, "col"], ["type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["id", "botonAgregar", 1, "btn", "btn-primary", 3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"]],
        template: function AnadirProductosComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seleccione el producto que va a registrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnadirProductosComponentsComponent_Template_select_ngModelChange_5_listener($event) {
              return ctx.seleccion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AnadirProductosComponentsComponent_option_6_Template, 2, 1, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AnadirProductosComponentsComponent_div_8_Template, 34, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnadirProductosComponentsComponent_div_9_Template, 34, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnadirProductosComponentsComponent_div_10_Template, 27, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AnadirProductosComponentsComponent_div_11_Template, 39, 6, "div", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seleccion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datos);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seleccion == ctx.datos[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seleccion == ctx.datos[1]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seleccion == ctx.datos[2]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seleccion == ctx.datos[3]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]],
        styles: ["#spinner[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n#label[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n#cabecera[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 17px;\r\n  color: white;\r\n}\r\n#botonAgregar[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n#blanco[_ngcontent-%COMP%]{\r\n  margin-top: 6%;\r\n  text-align: center;\r\n  margin-right: 30px;\r\n  color: white;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n#marginTop[_ngcontent-%COMP%]{\r\n  margin-top: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWRpci1wcm9kdWN0b3MtY29tcG9uZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiYW5hZGlyLXByb2R1Y3Rvcy1jb21wb25lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3Bpbm5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4jbGFiZWx7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2NhYmVjZXJhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2JvdG9uQWdyZWdhciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4jYmxhbmNve1xyXG4gIG1hcmdpbi10b3A6IDYlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNtYXJnaW5Ub3B7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "lCWG":
    /*!***********************************************************!*\
      !*** ./src/app/components/consolas/consolas.component.ts ***!
      \***********************************************************/

    /*! exports provided: ConsolasComponent */

    /***/
    function lCWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsolasComponent", function () {
        return ConsolasComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/imagenes-pipes.pipe */
      "+YSX");

      function ConsolasComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay consolas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsolasComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "imagenesPipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolasComponent_div_17_div_2_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.agregarCarrito(item_r5.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Agregar carrito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, item_r5.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capacidad: ", item_r5.capacidad, "GB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio: ", item_r5.precio, "\u20AC");
        }
      }

      function ConsolasComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsolasComponent_div_17_div_2_Template, 21, 7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listaFiltradaConsola);
        }
      }

      var ConsolasComponent = /*#__PURE__*/function () {
        function ConsolasComponent(serviciosProductos, toastSvc, bda) {
          _classCallCheck(this, ConsolasComponent);

          this.serviciosProductos = serviciosProductos;
          this.toastSvc = toastSvc;
          this.bda = bda;
          this.listaNuevaPrueba = [];
          this.listaCarritoNombre = [];
          this.identificador = 0;
        }

        _createClass(ConsolasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            var i = 0; // variable usada para hacer un ++ tantas veces como elementos en la base de datos haya y se inicializa a 0 cada vez quye salimos porque sino se repite y se añadirian otrea vez los mismos elementos x2 y con esto lo controlamos 

            this.consola = this.bda.list('Productos').valueChanges();
            this.consola.forEach(function (element) {
              element.forEach(function (x) {
                if (x.tipo == "consola") {
                  i++;
                }

                if (_this15.listaConsolas.length < i && x.tipo == "consola") {
                  _this15.listaConsolas.push(x);
                }
              });
            });
            this.consolaSelected = {
              nombre: "",
              imagen: "",
              descripcion: "",
              precio: 0,
              capacidad: 0,
              id: 0,
              tipo: "consola"
            };
            this.identificador = this.serviciosProductos.getIdentificador();
            this.listaConsolas = this.serviciosProductos.getListaConsola();
            this.listaCarritoNombre = this.serviciosProductos.getListaCarrito();
          }
        }, {
          key: "agregarCarrito",
          value: function agregarCarrito(nombre) {
            var _this16 = this;

            this.listaCarritoNombre.push(nombre);
            this.listaConsolas.forEach(function (objetoC) {
              if (objetoC.nombre == nombre) {
                _this16.consolaSelected = {
                  nombre: objetoC.nombre,
                  imagen: objetoC.imagen,
                  descripcion: objetoC.descripcion,
                  precio: objetoC.precio,
                  capacidad: objetoC.capacidad,
                  id: _this16.identificador,
                  tipo: objetoC.tipo
                };
                _this16.identificador++;

                _this16.listaNuevaPrueba.push(_this16.consolaSelected);
              }
            });
            this.serviciosProductos.setIdentificador = this.identificador;
            this.serviciosProductos.setListaNuevaPrueba = this.listaNuevaPrueba;
            this.toastSvc.success('Has añadido:' + nombre);
            this.listaNuevaPrueba = [];
          }
        }, {
          key: "filtrarConsola",
          value: function filtrarConsola(nombre, precio) {
            var _this17 = this;

            this.listaFiltradaConsola = [];
            this.listaConsolas.forEach(function (consola) {
              if (consola.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()) && consola.precio.toString().includes(precio.toString())) {
                _this17.listaFiltradaConsola.push(consola);
              }
            });
          }
        }]);

        return ConsolasComponent;
      }();

      ConsolasComponent.ɵfac = function ConsolasComponent_Factory(t) {
        return new (t || ConsolasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_1__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]));
      };

      ConsolasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsolasComponent,
        selectors: [["app-consolas"]],
        decls: 18,
        vars: 2,
        consts: [["id", "filtrarVidejuegos", 1, "row"], [1, "col"], ["id", "centrarInput"], ["type", "text", "placeholder", "Introduce el nombre de la consola", 1, "form-control", "position-relative"], ["inputNombre", ""], ["type", "text", "placeholder", "Introduce el precio de la consola", 1, "form-control", "position-relative"], ["inputPrecio", ""], ["id", "botonFiltrar", 1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["id", "alertNohay", "role", "alert", 1, "alert", "alert-secondary"], ["id", "rowVideojuegos", 1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["alt", "imagen_vegetal", 1, "card-img-top", 2, "height", "18rem", "width", "18rem", 3, "src"], [1, "list-group", "list-group-flush"], ["id", "nombrePro", 1, "card-title"], ["id", "descripcionPro", 1, "card-text"], ["id", "precioPro", 1, "list-group-item"], [1, "card-body"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "250px", "height", "46px", 3, "click"]],
        template: function ConsolasComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduzca Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduzca Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolasComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.filtrarConsola(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConsolasComponent_div_16_Template, 3, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConsolasComponent_div_17_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listaFiltradaConsola.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_pipes_imagenes_pipes_pipe__WEBPACK_IMPORTED_MODULE_5__["ImagenesPipesPipe"]],
        styles: ["#rowConsolas[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 15px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#imagen[_ngcontent-%COMP%]{\r\n    background-position: inherit;\r\n    background-size: inherit;\r\n    background-attachment: inherit;\r\n}\r\n#rowVideojuegos[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    margin-top: 16px;\r\n    background-size: auto;\r\n    background-attachment: fixed;\r\n    margin-left: 5%;\r\n    margin-right: 4%;\r\n}\r\n#botonFiltrar[_ngcontent-%COMP%]{\r\n    margin-top: 31px !important;\r\n    height: 40px;\r\n    width: 85px;\r\n}\r\n#filtrarVidejuegos[_ngcontent-%COMP%]{\r\n    margin-top: 25px !important;\r\n}\r\n#centrarInput[_ngcontent-%COMP%]{\r\n   margin-left: 30%;\r\n   font-family: sans-serif;\r\n   font-size: 20px;\r\n   color: white;\r\n}\r\n#alertNohay[_ngcontent-%COMP%]{\r\n    margin-top: 10px !important;\r\n}\r\n#nombrePro[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n}\r\n#precioPro[_ngcontent-%COMP%]{\r\n    margin-left: 14px;\r\n}\r\n#descripcionPro[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixlQUFlO0dBQ2YsWUFBWTtBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29uc29sYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcm93Q29uc29sYXN7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcbiNpbWFnZW57XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbmhlcml0O1xyXG59XHJcbiNyb3dWaWRlb2p1ZWdvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuI2JvdG9uRmlsdHJhcntcclxuICAgIG1hcmdpbi10b3A6IDMxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG59XHJcbiNmaWx0cmFyVmlkZWp1ZWdvc3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4jY2VudHJhcklucHV0e1xyXG4gICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2FsZXJ0Tm9oYXl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI25vbWJyZVByb3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNwcmVjaW9Qcm97XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG4jZGVzY3JpcGNpb25Qcm97XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "pCCD":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/carrito-components/carrito-components.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CarritoComponentsComponent */

    /***/
    function pCCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarritoComponentsComponent", function () {
        return CarritoComponentsComponent;
      });
      /* harmony import */


      var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! mapbox-gl */
      "4ZJM");
      /* harmony import */


      var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! leaflet */
      "4R65");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/productos-services.service */
      "P91O");
      /* harmony import */


      var src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/peticiones-api.service */
      "xwVy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CarritoComponentsComponent_tbody_22_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarritoComponentsComponent_tbody_22_tr_1_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var itemF_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r4.eliminarProducto(itemF_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Eliminar producto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemF_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](itemF_r3.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", itemF_r3.precio, " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", itemF_r3.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function CarritoComponentsComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarritoComponentsComponent_tbody_22_tr_1_Template, 10, 3, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1);
        }
      }

      var CarritoComponentsComponent = /*#__PURE__*/function () {
        function CarritoComponentsComponent(servicioCarrito, apiMapa, gestorRutas) {
          _classCallCheck(this, CarritoComponentsComponent);

          this.servicioCarrito = servicioCarrito;
          this.apiMapa = apiMapa;
          this.gestorRutas = gestorRutas; //listaCarritoNombre: any[] = [];

          this.listaNueva = [];
          this.listaCarrito = [];
          this.precioFinal = 0;
        }

        _createClass(CarritoComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.geojsonFeature = {
              type: 'FeatureCollection',
              features: []
            };
            mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["accessToken"] = 'pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw'; //Token que te lo da la pagina para poder usarlo

            this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
              container: 'mapa',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [-3.74922, 40.463667],
              zoom: 5
            }); //punto predeterminado al empezar, es un marcador que iremos moviendo

            this.crearMarcador(-3.8321266502597666, 40.35191697150731);
            this.mapa.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["NavigationControl"]()); //implementa el acercar,alejar y rotar el mapa

            this.mapa.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["FullscreenControl"]()); //implementa el fullscreen

            this.mapa.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["GeolocateControl"]({
              //pulsas y te lleva a tu ubicacion
              positionOptions: {
                enableHighAccuracy: true
              },
              trackUserLocation: true
            }));
            this.listaNueva = this.servicioCarrito.getListaNueva();
            this.listaCarrito = this.servicioCarrito.getListaCarrito();
            this.listaNueva.forEach(function (element) {
              //ESTO CALCULA EL PRECIO FINAL QUE HACE LA SUMA DE TODOS LOS PRECIOS Y SI LO HAGO POR SEPARADO LO HAGO CON LAS 5 LISTAS Y AU
              element.forEach(function (elemento) {
                _this18.precioFinal += elemento.precio;
              });
            });
          }
        }, {
          key: "crearMarcador",
          value: function crearMarcador(_long, lat) {
            var _this19 = this;

            this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Marker"]({
              draggable: true
            }).setLngLat([_long, lat]).addTo(this.mapa);
            this.marker.on('drag', function () {
              //Drag significa Fire while dragging que significa que siga mientras se dispara es decir mientras se arrastra
              _this19.latLongFinal = _this19.marker.getLngLat(); //y con esta linea usamos la variable creada al principio para poner en que latitud/longitud dejamos el marker

              _this19.servicioCarrito.setCoordenadas = _this19.latLongFinal;

              _this19.apiMapa.getLatLngMapa(_this19.marker.getLngLat().lng, _this19.marker.getLngLat().lat).subscribe(function (data) {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](_this19.geojsonFeature).addTo(_this19.mapa);
                _this19.latLongFinalMostrar = data.features[0].place_name;
                _this19.servicioCarrito.setCoordenadas = _this19.latLongFinalMostrar;
              });
            });
          }
        }, {
          key: "vacio",
          value: function vacio() {
            if (this.listaNueva.length == 0) {
              alert("No tienes ningun producto agregado al carrito.");
            } else {
              this.gestorRutas.navigate(['pagar']);
            }
          }
        }, {
          key: "eliminarProducto",
          value: function eliminarProducto(identificador) {
            for (var index = 0; index < this.listaNueva.length; index++) {
              var element = this.listaNueva[index];

              for (var index2 = 0; index2 < element.length; index2++) {
                var elementoEliminar = element[index2];

                if (elementoEliminar.id == identificador) {
                  this.listaNueva.splice(index, 1);
                  this.listaCarrito.splice(index, 1);
                  this.precioFinal = this.precioFinal - elementoEliminar.precio;
                }
              }
            }

            if (this.listaNueva.length == 0) {
              this.precioFinal = 0;
            }
          }
        }]);

        return CarritoComponentsComponent;
      }();

      CarritoComponentsComponent.ɵfac = function CarritoComponentsComponent_Factory(t) {
        return new (t || CarritoComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_productos_services_service__WEBPACK_IMPORTED_MODULE_3__["ProductosServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_peticiones_api_service__WEBPACK_IMPORTED_MODULE_4__["PeticionesApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      CarritoComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CarritoComponentsComponent,
        selectors: [["app-carrito-components"]],
        decls: 29,
        vars: 3,
        consts: [["id", "total", 1, "row"], ["id", "colum1", 1, "col"], ["id", "topmapa"], ["id", "localizacion"], ["id", "mapa"], ["id", "colum2", 1, "col"], ["id", "resumenPedidoTexto"], ["id", "resumenCarrito", 1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "textoFinal"], ["id", "precioFinal"], ["id", "boton_pagar", 1, "btn", "btn-success", 2, "width", "42%", 3, "click"], [2, "height", "10rem", "width", "10rem", 3, "src"], ["id", "eliminar", 1, "btn-danger", 3, "click"]],
        template: function CarritoComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Resumen del pedido:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Imagen del producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CarritoComponentsComponent_tbody_22_Template, 2, 1, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "PrecioFinal:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarritoComponentsComponent_Template_button_click_27_listener() {
              return ctx.vacio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Finalizar Compra ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Su localizacion es : ", ctx.latLongFinalMostrar, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listaNueva);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.precioFinal, "\u20AC");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["#mapa[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  width: 90%;\r\n  height: 300%;\r\n}\r\n#boton_pagar[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n#localizacion[_ngcontent-%COMP%] {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  color: white;\r\n  margin-top: 60px;\r\n}\r\n#topmapa[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n#floating-panel[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-family: \"Roboto\", \"sans-serif\";\r\n}\r\n#eliminar[_ngcontent-%COMP%]{\r\n  margin-top: 40%;\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n#submit[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n#total[_ngcontent-%COMP%] {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  color: white;\r\n}\r\n#resumenCarrito[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  color: white;\r\n  max-width: 70%;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n#colum1[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n#colum2[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\r\n#latlng[_ngcontent-%COMP%] {\r\n  position: static;\r\n}\r\n#submit[_ngcontent-%COMP%] {\r\n  position: static;\r\n}\r\n#precioFinal[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n#resumenPedidoTexto[_ngcontent-%COMP%] {\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpdG8tY29tcG9uZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO29DQUNrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFO29DQUNrQztFQUNsQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkO29DQUNrQztBQUNwQztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCO29DQUNrQztBQUNwQztBQUNBO0VBQ0U7b0NBQ2tDO0FBQ3BDIiwiZmlsZSI6ImNhcnJpdG8tY29tcG9uZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcGEge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMzAwJTtcclxufVxyXG4jYm90b25fcGFnYXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4jbG9jYWxpemFjaW9uIHtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4jdG9wbWFwYSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4jZmxvYXRpbmctcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbn1cclxuI2VsaW1pbmFye1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiNzdWJtaXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiN0b3RhbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNyZXN1bWVuQ2Fycml0byB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2NvbHVtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuI2NvbHVtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbiNsYXRsbmcge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuI3N1Ym1pdCB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG4jcHJlY2lvRmluYWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4jcmVzdW1lblBlZGlkb1RleHRvIHtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_anadir_productos_components_anadir_productos_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/anadir-productos-components/anadir-productos-components.component */
      "jWPY");
      /* harmony import */


      var _components_carrito_components_carrito_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/carrito-components/carrito-components.component */
      "pCCD");
      /* harmony import */


      var _components_consolas_consolas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/consolas/consolas.component */
      "lCWG");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_moviles_moviles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/moviles/moviles.component */
      "B/Ku");
      /* harmony import */


      var _components_pagar_components_pagar_components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/pagar-components/pagar-components.component */
      "4/8k");
      /* harmony import */


      var _components_pagina_inicial_components_pagina_inicial_components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/pagina-inicial-components/pagina-inicial-components.component */
      "ECQP");
      /* harmony import */


      var _components_perifericos_perifericos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/perifericos/perifericos.component */
      "AElH");
      /* harmony import */


      var _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/videojuegos/videojuegos.component */
      "DsT9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home',
        component: _components_pagina_inicial_components_pagina_inicial_components_component__WEBPACK_IMPORTED_MODULE_7__["PaginaInicialComponentsComponent"]
      }, {
        path: 'consolas',
        component: _components_consolas_consolas_component__WEBPACK_IMPORTED_MODULE_3__["ConsolasComponent"]
      }, {
        path: 'videojuegos',
        component: _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_9__["VideojuegosComponent"]
      }, {
        path: 'anadir',
        component: _components_anadir_productos_components_anadir_productos_components_component__WEBPACK_IMPORTED_MODULE_1__["AnadirProductosComponentsComponent"]
      }, {
        path: 'perifericos',
        component: _components_perifericos_perifericos_component__WEBPACK_IMPORTED_MODULE_8__["PerifericosComponent"]
      }, {
        path: 'carrito',
        component: _components_carrito_components_carrito_components_component__WEBPACK_IMPORTED_MODULE_2__["CarritoComponentsComponent"]
      }, {
        path: 'pagar',
        component: _components_pagar_components_pagar_components_component__WEBPACK_IMPORTED_MODULE_6__["PagarComponentsComponent"]
      }, {
        path: 'moviles',
        component: _components_moviles_moviles_component__WEBPACK_IMPORTED_MODULE_5__["MovilesComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xwVy":
    /*!****************************************************!*\
      !*** ./src/app/services/peticiones-api.service.ts ***!
      \****************************************************/

    /*! exports provided: PeticionesApiService */

    /***/
    function xwVy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeticionesApiService", function () {
        return PeticionesApiService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PeticionesApiService = /*#__PURE__*/function () {
        function PeticionesApiService(http) {
          _classCallCheck(this, PeticionesApiService);

          this.http = http;
        }

        _createClass(PeticionesApiService, [{
          key: "getLatLngMapa",
          value: function getLatLngMapa(lng, lat) {
            //return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+lng+","+lat+".json?access_token=pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw");
            return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + lng + "," + lat + ".json?access_token=pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('no va por esto ----->' + error);
            }));
          }
        }]);

        return PeticionesApiService;
      }();

      PeticionesApiService.ɵfac = function PeticionesApiService_Factory(t) {
        return new (t || PeticionesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      PeticionesApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: PeticionesApiService,
        factory: PeticionesApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map