import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelectorContentComponent } from './prelector-content.component';

describe('PrelectorContentComponent', () => {
  let component: PrelectorContentComponent;
  let fixture: ComponentFixture<PrelectorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrelectorContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrelectorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
