import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMixingComponent } from './color-mixing.component';

describe('ColorMixingComponent', () => {
  let component: ColorMixingComponent;
  let fixture: ComponentFixture<ColorMixingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorMixingComponent]
    });
    fixture = TestBed.createComponent(ColorMixingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
