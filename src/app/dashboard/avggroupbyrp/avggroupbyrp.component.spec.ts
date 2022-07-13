import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvggroupbyrpComponent } from './avggroupbyrp.component';

describe('AvggroupbyrpComponent', () => {
  let component: AvggroupbyrpComponent;
  let fixture: ComponentFixture<AvggroupbyrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvggroupbyrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvggroupbyrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
