import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { SharedModule } from "../shared/shared.module";
import { TheftState } from "../store/slices/theft.slice";
import { NgxsModule } from "@ngxs/store";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([TheftState]),
    NgxsFormPluginModule,
  ]
})
export class TheftReportModule {
}
