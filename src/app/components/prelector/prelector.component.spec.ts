import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelectorComponent } from './prelector.component';

describe('PrelectorComponent', () => {
  let component: PrelectorComponent;
  let fixture: ComponentFixture<PrelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
