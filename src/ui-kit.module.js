"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var text_overflow_directive_1 = require("./text-overflow/text-overflow.directive");
var UiKitModule = (function () {
    function UiKitModule() {
    }
    return UiKitModule;
}());
UiKitModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            text_overflow_directive_1.TextOverflowDirective
        ],
        exports: [
            text_overflow_directive_1.TextOverflowDirective
        ],
        providers: []
    })
], UiKitModule);
exports.UiKitModule = UiKitModule;
;
