import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliaComponent } from './components/articulos-familia/articulos-familia.component';
import { MockArticulosFamiliasService } from './services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';
import {
  NgbPaginationModule,   NgbModalModule,
} from "@ng-bootstrap/ng-bootstrap";
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ModalDialogService } from './services/modal-dialog.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliaComponent },
      { path: 'articulos', component: ArticulosComponent }
    ]),
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule, 
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    MenuComponent,
    ArticulosComponent,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ArticulosFamiliasService,
    MockArticulosService,
    ArticulosService,
    ModalDialogService,
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    }
  ]
})
export class AppModule {}
