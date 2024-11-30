import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concurso } from '../../interfaces/concurso.interface';

@Component({
  selector: 'app-find-sequence',
  templateUrl: './find-sequence.component.html',
  styleUrl: './find-sequence.component.scss'
})
export class FindSequenceComponent {
  numeros = Array.from({ length: 60 }, (_, i) => i + 1);
  selectedStates = Array(this.numeros.length).fill(false);
  selectedCount = 0; // Quantidade de itens selecionados
  maxSelectable = 6; // Limite máximo de seleções
  selectedNumbers: number[] = [];
  displayedColumns: string[] = ['concurso', 'data', 'numeros'];
  @Output() buscarNumeros = new EventEmitter<number[]>
  @Output() limpaHistorico = new EventEmitter<boolean>()
  @Input() resultadoBusca!: Concurso;

   ELEMENT_DATA: Concurso[] = [this.resultadoBusca];
   dataSource = this.ELEMENT_DATA;

  toggleSelection(index: number, cardNumber: number) {
    if (this.selectedStates[index]) {
      // Se já está selecionado, desmarcar
      this.selectedStates[index] = false;
      this.selectedCount--;
      this.selectedNumbers = this.selectedNumbers.filter(n => n !== cardNumber);
    } else if (this.selectedCount < this.maxSelectable) {
      // Permitir selecionar se ainda não atingiu o limite
      this.selectedStates[index] = true;
      this.selectedCount++;
      this.selectedNumbers.push(cardNumber);
    }
  }

  searchNumbers() {
    this.buscarNumeros.emit(this.selectedNumbers)
  }
  disableButton() {
    return this.selectedNumbers.length < 6 || this.selectedNumbers.length > 6 ? true : false
  }
  limpar(){
    this.selectedStates = Array(this.numeros.length).fill(false);
    this.selectedNumbers = [];
    this.selectedCount = 0;
    this.resultadoBusca = {} as Concurso;
    this.limpaHistorico.emit(true);
    
  }
  isConcursoGerado() {
    return !this.resultadoBusca || Object.keys(this.resultadoBusca).length === 0;
    }
}
