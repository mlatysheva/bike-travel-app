import { Component, OnInit } from '@angular/core';
import { BikesState } from "../../../store/slices/bikes.slice";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { IBike } from "../../../models/bike.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.scss']
})
export class BikeDetailsComponent implements OnInit {
  @Select(BikesState.getSelectedBike) selectedBike$!: Observable<IBike>;

  bikeDate = '';

  constructor(
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit() {
    this.selectedBike$.subscribe((bike: IBike) => {
      if (bike && bike.date_stolen) {
        this.bikeDate = this.datePipe.transform(+bike.date_stolen * 1000, 'medium') || '';
      }
    });
  }

}
