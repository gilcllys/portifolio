import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectComponent } from './project/project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainAppComponent } from './main-app/main-app.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectComponent,
    AboutMeComponent,
    ContactComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
