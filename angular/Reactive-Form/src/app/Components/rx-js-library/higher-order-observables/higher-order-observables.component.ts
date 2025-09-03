import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { mergeMap, switchMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-higher-order-observables',
  templateUrl: './higher-order-observables.component.html',
  styleUrls: ['./higher-order-observables.component.css']
})
export class HigherOrderObservablesComponent implements OnInit, OnDestroy {

  mergeMapResults: string[] = [];
  switchMapResults: string[] = [];
  private destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  triggerMergeMap(): void {
    this.mergeMapResults = [];

    // Simulate multiple clicks
    of(1, 2, 3).pipe(
      mergeMap(value =>
        interval(1000).pipe(
          take(3),
          takeUntil(this.destroy$)
        ).pipe(
          mergeMap(intervalValue => of(`Click ${value} - Interval ${intervalValue}`))
        ),2
      ),
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.mergeMapResults.push(result);
    });

    // of(1, 2, 3).pipe(
    //   mergeMap(value =>{
    //     return of(`rounak ${value} - Interval `)
    //   })
    // ).subscribe(result => {
    //   this.mergeMapResults.push(result);
    // });

    // of(1, 2, 3).pipe(exhaustMap(value => { return of(value * 2) })).subscribe(data => { console.log(data); })

  }

  triggerSwitchMap(): void {
    this.switchMapResults = [];

    // Simulate rapid clicks that switch to latest
    of('Search A', 'Search B', 'Search C').pipe(
      switchMap(query =>
        interval(300).pipe(
          take(3),
          takeUntil(this.destroy$)
        ).pipe(
          mergeMap(value => of(`${query} - Result ${value}`))
        )
      ),
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.switchMapResults.push(result);
    });
  }
}