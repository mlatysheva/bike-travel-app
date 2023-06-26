import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { IBike } from "../../../models/bike.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent {
  @Input() bike?: IBike;

  constructor(private router: Router) {
  }

  renderBikeDetails(id: number): void {
    this.router.navigate([`/bikes/${id}`]);
  }
}
