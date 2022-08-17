import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTextBoxComponent } from './pokemon-text-box.component';

describe('PokemonTextBoxComponent', () => {
  let component: PokemonTextBoxComponent;
  let fixture: ComponentFixture<PokemonTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
