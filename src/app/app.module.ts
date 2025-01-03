import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from '../shared/components/intro/intro.component';
import { ProjectComponent } from './pages/home/components/project/project.component';
import { AboutMeComponent } from './pages/home/components/about-me/about-me.component';
import { ContactComponent } from './pages/home/components/contact/contact.component';
import { MainAppComponent } from './pages/home/main-app/main-app.component';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMedium,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {faBars, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { BaseService } from './service/base-service.service';
import { ProjectItemComponent } from './pages/home/components/project/project-item/project-item.component';
import { ShortPersonalDescriptionComponent } from './pages/home/components/short-personal-description/short-personal-description.component';
import {NgOptimizedImage} from "@angular/common";
import {IntroResponsiveComponent} from "../shared/components/intro/intro-responsive/intro-responsive.component";



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectComponent,
    AboutMeComponent,
    ContactComponent,
    MainAppComponent,
    ProjectItemComponent,
    ShortPersonalDescriptionComponent,
    IntroResponsiveComponent,

  ],
    imports: [
        FontAwesomeModule,
        BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgOptimizedImage
    ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faMedium,
      faLinkedin,
      faBars,
      faUpRightFromSquare

    );
  }
}
