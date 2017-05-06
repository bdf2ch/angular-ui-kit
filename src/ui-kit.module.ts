import { NgModule } from '@angular/core';
import { TextOverflowDirective } from './text-overflow/text-overflow.directive';
import { TreeComponent } from "./tree/tree.component";
import { TreeService } from "./tree/tree.service";
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@NgModule({
    imports: [],
    declarations: [
        TextOverflowDirective,
        TreeComponent,
        ModalComponent
    ],
    exports: [
        TextOverflowDirective,
        ModalComponent
    ],
    providers: [
        TreeService,
        ModalService
    ]
})
export class UiKitModule {};