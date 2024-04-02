import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSpaceComponent } from './color-space.component';

describe('ColorSpaceComponent', () => {
  let component: ColorSpaceComponent;
  let fixture: ComponentFixture<ColorSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorSpaceComponent]
    });
    fixture = TestBed.createComponent(ColorSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
