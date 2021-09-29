import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material.module";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { StarsRaitingComponent } from './components/stars-raiting/stars-raiting.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, StarsRaitingComponent],
  imports: [AngularMaterialModule],
  exports: [LoadingSpinnerComponent, StarsRaitingComponent, AngularMaterialModule]
})

export class SharedModule {}
