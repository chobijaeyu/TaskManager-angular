import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';


@Directive({
  selector: '[cardDraggable]',
})
export class DragDirective {

  @Input() dragTag: string;
  @Input() draggedClass: string;
  @Input() dragData: any;
  @Input('cardDraggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  private _isDraggable = false;
  
  get isDragable() {
    return this._isDraggable
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragDropService: DragDropService
  ) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.dragDropService.setDragData({ tag: this.dragTag, data: this.dragData })
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }


  // just for test .
  // @Input() defaultColor: string;
  // @Input('myHighlight') highlightColor: string;
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this.defaultColor || 'red');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

}
