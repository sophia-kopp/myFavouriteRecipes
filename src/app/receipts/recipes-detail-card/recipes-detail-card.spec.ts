import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailCard } from './recipes-detail-card';

describe('RecipesDetailCard', () => {
  let component: RecipesDetailCard;
  let fixture: ComponentFixture<RecipesDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
