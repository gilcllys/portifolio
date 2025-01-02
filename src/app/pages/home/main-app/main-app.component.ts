import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.scss'
})
export class MainAppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }

}
