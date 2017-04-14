import { Directive, Input, ElementRef, OnInit, DoCheck } from '@angular/core';


@Directive({
    selector: '[text-overflow]'
})
export class TextOverflowDirective implements DoCheck {
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
    //ngOnInit(): void {
    //    if (this.length > 0) {
    //        this.element.nativeElement.textContent = this.element.nativeElement.textContent.substr(0, this.length) + '...';
    //    }
    //};


    ngDoCheck(): void {
        var innerTextLength = this.element.nativeElement.innerText.length;
        if (innerTextLength > 0 && this.length > 0 && innerTextLength > this.length) {
            this.element.nativeElement.innerText = this.element.nativeElement.innerText.substr(0, this.length) + '...';
        }
    }

};