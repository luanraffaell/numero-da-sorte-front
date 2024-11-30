import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Concurso } from './interfaces/concurso.interface';
import { ConcursoService } from './service/concurso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  numeroGerado: Concurso = {} as Concurso;
  resultadoBusca: Concurso = {} as Concurso;
  ultimoConcurso!: number;
  @ViewChild('loadDiv') myTarget!: ElementRef;
  @ViewChild('loadHead') myHead!: ElementRef;

  constructor(private _concursoService:ConcursoService){}

  ngAfterViewInit(): void {
    this.buscarUltimoConcurso()
  }
  

  gerarNumero() {
    this._concursoService.generateNumbers()
      .subscribe((result) => {
        this.numeroGerado = result;
      })
  }
  buscarNumeros(numeros: number[]) {
    const request = {
      "numeros":numeros
    }
    this._concursoService.buscarNumeros(request)
      .subscribe((result) =>{
        this.resultadoBusca = result;
      })
      this.scrollToTag(this.myTarget)
  }
  buscarUltimoConcurso(){
    this._concursoService.buscarUltimoConcurso()
      .subscribe((resp) =>{
        this.ultimoConcurso = resp.concursoNumero;
      })
  }
  limpaHistorico(event:any){
    // this.scrollToTag(this.myHead)
  }

  scrollToTag(myTarget: ElementRef) {
    myTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
