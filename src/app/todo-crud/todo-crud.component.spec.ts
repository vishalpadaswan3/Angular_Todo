import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCrudComponent } from './todo-crud.component';

describe('TodoCrudComponent', () => {
  let component: TodoCrudComponent;
  let fixture: ComponentFixture<TodoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCrudComponent]
    });
    fixture = TestBed.createComponent(TodoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
