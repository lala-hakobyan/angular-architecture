import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartList } from './cart-list';

describe('CartList', () => {
  let component: CartList;
  let fixture: ComponentFixture<CartList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
