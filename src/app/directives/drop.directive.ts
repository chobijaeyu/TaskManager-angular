import { Directive, Output, EventEmitter, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DragData, DragDropService } from '../services/drag-drop.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[cardDropable]',
})
export class DropDirective {
  @Output() dropped: EventEmitter<DragData> = new EventEmitter()
  @Input() dropTags: string[] = []
  @Input() dragEnterClass: string
  private drag$: Observable<DragData | null>

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragDropService: DragDropService,
  ) { this.drag$ = dragDropService.getDragData().pipe(take(1)) }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.dropEffect', 'move');
        }
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(<string>dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.dragDropService.clearDragData();
        }
      });
    }
  }

}
