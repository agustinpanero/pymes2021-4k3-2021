import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosFamiliaComponent } from "./components/articulos-familia/articulos-familia.component";
import { MockArticulosFamiliasService } from "./services/mock-articulos-familias.service";
import { ArticulosFamiliasService } from './services/articulos-familias.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliaComponent
  ],
  bootstrap: [AppComponent],
  providers: [MockArticulosFamiliasService, ArticulosFamiliasService]
})
export class AppModule {}
