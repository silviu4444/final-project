import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { StarsRaitingComponent } from './components/stars-raiting/stars-raiting.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, StarsRaitingComponent],
  exports: [LoadingSpinnerComponent, StarsRaitingComponent]
})

export class SharedModule {}
