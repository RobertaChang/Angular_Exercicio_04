import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = 'Título'

  @Input()
  preco: string = 'Subtítulo'

  @Input()
  info1: string = '1'
  
  @Input()
  info2: string = '2'
  
  @Input()
  info3: string = '3'

  @Input()
  bg: string = 'white'

  @Input()
  altura: string = '100%'
  
  @Input()
  cor: string = 'black'
  
  constructor(
    private snack: MatSnackBar
  ) {}

  alertar(): void {
    this.snack.open('Pacote Comprado', 'Ok')
  }

}
