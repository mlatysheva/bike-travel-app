import { Component, Input } from '@angular/core';
import { IBike } from "../../../models/bike.model";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { SetSelectedBike } from "../../../store/actions/bikes.actions";

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent {
  @Input() bike?: IBike;

  constructor(
    private router: Router,
    private store: Store,
  ) {
  }

  renderBikeDetails(id: number): void {
    if (this.bike) {
      this.store.dispatch(new SetSelectedBike(this.bike));
    }
    this.router.navigate([`/bikes/${id}`]);
  }
}
