import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifListComponent } from './gif-list.component';

describe('GifListComponent', () => {
  let component: GifListComponent;
  let fixture: ComponentFixture<GifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
