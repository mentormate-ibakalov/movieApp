import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCategoriesComponent } from './special-categories.component';

describe('SpecialCategoriesComponent', () => {
  let component: SpecialCategoriesComponent;
  let fixture: ComponentFixture<SpecialCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
