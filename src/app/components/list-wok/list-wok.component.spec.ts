import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWokComponent } from './list-wok.component';

describe('ListWokComponent', () => {
  let component: ListWokComponent;
  let fixture: ComponentFixture<ListWokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWokComponent]
    });
    fixture = TestBed.createComponent(ListWokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
