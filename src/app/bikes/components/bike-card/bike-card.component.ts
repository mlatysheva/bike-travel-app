import { Component, Input, OnInit } from '@angular/core';
import { IBike } from "../../../models/bike.model";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { SetSelectedBike } from "../../../store/actions/bikes.actions";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent implements OnInit {
  @Input() bike?: IBike;

  constructor(
    private router: Router,
    private store: Store,
    private datePipe: DatePipe,
  ) {
  }

  bikeDate = '';

  ngOnInit() {
    if (this.bike && this.bike.date_stolen) {
      this.bikeDate = this.datePipe.transform(+this.bike.date_stolen * 1000, 'medium') || '';
    }
  }

  renderBikeDetails(id: string): void {
    if (this.bike) {
      this.store.dispatch(new SetSelectedBike(this.bike));
    }
    this.router.navigate([`/bikes/${id}`]);
  }
}
