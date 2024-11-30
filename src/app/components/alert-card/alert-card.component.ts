import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.scss'
})
export class AlertCardComponent {
@Input({required:true}) textContent!: string
@Input({required:true}) classAlert!:string
}
