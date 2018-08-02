import { Component } from '@angular/core';
import { TranslationsService } from '../../core/services/translations/translations.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aNumber: number = 10;
  aString: string = 'string';
  aBoolean: boolean = true;

  constructor(private translationsService: TranslationsService) {}

  onClick(event: Event, language: string): void {
    event.preventDefault();
    this.translationsService.changeLanguage(language);
  }
}
