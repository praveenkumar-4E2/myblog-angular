import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccontentComponent } from './publiccontent.component';

describe('PubliccontentComponent', () => {
  let component: PubliccontentComponent;
  let fixture: ComponentFixture<PubliccontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliccontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
