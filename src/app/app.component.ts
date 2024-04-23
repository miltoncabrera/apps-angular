import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  public title: string = 'Milton Andrés Cabrera López';
  public counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  discrementBy(): void {
    if (this.counter > 0)
      this.counter--;

  }


}
