import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[cardDraggable][dragTag][draggedClass][dragData]'
})
export class DragDirective {

  private _isDragable = false;
  @Input() dragTag: string;
  @Input() draggedClass: string;
  @Input() dragData: any;
  @Input('cardDraggable')
  set isDragable(draggable: boolean) {
    this._isDragable = draggable
    this.rd.setAttribute(this.el.nativeElement,'draggable',`${draggable}`)
  };

  get isDragable() {
    return this._isDragable
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragDropService: DragDropService
  ) { }

  @HostListener('dragStart', ['$event'])
  ondragstart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass)
      this.dragDropService.setDragData({ tag: this.dragTag, data: this.dragData })
    }
  }

  @HostListener('dragEnd', ['$evnet'])
  ondragend(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass)
    }
  }

}
