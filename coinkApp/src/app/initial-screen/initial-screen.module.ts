import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialScreenPageRoutingModule } from './initial-screen-routing.module';

import { InitialScreenPage } from './initial-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialScreenPageRoutingModule
  ],
  declarations: [InitialScreenPage]
})
export class InitialScreenPageModule {}
