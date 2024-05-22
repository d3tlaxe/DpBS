import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDersEkleComponent } from './admin-ders-ekle.component';

describe('AdminDersEkleComponent', () => {
  let component: AdminDersEkleComponent;
  let fixture: ComponentFixture<AdminDersEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDersEkleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDersEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
