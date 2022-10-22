import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliccontentdataComponent } from './publiccontentdata.component';

describe('PubliccontentdataComponent', () => {
  let component: PubliccontentdataComponent;
  let fixture: ComponentFixture<PubliccontentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliccontentdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliccontentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
