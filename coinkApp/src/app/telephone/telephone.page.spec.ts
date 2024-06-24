import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelephonePage } from './telephone.page';

describe('TelephonePage', () => {
  let component: TelephonePage;
  let fixture: ComponentFixture<TelephonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
