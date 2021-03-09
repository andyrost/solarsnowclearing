import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BarreComponent } from './modules/barre/barre.component';
import { BrandonComponent } from './modules/brandon/brandon.component';
import { HistoryComponent } from './modules/history/history.component';
import { ManualCalculationComponent } from './modules/manual-calculation/manual-calculation.component';
import { StAlbansComponent } from './modules/st-albans/st-albans.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'barre', component: BarreComponent},
  {path: 'brandon', component: BrandonComponent},
  {path: 'st-albans', component: StAlbansComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'manual-calculation', component: ManualCalculationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
