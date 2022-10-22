import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccontentleftComponent } from './publiccontentleft.component';

describe('PubliccontentleftComponent', () => {
  let component: PubliccontentleftComponent;
  let fixture: ComponentFixture<PubliccontentleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliccontentleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliccontentleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
