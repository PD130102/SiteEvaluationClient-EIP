import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvggroupbywcComponent } from './avggroupbywc.component';

describe('AvggroupbywcComponent', () => {
  let component: AvggroupbywcComponent;
  let fixture: ComponentFixture<AvggroupbywcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvggroupbywcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvggroupbywcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
