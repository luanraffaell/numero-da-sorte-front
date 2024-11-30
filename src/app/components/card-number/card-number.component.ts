import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrl: './card-number.component.scss'
})
export class CardNumberComponent {
  @Input({required:true}) number!: number;
}
