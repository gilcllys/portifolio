import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './pages/home/main-app/main-app.component';
import { ContactComponent } from './pages/home/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
