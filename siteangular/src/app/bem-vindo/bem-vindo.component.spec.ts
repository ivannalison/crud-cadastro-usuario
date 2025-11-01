import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindo } from './bem-vindo.component';

describe('BemVindo', () => {
  let component: BemVindo;
  let fixture: ComponentFixture<BemVindo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BemVindo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BemVindo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
