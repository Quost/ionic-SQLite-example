(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-developer-developer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developer/developer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developer/developer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"developers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Developer</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"delete()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <div *ngIf=\"developer\">\n    <ion-item>\n      <ion-label position=\"stacked\">What\\'s your name?</ion-label>\n      <ion-input [(ngModel)]=\"developer.name\" placeholder=\"Developer Name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">What are your special skills (comma separated)?</ion-label>\n      <ion-input [(ngModel)]=\"skills\" placeholder=\"Special Skills\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Your image URL</ion-label>\n      <ion-input [(ngModel)]=\"developer.img\" placeholder=\"https://...\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"block\" (click)=\"updateDeveloper()\">Update Developer Info</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/developer/developer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/developer/developer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DeveloperPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperPageRoutingModule", function() { return DeveloperPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _developer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer.page */ "./src/app/pages/developer/developer.page.ts");




const routes = [
    {
        path: '',
        component: _developer_page__WEBPACK_IMPORTED_MODULE_3__["DeveloperPage"]
    }
];
let DeveloperPageRoutingModule = class DeveloperPageRoutingModule {
};
DeveloperPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeveloperPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/developer/developer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/developer/developer.module.ts ***!
  \*****************************************************/
/*! exports provided: DeveloperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperPageModule", function() { return DeveloperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _developer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./developer-routing.module */ "./src/app/pages/developer/developer-routing.module.ts");
/* harmony import */ var _developer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developer.page */ "./src/app/pages/developer/developer.page.ts");







let DeveloperPageModule = class DeveloperPageModule {
};
DeveloperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _developer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeveloperPageRoutingModule"]
        ],
        declarations: [_developer_page__WEBPACK_IMPORTED_MODULE_6__["DeveloperPage"]]
    })
], DeveloperPageModule);



/***/ }),

/***/ "./src/app/pages/developer/developer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/developer/developer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmVsb3Blci9kZXZlbG9wZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/developer/developer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/developer/developer.page.ts ***!
  \***************************************************/
/*! exports provided: DeveloperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperPage", function() { return DeveloperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let DeveloperPage = class DeveloperPage {
    constructor(route, db, router, toast) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.toast = toast;
        this.developer = null;
        this.skills = '';
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let devId = params.get('id');
            this.db.getDeveloper(devId).then(data => {
                this.developer = data;
                this.skills = this.developer.skills.join(',');
            });
        });
    }
    delete() {
        this.db.deleteDeveloper(this.developer.id).then(() => {
            this.router.navigateByUrl('/');
        });
    }
    updateDeveloper() {
        let skills = this.skills.split(',');
        skills = skills.map(skill => skill.trim());
        this.developer.skills = skills;
        this.db.updateDeveloper(this.developer).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toast.create({
                message: 'Developer updated',
                duration: 3000
            });
            toast.present();
        }));
    }
};
DeveloperPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
DeveloperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-developer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./developer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developer/developer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./developer.page.scss */ "./src/app/pages/developer/developer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], DeveloperPage);



/***/ })

}]);
//# sourceMappingURL=pages-developer-developer-module-es2015.js.map