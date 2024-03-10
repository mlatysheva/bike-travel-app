import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { TheftState } from "../../../store/slices/theft.slice";
import { Observable } from "rxjs";
import { TheftStateModel } from "../../../store/state.model";
// import { UpdateFormValue } from "../../../store/actions/theft.actions";
import { ResetForm, UpdateFormValue, UpdateFormDirty } from "@ngxs/form-plugin";
import { Router } from "@angular/router";
import { BikeApiService } from "../../../shared/services/bike-api.service";
import { IManufacturer } from "../../../models/manufacturer.model";
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

  years: number[] = [];

  @Select(TheftState) stolenBikeForm$: Observable<TheftStateModel>;

  @Select(BikesState.getManufacturers) manufacturers$: Observable<IManufacturer[]>;

  @Select(BikesState.getFrameColors) frame_colors$: Observable<IColor[]>;

  @Select(BikesState.getBikeTypes) cycle_types$: Observable<IBikeType[]>;

  get title() {
    return this.theftForm.controls['title'];
  }

  get description() {
    return this.theftForm.controls['description'];
  }

  get frame_colors() {
    return this.theftForm.controls['frame_colors'];
  }

  get large_img() {
    return this.theftForm.controls['large_img'];
  }

  get manufacturer_name() {
    return this.theftForm.controls['manufacturer_name'];
  }

  get date_stolen() {
    return this.theftForm.controls['date_stolen'];
  }

  get cycle_type() {
    return this.theftForm.controls['cycle_type'];
  }

  get stolen_location() {
    return this.theftForm.controls['stolen_location'];
  }

  get email() {
    return this.theftForm.controls['email'];
  }

  get phone() {
    return this.theftForm.controls['phone'];
  }

  constructor(
    private store: Store,
    private router: Router,
    private formBuilder: FormBuilder,
    private bikeApiService: BikeApiService,
  ) {
    this.theftForm = this.formBuilder.group({
      date_stolen: [new Date(), [this.dateValidator()]],
      description: [''],
      frame_colors: [[]],
      large_img: [''],
      manufacturer_name: [''],
      serial: [''],
      stolen_location: ['', [Validators.required]],
      title: ['', [
        Validators.required,
        Validators.pattern('[0-9A-Za-z-]*'),
        Validators.minLength(3)
      ]],
      year: [2010],
      cycle_type: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern('[+0-9]*'),
        Validators.minLength(11),
        Validators.maxLength(14),
      ]],
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
      this.store.dispatch(new ResetForm({ path: 'theftReport' }));
      const dirtyFields = {};
      this.store.dispatch(new UpdateFormDirty({ dirty: false, path: 'theftReport' }));      // this.router.navigate(['/']);
      // this.store.dispatch(new UpdateFormValue({ model: this.theftForm.value }));
    }
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        return { dateValidator: true };
      }
      return null;
    };
  }

  getTitleErrorMessage() {
    if (this.title.hasError('required')) {
      return 'Titel ist erforderlich';
    } else if (this.title.hasError('minlength')) {
      return this.title.hasError('minlength') ? 'Mindestens 3 Zeichen' : '';
    } else if (this.title.hasError('pattern')) {
      return 'Nur Buchstaben und Zahlen werden akzeptiert';
    } else {
      return '';
    }
  }

  getEmailErrorMessage() {
    return this.email.hasError('email') ? 'Email ist nicht gültig' : '';
  }

  getPhoneErrorMessage() {
    if (this.phone.hasError('pattern')) {
      return 'Nur Zahlen und + werden akzeptiert';
    }
    if (this.phone.hasError('minlength')) {
      return 'Mindestens 11 Ziffern';
    }
    return this.phone.hasError('maxlength') ? 'Maximal 14 Ziffern' : '';
  }

  getDateErrorMessage() {
    return this.date_stolen.hasError('dateValidator')
      ? 'Das Datum des Diebstahls kann nicht später als heute sein'
      : '';
  }
}
