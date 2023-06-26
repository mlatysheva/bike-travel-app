import { Component } from '@angular/core';
import { BikesState } from "../../../store/slices/bikes.slice";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { IBike } from "../../../models/bike.model";

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent {
  @Select(BikesState.getBikes) bikes$!: Observable<IBike[]>;

}
