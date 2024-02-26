import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTwoComponent } from './short-two.component';

describe('ShortTwoComponent', () => {
  let component: ShortTwoComponent;
  let fixture: ComponentFixture<ShortTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
