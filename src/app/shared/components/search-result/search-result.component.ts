import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITEURLS } from '@shared/site-urls.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResultComponent {
  movies$: Observable<Object>;
  siteUrls = SITEURLS
}
