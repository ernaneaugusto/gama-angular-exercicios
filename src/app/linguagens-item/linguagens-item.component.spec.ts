import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensItemComponent } from './linguagens-item.component';

describe('LinguagensItemComponent', () => {
  let component: LinguagensItemComponent;
  let fixture: ComponentFixture<LinguagensItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagensItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagensItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
