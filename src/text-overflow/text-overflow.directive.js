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
     * @param renderer {Renderer} - Renderer injector
     */
    function TextOverflowDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        if (this.length === undefined)
            this.length = 0;
    }
    ;
    /**
     * Listens for element's content cahnges
     */
    TextOverflowDirective.prototype.onChange = function () {
        var innerTextLength = this.element.nativeElement.innerText.length;
        if (this.length > 0 && innerTextLength > 0 && innerTextLength > this.length) {
            this.element.nativeElement.innerText = this.element.nativeElement.innerText.substr(0, this.length - 3) + '...';
        }
        if (this.element.nativeElement.innerText.indexOf('...') === -1)
            this.renderer.setElementProperty(this.element.nativeElement, 'title', this.element.nativeElement.innerText);
    };
    ;
    return TextOverflowDirective;
}());
__decorate([
    core_1.Input('text-overflow')
], TextOverflowDirective.prototype, "length", void 0);
__decorate([
    core_1.HostListener('DOMSubtreeModified')
], TextOverflowDirective.prototype, "onChange", null);
TextOverflowDirective = __decorate([
    core_1.Directive({
        selector: '[text-overflow]'
    })
], TextOverflowDirective);
exports.TextOverflowDirective = TextOverflowDirective;
;
