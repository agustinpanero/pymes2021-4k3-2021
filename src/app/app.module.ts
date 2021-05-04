import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosFamiliaComponent } from "./components/articulos-familia/articulos-familia.component";
import { MockArticulosFamiliasService } from "./services/mock-articulos-familias.service";
import { ArticulosFamiliasService } from "./services/articulos-familias.service";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { MenuComponent } from './components/menu/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/inicio", pathMatch: "full" },
      { path: "inicio", component: InicioComponent },
      { path: "articulosfamilias", component: ArticulosFamiliaComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ArticulosFamiliasService,
    { provide: APP_BASE_HREF, useValue: "/" }
  ]
})
export class AppModule {}
