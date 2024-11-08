import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstuentsComponent } from './allstuents.component';

describe('AllstuentsComponent', () => {
  let component: AllstuentsComponent;
  let fixture: ComponentFixture<AllstuentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllstuentsComponent]
    });
    fixture = TestBed.createComponent(AllstuentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
