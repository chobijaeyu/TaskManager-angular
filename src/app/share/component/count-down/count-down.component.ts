import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, filter } from 'rxjs/operators';

@Component({
  selector: 'card-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountDownComponent implements OnInit{
  @Input() startDate = new Date()
  @Input() futurDate: Date
  private _MS_PER_SECCOND = 1000

  countDown$: Observable<string>

  constructor() { }

  ngOnInit() {
    console.log(this.futurDate)
    this.countDown$ = this.getCountDownObservale(this.startDate, this.futurDate)
  }

  private getCountDownObservale(startDate: Date, futurDate: Date) {
    return interval(1000).pipe(
      filter(() => futurDate !== undefined),
      map(elapse => this.diffInSec(startDate, futurDate) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600 % 24),
        minute: Math.floor(sec / 60 % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ day, hour, minute, second }) => `後${day}日${hour}時${minute}分${second}秒`)
    )
  }

  private diffInSec = (startDate: Date, futurDate: Date): number => {
    const diff = futurDate.getTime() - startDate.getTime()
    return Math.floor(diff / this._MS_PER_SECCOND)
  }
}
