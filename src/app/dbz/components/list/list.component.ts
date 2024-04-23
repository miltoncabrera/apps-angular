import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{ id: uuid(), name: 'Trunks', power: 3800 }];

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?: string): void {
    if (!index) return;
    this.onDeleteById.emit(index);
  }


}
