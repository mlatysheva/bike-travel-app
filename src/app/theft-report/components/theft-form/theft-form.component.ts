import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { TheftState } from "../../../store/slices/theft.slice";
import { Observable, of } from "rxjs";
import { TheftStateModel } from "../../../store/state.model";
// import { UpdateFormValue } from "../../../store/actions/theft.actions";
import { UpdateFormValue } from "@ngxs/form-plugin";
import { Router } from "@angular/router";
import { BikeApiService } from "../../../shared/services/bike-api.service";
import { IManufacturer } from "../../../models/manufacturer.model";
import { SetManufacturers } from "../../../store/actions/bikes.actions";
import { BikesState } from "../../../store/slices/bikes.slice";
import { IColor } from "../../../models/color.model";
import { IBikeType } from "../../../models/bikeType.model";

@Component({
  selector: 'app-theft-form',
  templateUrl: './theft-form.component.html',
  styleUrls: ['./theft-form.component.scss']
})
export class TheftFormComponent implements OnInit {
  theftForm: FormGroup;

  // cycle_types$: Observable<string[]> = of(['mountain', 'city', 'tandem']);
  // frame_colors$: Observable<string[]> = of(['red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'purple', 'pink', 'brown', 'silver', 'gray']);

  years: number[] = [];

  @Select(TheftState) stolenBikeForm$: Observable<TheftStateModel>;

  @Select(BikesState.getManufacturers) manufacturers$: Observable<IManufacturer[]>;

  @Select(BikesState.getFrameColors) frame_colors$: Observable<IColor[]>;

  @Select(BikesState.getBikeTypes) cycle_types$: Observable<IBikeType[]>;


  constructor(
    private store: Store,
    private router: Router,
    private formBuilder: FormBuilder,
    private bikeApiService: BikeApiService,
  ) {
    this.theftForm = this.formBuilder.group({
      date_stolen: [new Date()],
      description: [''],
      frame_colors: [''],
      frame_model: [''],
      large_img: [''],
      manufacturer_name: [''],
      serial: [''],
      stolen: [true],
      stolen_location: [''],
      stolen_coordinates: [''],
      title: ['', [Validators.required]],
      year: [2010],
      cycle_type: [''],
    });

    this.stolenBikeForm$.subscribe((stolenBikeForm) => {
      this.theftForm.patchValue(stolenBikeForm);
    });

    for (let i = new Date().getFullYear(); i >= 1970; i--) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.bikeApiService.getPopularManufacturers().subscribe();
    this.bikeApiService.getFrameColors().subscribe();
    this.bikeApiService.getBikeTypes().subscribe();
    this.cycle_types$.subscribe();
  }

  onSubmit() {
    if (this.theftForm.valid) {
      this.store.dispatch(new UpdateFormValue(this.theftForm.value));
      alert('Form was successfully submitted!');
      this.router.navigate(['/']);
      // this.store.dispatch(new UpdateFormValue({ model: this.theftForm.value }));
    }
  }

}
