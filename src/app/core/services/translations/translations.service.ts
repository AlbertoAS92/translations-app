import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslationsService {
  readonly url: string = '/assets/i18n/';
  readonly prefix: string = '.json';
  readonly defaultLanguage: string = 'en_GB';
  readonly availableLanguages: string[] = ['en_GB', 'es_ES', 'pl_PL'];

  constructor(private http: HttpClient, private translateService: TranslateService) {
    translateService.addLangs(this.availableLanguages);
    translateService.setDefaultLang(this.defaultLanguage);
    this.applyTranslations(this.defaultLanguage);
    translateService.use(this.defaultLanguage);
  }

  changeLanguage(language: string): void {
    this.applyTranslations(language);
    this.translateService.use(language);
  }

  private applyTranslations(language: string): void {
    this.getTranslations(language)
      .subscribe( translations => this.translateService.setTranslation(language, translations, true));
  }

  private getTranslations(language: string): Observable<{[key: string]: string}> {
    const url = `${this.url}${language}${this.prefix}`;

    return this.http.get<{[key: string]: string}>(url);
  }
}
