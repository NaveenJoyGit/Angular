import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListCustomerComponent } from './movie-list-customer.component';

describe('MovieListCustomerComponent', () => {
  let component: MovieListCustomerComponent;
  let fixture: ComponentFixture<MovieListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
