import {NgModule} from '@angular/core';
import {MainPageComponent} from './page-construction/main-page/main-page.component';
// import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  // {path: 'index', component: AppComponent},
  {path: 'main', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
