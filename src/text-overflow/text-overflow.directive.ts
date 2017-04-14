import { Directive, Input, ElementRef, HostListener, Renderer } from '@angular/core';


@Directive({
    selector: '[text-overflow]'
})
export class TextOverflowDirective {
    @Input('text-overflow') length: number; // number of characters before ellipsis


    /**
     * Constructor
     * @param element {ElementRef} - ElementRef injector
     * @param renderer {Renderer} - Renderer injector
     */
    constructor(private element: ElementRef, private renderer: Renderer) {
        if (this.length === undefined)
            this.length = 0;
    };

    /**
     * Listens for element's content cahnges
     */
    @HostListener('DOMSubtreeModified') onChange() {
        var innerTextLength = this.element.nativeElement.innerText.length;
        if (this.length > 0 && innerTextLength > 0 && innerTextLength > this.length) {
            this.element.nativeElement.innerText = this.element.nativeElement.innerText.substr(0, this.length - 3) + '...';
        }
        if (this.element.nativeElement.innerText.indexOf('...') === -1)
            this.renderer.setElementProperty(this.element.nativeElement, 'title', this.element.nativeElement.innerText);
    };
};
