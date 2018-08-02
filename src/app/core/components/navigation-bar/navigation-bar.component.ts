import { Component } from '@angular/core';
import { TranslationsService } from '../../services/translations/translations.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(private translationsService: TranslationsService) {}

  onClick(event: Event, language: string): void {
    event.preventDefault();
    this.translationsService.changeLanguage(language);
  }
}
