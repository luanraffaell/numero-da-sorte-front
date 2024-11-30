import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GeneralCardInfoComponent } from './general-card-info/general-card-info.component';
import { CardNumberComponent } from './card-number/card-number.component';
import { AlertCardComponent } from './alert-card/alert-card.component';
import { FindSequenceComponent } from './find-sequence/find-sequence.component';
import { NumberSelectedComponent } from './number-selected/number-selected.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    GeneralCardInfoComponent,
    CardNumberComponent,
    AlertCardComponent,
    FindSequenceComponent,
    NumberSelectedComponent
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ToolbarComponent,
    GeneralCardInfoComponent,
    FindSequenceComponent,
    NumberSelectedComponent
  ]
})
export class ComponentsModule { }
