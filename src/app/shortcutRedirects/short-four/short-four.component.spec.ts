import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFourComponent } from './short-four.component';

describe('ShortFourComponent', () => {
  let component: ShortFourComponent;
  let fixture: ComponentFixture<ShortFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
