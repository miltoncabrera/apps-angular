import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-component',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters() {
    return [...this.dbzService.characters];
  }

  onDeleteByIds(id: string): void {
    this.dbzService.onDeleteByIds(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
