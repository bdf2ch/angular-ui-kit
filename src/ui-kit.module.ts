import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextOverflowDirective } from './text-overflow/text-overflow.directive';
import { TreeComponent } from "./tree/tree.component";
import { TreeItemComponent } from "./tree/tree-item.component";
import { TreeService } from "./tree/tree.service";
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TextOverflowDirective,
        TreeComponent,
        TreeItemComponent,
        ModalComponent
    ],
    exports: [
        TextOverflowDirective,
        TreeComponent,
        TreeItemComponent,
        ModalComponent
    ],
    providers: [
        TreeService,
        ModalService
    ]
})
export class UiKitModule {};