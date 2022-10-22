import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccontentroghtComponent } from './publiccontentroght.component';

describe('PubliccontentroghtComponent', () => {
  let component: PubliccontentroghtComponent;
  let fixture: ComponentFixture<PubliccontentroghtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliccontentroghtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliccontentroghtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
