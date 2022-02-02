import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardComponent } from './gif-card.component';

describe('GifCardComponent', () => {
  let component: GifCardComponent;
  let fixture: ComponentFixture<GifCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
