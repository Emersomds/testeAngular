import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralHomeComponent } from './mural-home.component';

describe('MuralHomeComponent', () => {
  let component: MuralHomeComponent;
  let fixture: ComponentFixture<MuralHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
