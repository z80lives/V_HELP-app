import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOfferFormComponent } from './review-offer-form.component';

describe('ReviewOfferFormComponent', () => {
  let component: ReviewOfferFormComponent;
  let fixture: ComponentFixture<ReviewOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOfferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
