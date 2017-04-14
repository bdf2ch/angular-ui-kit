import { Directive, Input, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[text-overflow]'
})
export class TextOverflowDirective implements  OnInit {
    @Input('text-overflow') length: number;


    /**
     * Constructor
     * @param element {ElementRef} - ElementRef injector
     */
    constructor(private element: ElementRef) {
        if (this.length === undefined)
            this.length = 0;
    };


    /**
     * ngOnInit hook
     */
    ngOnInit(): void {
        if (this.length > 0) {
            this.element.nativeElement.textContent = this.element.nativeElement.textContent.substr(0, this.length) + '...';
        }
    };

};