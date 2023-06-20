import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ProgressBarComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, ProgressBarComponent, MenuComponent],
})
export class CoreModule { }
