import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { SharedModule } from "../shared/shared.module";
import { TheftState } from "../store/slices/theft.slice";
import { NgxsModule } from "@ngxs/store";
import { TheftFormComponent } from './components/theft-form/theft-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TheftFormPageComponent } from './pages/theft-form-page/theft-form-page.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: TheftFormPageComponent,
  }
];

@NgModule({
  declarations: [
    TheftFormComponent,
    TheftFormPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([TheftState]),
    NgxsFormPluginModule,
    ReactiveFormsModule,
  ]
})
export class TheftReportModule {
}
