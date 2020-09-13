import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [BodyComponent,HeaderComponent,FooterComponent, MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    Ng5SliderModule
  ]
})
export class MainModule { }
