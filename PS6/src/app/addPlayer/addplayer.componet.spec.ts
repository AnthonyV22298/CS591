import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerComponent } from './addPlayer/addplayer.component';

describe('addPlayerComponent', () => {
  let component: AddPlayerComponent;
  let fixture: ComponentFixture<AddPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
