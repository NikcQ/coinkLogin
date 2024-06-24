import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelephonePageRoutingModule } from './telephone-routing.module';

import { TelephonePage } from './telephone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelephonePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TelephonePage]
})
export class TelephonePageModule {}
