import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Spiderman', 'Hulk', 'Goku', 'Naruto', 'Vegeta', 'Gohan', 'Ironman'];
  public removeHeroeName?: string;

  removeHeroe(): void {
    this.removeHeroeName = this.heroesName.pop();
  }

}
