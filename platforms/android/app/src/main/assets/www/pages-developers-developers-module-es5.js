(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-developers-developers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/developers.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/developers.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDevelopersDevelopersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Developers</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n  <ion-segment [(ngModel)]=\"selectedView\">\n    <ion-segment-button value=\"devs\">\n      <ion-label>Developer</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"products\">\n      <ion-label>Products</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n \n  <div [ngSwitch]=\"selectedView\">\n    <div *ngSwitchCase=\"'devs'\">\n      <ion-item>\n        <ion-label position=\"stacked\">What\\'s your name?</ion-label>\n        <ion-input [(ngModel)]=\"developer.name\" placeholder=\"Developer Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">What are your special skills (comma separated)?</ion-label>\n        <ion-input [(ngModel)]=\"developer.skills\" placeholder=\"Special Skills\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Your image URL</ion-label>\n        <ion-input [(ngModel)]=\"developer.img\" placeholder=\"https://...\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"addDeveloper()\">Add Developer Info</ion-button>\n \n      <ion-list>\n        <ion-item button *ngFor=\"let dev of developers\" [routerLink]=\"['/', 'developers', dev.id]\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"dev.img\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ dev.name }}</h2>\n            <p>{{ dev.skills }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n \n    <div *ngSwitchCase=\"'products'\">\n      <ion-item>\n        <ion-label position=\"stacked\">Product name</ion-label>\n        <ion-input [(ngModel)]=\"product.name\" placeholder=\"Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Creator?</ion-label>\n        <ion-select [(ngModel)]=\"product.creator\">\n          <ion-select-option *ngFor=\"let dev of developers\" [value]=\"dev.id\">{{ dev.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"addProduct()\">Add Product</ion-button>\n \n      <ion-list>\n        <ion-item *ngFor=\"let prod of products | async\">\n          <ion-label>\n            <h2>{{ prod.name }}</h2>\n            <p>Created by: {{ prod.creator }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/developers/developers-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/developers/developers-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DevelopersPageRoutingModule */

  /***/
  function srcAppPagesDevelopersDevelopersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopersPageRoutingModule", function () {
      return DevelopersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _developers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./developers.page */
    "./src/app/pages/developers/developers.page.ts");

    const routes = [{
      path: '',
      component: _developers_page__WEBPACK_IMPORTED_MODULE_3__["DevelopersPage"]
    }];
    let DevelopersPageRoutingModule = class DevelopersPageRoutingModule {};
    DevelopersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DevelopersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/developers/developers.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/developers/developers.module.ts ***!
    \*******************************************************/

  /*! exports provided: DevelopersPageModule */

  /***/
  function srcAppPagesDevelopersDevelopersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopersPageModule", function () {
      return DevelopersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _developers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./developers-routing.module */
    "./src/app/pages/developers/developers-routing.module.ts");
    /* harmony import */


    var _developers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./developers.page */
    "./src/app/pages/developers/developers.page.ts");

    let DevelopersPageModule = class DevelopersPageModule {};
    DevelopersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _developers_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevelopersPageRoutingModule"]],
      declarations: [_developers_page__WEBPACK_IMPORTED_MODULE_6__["DevelopersPage"]]
    })], DevelopersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/developers/developers.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/developers/developers.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDevelopersDevelopersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/developers/developers.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/developers/developers.page.ts ***!
    \*****************************************************/

  /*! exports provided: DevelopersPage */

  /***/
  function srcAppPagesDevelopersDevelopersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopersPage", function () {
      return DevelopersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DevelopersPage = class DevelopersPage {
      constructor(db) {
        this.db = db;
        this.developers = [];
        this.developer = {};
        this.product = {};
        this.selectedView = 'devs';
      }

      ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
          if (rdy) {
            this.db.getDevs().subscribe(devs => {
              this.developers = devs;
            });
            this.products = this.db.getProducts();
          }
        });
      }

      addDeveloper() {
        let skills = this.developer['skills'].split(',');
        skills = skills.map(skill => skill.trim());
        this.db.addDeveloper(this.developer['name'], skills, this.developer['img']).then(_ => {
          this.developer = {};
        });
      }

      addProduct() {
        this.db.addProduct(this.product['name'], this.product['creator']).then(_ => {
          this.product = {};
        });
      }

    };

    DevelopersPage.ctorParameters = () => [{
      type: _services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]
    }];

    DevelopersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-developers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./developers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/developers.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./developers.page.scss */
      "./src/app/pages/developers/developers.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])], DevelopersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-developers-developers-module-es5.js.map