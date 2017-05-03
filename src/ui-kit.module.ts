import { NgModule } from '@angular/core';
import { TextOverflowDirective } from './text-overflow/text-overflow.directive';
import { TreeComponent } from "./tree/tree.component";
import { TreeService } from "./tree/tree.service";

@NgModule({
    imports: [],
    declarations: [
        TextOverflowDirective,
        TreeComponent
    ],
    exports: [
        TextOverflowDirective
    ],
    providers: [
        TreeService
    ]
})
export class UiKitModule {};