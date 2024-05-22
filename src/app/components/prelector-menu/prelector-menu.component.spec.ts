import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelectorMenuComponent } from './prelector-menu.component';

describe('PrelectorMenuComponent', () => {
  let component: PrelectorMenuComponent;
  let fixture: ComponentFixture<PrelectorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrelectorMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrelectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
