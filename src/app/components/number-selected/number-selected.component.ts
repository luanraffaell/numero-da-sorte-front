import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-number-selected',
  templateUrl: './number-selected.component.html',
  styleUrl: './number-selected.component.scss'
})
export class NumberSelectedComponent {
  
  @Input({required:true}) number!: number;
  @Input() isSelected: boolean = false;
  @Output() cardClick = new EventEmitter<number>();

  onCardClick() {
    this.cardClick.emit(this.number);
    }
  
}
