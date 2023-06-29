import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { TheftState } from "../../../store/slices/theft.slice";
import { Observable, of } from "rxjs";
import { TheftStateModel } from "../../../store/state.model";
import { SubmitTheftReport, UpdateFormValue } from "../../../store/actions/theft.actions";

@Component({
  selector: 'app-theft-form',
  templateUrl: './theft-form.component.html',
  styleUrls: ['./theft-form.component.scss']
})
export class TheftFormComponent {
  theftForm: FormGroup;

  cycle_types$: Observable<string[]> = of(['mountain', 'city', 'tandem']);
  frame_colors$: Observable<string[]> = of(['red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'purple', 'pink', 'brown', 'silver', 'gray']);

  years: number[] = [];

  @Select(TheftState) stolenBikeForm$: Observable<TheftStateModel>;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
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

  onSubmit() {
    console.log(this.theftForm.value);
    if (this.theftForm.valid) {
      this.store.dispatch(new UpdateFormValue({ stolenBike: this.theftForm.value }));
    }
  }
}
