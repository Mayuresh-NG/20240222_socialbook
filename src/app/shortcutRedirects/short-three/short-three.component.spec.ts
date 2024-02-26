import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortThreeComponent } from './short-three.component';

describe('ShortThreeComponent', () => {
  let component: ShortThreeComponent;
  let fixture: ComponentFixture<ShortThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
