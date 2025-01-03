import {Component, HostListener, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  widthSizePage!: number;
  isBrowser: boolean;

  @Input() setCurrentLanguage!: (lang: string) => void;
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      // Captura inicial do tamanho da tela
      this.updateScreenSize();
      // Ouça o evento de redimensionamento
      window.addEventListener('resize', this.updateScreenSize.bind(this));
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateScreenSize();
  }

  getOptionLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.setCurrentLanguage(language);
  };

  private updateScreenSize(): void {
    this.widthSizePage = window.innerWidth;
  }
}
