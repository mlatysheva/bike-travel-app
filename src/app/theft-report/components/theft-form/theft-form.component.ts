import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { TheftState } from "../../../store/slices/theft.slice";
import { Observable, of } from "rxjs";
import { TheftStateModel } from "../../../store/state.model";
// import { UpdateFormValue } from "../../../store/actions/theft.actions";
import { UpdateFormValue } from "@ngxs/form-plugin";
import { Router } from "@angular/router";

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
    private router: Router,
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
    if (this.theftForm.valid) {
      this.store.dispatch(new UpdateFormValue(this.theftForm.value));
      alert('Form was successfully submitted!');
      this.router.navigate(['/']);
      // this.store.dispatch(new UpdateFormValue({ model: this.theftForm.value }));
    }
  }
}
