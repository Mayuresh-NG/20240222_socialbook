import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortoneComponent } from './shortone.component';

describe('ShortoneComponent', () => {
  let component: ShortoneComponent;
  let fixture: ComponentFixture<ShortoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
