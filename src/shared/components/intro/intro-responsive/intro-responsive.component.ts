import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-intro-responsive',
  templateUrl: './intro-responsive.component.html',
  styleUrl: './intro-responsive.component.scss',
})
export class IntroResponsiveComponent {
  isShowing: boolean = false;

  @Input() setCurrentLanguage!: (lang: string) => void;

  constructor(
  private translate: TranslateService) {
  }

  getOptionLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.setCurrentLanguage(language);
  };

  showButtons(): void {
    this.isShowing = !this.isShowing;
  }
}
