import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  @Input() setCurrentLanguage!: (lang: string) => void;
  constructor(private translate: TranslateService) {
  }


  getOptionLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.setCurrentLanguage(language);
  };
}
