import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignalList } from './cart-signal-list';

describe('CartList', () => {
  let component: CartSignalList;
  let fixture: ComponentFixture<CartSignalList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
