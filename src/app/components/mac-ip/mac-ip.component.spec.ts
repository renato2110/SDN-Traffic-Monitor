import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacIpComponent } from './mac-ip.component';

describe('MacIpComponent', () => {
  let component: MacIpComponent;
  let fixture: ComponentFixture<MacIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
