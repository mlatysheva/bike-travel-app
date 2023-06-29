import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-theft-form',
  templateUrl: './theft-form.component.html',
  styleUrls: ['./theft-form.component.scss']
})
export class TheftFormComponent {
  theftForm = new FormGroup({
    bike: new FormControl(),
  });

  onSubmit() {
    console.log(this.theftForm.value);
  }
}
