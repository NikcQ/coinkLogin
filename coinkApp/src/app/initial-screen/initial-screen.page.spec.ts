import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialScreenPage } from './initial-screen.page';

describe('InitialScreenPage', () => {
  let component: InitialScreenPage;
  let fixture: ComponentFixture<InitialScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
