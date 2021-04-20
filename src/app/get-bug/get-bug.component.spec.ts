import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBugComponent } from './get-bug.component';

describe('GetBugComponent', () => {
  let component: GetBugComponent;
  let fixture: ComponentFixture<GetBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
