import { Movies } from '@shared/interfaces/movies';
import { SITEURLS } from '@shared/site-urls.config';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GetMoviesComponent {
  @Input() movie: Observable<Movies>;
  @Input() checkLoggedIn: boolean;
  @Output() id = new EventEmitter<number>();


  title: string;
  siteUrls = SITEURLS;

  outputTheId(id: number) {
    this.id.emit(id);
  }

}
