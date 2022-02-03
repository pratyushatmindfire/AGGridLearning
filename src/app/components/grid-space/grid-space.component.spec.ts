import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSpaceComponent } from './grid-space.component';

describe('GridSpaceComponent', () => {
  let component: GridSpaceComponent;
  let fixture: ComponentFixture<GridSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
