import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTasksComponent } from './the-tasks.component';

describe('TheTasksComponent', () => {
  let component: TheTasksComponent;
  let fixture: ComponentFixture<TheTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
