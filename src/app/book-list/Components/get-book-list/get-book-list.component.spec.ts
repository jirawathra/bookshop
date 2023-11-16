import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookListComponent } from './get-book-list.component';

describe('GetBookListComponent', () => {
  let component: GetBookListComponent;
  let fixture: ComponentFixture<GetBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBookListComponent]
    });
    fixture = TestBed.createComponent(GetBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
