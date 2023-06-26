import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { LocationsModule } from './locations/locations.module';
import { BikesModule } from './bikes/bikes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    LocationsModule,
    BikesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
