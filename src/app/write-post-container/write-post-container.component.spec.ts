import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePostContainerComponent } from './write-post-container.component';

describe('WritePostContainerComponent', () => {
  let component: WritePostContainerComponent;
  let fixture: ComponentFixture<WritePostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritePostContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritePostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
