import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia, ArticulosFamilias } from '../../models/articulo-familia';

@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css']
})
export class ArticulosFamiliaComponent implements OnInit {
    Items = ArticulosFamilias;
    Titulo = "Articulos Familias"
  constructor() { }

  ngOnInit() {
  }

}