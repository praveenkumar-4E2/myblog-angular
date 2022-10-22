import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicheroComponent } from './publichero.component';

describe('PublicheroComponent', () => {
  let component: PublicheroComponent;
  let fixture: ComponentFixture<PublicheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
