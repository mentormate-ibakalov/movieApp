import { Movies, SingleMovie } from '@shared/interfaces';
import { MessageService } from '@shared/services/message.service';;
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '@shared/services';
import { of, Observable } from 'rxjs'; // Add import
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



describe('MoviesService', () => {
    let moviesService: MoviesService; // Add this

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [{
                provide: Router, useValue: 'some value'
            },
            MoviesService,
            { provide: MessageService, useValue: MessageService }
            ]
        });
        moviesService = TestBed.get(MoviesService); // Add this
    });

    it('should be created', () => { // Remove inject()
        expect(moviesService).toBeTruthy();
    });

    it('should getMovie work', () => {
        let response;
        spyOn(moviesService, 'getMovie').and.returnValue(of(SingleMovie));
        moviesService.getMovie().subscribe(res => {
        response = res;
        });
        expect(response).toEqual(SingleMovie);
    })

    it('should getMovies work', () => {
        let response:Array<Observable<Movies>>,
            expectedResponse:Array<Observable<Movies>>

        spyOn(moviesService, 'getMovies').and.returnValue(expectedResponse);
        response = moviesService.getMovies(['string']);
        expect(response).toEqual(expectedResponse);

    })
});

