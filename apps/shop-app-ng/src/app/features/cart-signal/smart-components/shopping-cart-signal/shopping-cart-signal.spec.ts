import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../../environments/environment';

import { ShoppingCartSignal } from './shopping-cart-signal';

describe('ShoppingCartSignal', () => {
  let component: ShoppingCartSignal;
  let fixture: ComponentFixture<ShoppingCartSignal>;
  let httpTesting: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSignal],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ShoppingCartSignal);
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
