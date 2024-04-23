import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Bills', power: 5000 },
    { id: uuid(), name: 'Broly', power: 3000 },
    { id: uuid(), name: 'Goku', power: 2800 },
    { id: uuid(), name: 'Vegeta', power: 2500 },
    { id: uuid(), name: 'Gohan', power: 2400 },
    { id: uuid(), name: 'Freezer', power: 2400 }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteByIds(index: string): void {
    // this.characters.splice(index, 1);
    this.characters = this.characters.filter(character => character.id !== index);
  }
}
