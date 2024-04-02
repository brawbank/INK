import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSpaceComponent } from './color-space/color-space.component';
import { InkAmountComponent } from './ink-amount/ink-amount.component';
import { ColorMixingComponent } from './color-mixing/color-mixing.component';
import { HistoryComponent } from './history/history.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    ColorSpaceComponent,
       InkAmountComponent,
       ColorMixingComponent,
       HistoryComponent
  ],
  imports: [
    CommonModule, FeaturesRoutingModule, ReactiveFormsModule
  ]
})
export class FeaturesModule { }
