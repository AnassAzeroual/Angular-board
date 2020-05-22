import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { SecondViewComponent } from './pages/second-view/second-view.component';
import { ThirdViewComponent } from './pages/third-view/third-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'second', component: SecondViewComponent },
  { path: 'third', component: ThirdViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
