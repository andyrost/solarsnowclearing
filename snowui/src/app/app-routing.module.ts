import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { BarreComponent } from './modules/barre/barre.component';
import { BrandonComponent } from './modules/brandon/brandon.component';
import { HistoryComponent } from './modules/history/history.component';
import { ManualCalculationComponent } from './modules/manual-calculation/manual-calculation.component';
import { StAlbansComponent } from './modules/st-albans/st-albans.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'barre', component: BarreComponent},
  {path: 'brandon', component: BrandonComponent},
  {path: 'st-albans', component: StAlbansComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'custom', component: ManualCalculationComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
