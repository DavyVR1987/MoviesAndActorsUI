import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorListItemComponent } from './actor-list-item.component';

describe('ActorListItemComponent', () => {
  let component: ActorListItemComponent;
  let fixture: ComponentFixture<ActorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
