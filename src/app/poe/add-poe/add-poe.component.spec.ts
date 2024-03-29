import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoeComponent } from './add-poe.component';

describe('AddPoeComponent', () => {
  let component: AddPoeComponent;
  let fixture: ComponentFixture<AddPoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
