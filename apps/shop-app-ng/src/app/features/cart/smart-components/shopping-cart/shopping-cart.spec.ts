import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../../environments/environment';

import { ShoppingCart } from './shopping-cart';

describe('ShoppingCart', () => {
  let component: ShoppingCart;
  let fixture: ComponentFixture<ShoppingCart>;
  let httpTesting: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCart],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Mock the HTTP requests that happen in the constructor
    const reqItems = httpTesting.expectOne(`${apiUrl}/cart/items`);
    reqItems.flush([]); // Return empty array

    const reqSavedItems = httpTesting.expectOne(`${apiUrl}/cart/saved-items`);
    reqSavedItems.flush([]); // Return empty array
  });

  afterEach(() => {
    httpTesting.verify(); // Verify no outstanding HTTP requests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
