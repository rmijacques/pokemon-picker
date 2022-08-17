import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntialConfigComponent } from './intial-config.component';

describe('IntialConfigComponent', () => {
  let component: IntialConfigComponent;
  let fixture: ComponentFixture<IntialConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntialConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntialConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
