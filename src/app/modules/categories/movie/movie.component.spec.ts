import { Movie } from '@shared/interfaces/movies';
import { MoviesService } from '@shared/services';
import { SingleMovie } from '@shared/interfaces';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { of, Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';
// import { of, observable } from 'rxjs';

describe('MovieComponent', () => {
  let movie:Movie;
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let obserSingle: Observable<SingleMovie>;
  let moviesService: MoviesService;
  let movieComponent: MovieComponent;
  let de:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      providers: [{
        provide: ActivatedRoute, 
        useValue: {
          snapshot: { paramMap: { get: () => {
            return {params: { id: 1 }}}} 
          }
       }
      },
        { provide: MoviesService, useValue: {
          getMovie: () => { 
            return of(movie) 
          }
        } },
      ]
    })
      .compileComponents();
  }));


  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    moviesService = fixture.debugElement.injector.get(
    MoviesService
    )
    fixture.detectChanges();
  }));




  it('should create new single movie object', () => { // Remove inject()
    expect(MovieComponent).toBeTruthy();
  });

});
