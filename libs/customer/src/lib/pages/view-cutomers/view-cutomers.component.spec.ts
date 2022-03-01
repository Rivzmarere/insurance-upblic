import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCutomersComponent } from './view-cutomers.component';

describe('ViewCutomersComponent', () => {
  let component: ViewCutomersComponent;
  let fixture: ComponentFixture<ViewCutomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCutomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCutomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
