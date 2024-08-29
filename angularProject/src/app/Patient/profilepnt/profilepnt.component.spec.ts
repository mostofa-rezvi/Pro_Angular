import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepntComponent } from './profilepnt.component';

describe('ProfilepntComponent', () => {
  let component: ProfilepntComponent;
  let fixture: ComponentFixture<ProfilepntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilepntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilepntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
