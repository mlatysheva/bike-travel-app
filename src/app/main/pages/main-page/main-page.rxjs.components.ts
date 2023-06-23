import { Component } from '@angular/core';
import { concat, concatMap, merge, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit {

  // merge and mergeMap
  source1$ = of(4, 5, 6);
  source2$ = of(7, 8, 9);

  merged$ = merge(this.source1$, this.source2$);

  source$ = of(1, 2, 3);

  mergedMap$ = this.source$.pipe(
    mergeMap((value: number) => of(value * 1000))
  );

  // concat and concatMap

  concatenated$ = concat(this.source1$, this.source2$);

  concatenatedMap$ = this.source$.pipe(
    concatMap(value => of(value * 1000))
  );

  ngOnInit() {
    this.merged$.subscribe((value: number) => {
      console.log('in merge value is: ', value);
    });

    this.mergedMap$.subscribe(value => {
      console.log('in mergeMap value is: ', value);
    });

    this.concatenated$.subscribe(value => {
      console.log('in concat value is: ', value);
    });

    this.concatenatedMap$.subscribe(value => {
      console.log('in concatMap value is:', value);
    });
  }
}
