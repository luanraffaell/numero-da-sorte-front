import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Concurso } from '../../interfaces/concurso.interface';

@Component({
  selector: 'app-general-card-info',
  templateUrl: './general-card-info.component.html',
  styleUrl: './general-card-info.component.scss'
})
export class GeneralCardInfoComponent {
  @Input({required:true}) concursoGerado!:Concurso;
  @Output() gerarNumeros = new EventEmitter<boolean>();
  

  gerarNumero() {
    this.gerarNumeros.emit(true);
  }
  isConcursoGerado(): boolean {
    return !this.concursoGerado || Object.keys(this.concursoGerado).length === 0;
  }
  
}
