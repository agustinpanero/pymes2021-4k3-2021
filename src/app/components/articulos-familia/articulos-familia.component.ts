import { Component, OnInit } from "@angular/core";
import {
  ArticuloFamilia,
  ArticulosFamilias
} from "../../models/articulo-familia";

import { ArticulosFamiliasService } from "../../services/articulos-familias.service";

@Component({
  selector: "app-articulos-familia",
  templateUrl: "./articulos-familia.component.html",
  styleUrls: ["./articulos-familia.component.css"]
})
export class ArticulosFamiliaComponent implements OnInit {
  Titulo = "Articulos Familias";
  Items: ArticuloFamilia[];
  constructor(private articulosFamiliasService: ArticulosFamiliasService) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
