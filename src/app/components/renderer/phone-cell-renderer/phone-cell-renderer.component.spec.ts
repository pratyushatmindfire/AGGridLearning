import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCellRendererComponent } from './phone-cell-renderer.component';

describe('PhoneCellRendererComponent', () => {
  let component: PhoneCellRendererComponent;
  let fixture: ComponentFixture<PhoneCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
