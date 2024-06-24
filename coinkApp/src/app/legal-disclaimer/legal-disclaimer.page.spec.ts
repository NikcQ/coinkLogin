import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalDisclaimerPage } from './legal-disclaimer.page';

describe('LegalDisclaimerPage', () => {
  let component: LegalDisclaimerPage;
  let fixture: ComponentFixture<LegalDisclaimerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDisclaimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
