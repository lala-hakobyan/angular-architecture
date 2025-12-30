import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoBar } from './promo-bar';

describe('PromoBar', () => {
  let component: PromoBar;
  let fixture: ComponentFixture<PromoBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
