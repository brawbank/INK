import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSpaceComponent } from './color-space/color-space.component';
import { InkAmountComponent } from './ink-amount/ink-amount.component';
import { ColorMixingComponent } from './color-mixing/color-mixing.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {path: '', redirectTo: 'color-space', pathMatch: 'full'},
  {path: 'color-space', component: ColorSpaceComponent},
  {path: 'ink-amount', component: InkAmountComponent},
  {path: 'ink-amount/:id', component: InkAmountComponent},
  {path: 'color-mixing', component: ColorMixingComponent},
  {path: 'history', component: HistoryComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
