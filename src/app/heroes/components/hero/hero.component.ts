import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public buttonName: boolean = false;
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return 'Hola'.toUpperCase();
  }
  eventChangeNameHero(): void {
    this.name = 'Spiderman';
  }

  eventChangeAgeHero(): void {
    this.age = 25
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
