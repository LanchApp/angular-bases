import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  /*Se puede realizar codigo tml directamente desde la etiqueta template:
  con templateUrl: se hace referencia a la ruta de un archivo htlm ejemplo(./counter.component.html)*/
  template: `
    <p>Contador: {{counter}}</p>

    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset()">Resetaear</button>
    <button (click)="decrementar(1)">-1</button>

  `,
})
export class CounterComponent{
  public counter: number = 0;

  incrementar(value: number): void{
    this.counter +=value;
  }
  decrementar(value: number):void{
    if(this.counter > 0){
      this.counter -=value;
    }
  }
  reset ():void{
    this.counter = 0;
  }
}
