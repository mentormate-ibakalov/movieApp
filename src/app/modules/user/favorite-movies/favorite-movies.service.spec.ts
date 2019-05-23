import { TestBed } from '@angular/core/testing';

import { FavoriteMoviesService } from './favorite-movies.service';

describe('FavoriteMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteMoviesService = TestBed.get(FavoriteMoviesService);
    expect(service).toBeTruthy();
  });
});
