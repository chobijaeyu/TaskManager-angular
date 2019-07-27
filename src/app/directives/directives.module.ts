import { NgModule } from '@angular/core';
import { DragDirective } from './drag.directive';
import { DropDirective } from './drop.directive';
import { FlexDirective } from './flex.directive';
import { DragDropService, DragData } from '../services/drag-drop.service';
import { HighlightDirective } from './highlight.directive';


const directivesList = [DragDirective, DropDirective, FlexDirective,]
@NgModule({
    declarations:[directivesList],
    imports: [],
    exports: [directivesList],
    providers: [DragDropService],
})
export class directivesModule { }
export { DragData }