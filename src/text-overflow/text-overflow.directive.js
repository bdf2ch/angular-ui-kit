"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TextOverflowDirective = (function () {
    /**
     * Constructor
     * @param element {ElementRef} - ElementRef injector
     */
    function TextOverflowDirective(element) {
        this.element = element;
        if (this.length === undefined)
            this.length = 0;
    }
    ;
    /**
     * ngOnInit hook
     */
    //ngOnInit(): void {
    //    if (this.length > 0) {
    //        this.element.nativeElement.textContent = this.element.nativeElement.textContent.substr(0, this.length) + '...';
    //    }
    //};
    TextOverflowDirective.prototype.ngDoCheck = function () {
        if (this.length > 0) {
            this.element.nativeElement.textContent = this.element.nativeElement.textContent.substr(0, this.length) + '...';
        }
    };
    return TextOverflowDirective;
}());
__decorate([
    core_1.Input('text-overflow')
], TextOverflowDirective.prototype, "length", void 0);
TextOverflowDirective = __decorate([
    core_1.Directive({
        selector: '[text-overflow]'
    })
], TextOverflowDirective);
exports.TextOverflowDirective = TextOverflowDirective;
;
