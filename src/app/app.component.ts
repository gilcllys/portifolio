import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
  };
}
