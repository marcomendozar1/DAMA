import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.scss']
})
export class ListaAddComponent implements OnInit {

  item: any = {
    altitud: " ",
    cabecera: "",
    clima: "",
    derrumbesCheck: "",
    deslaveCheck: "",
    igecem: "",
    incendioCheck: "",
    inundacionCheck: "",
    latitud: "",
    longitud: "",
    nombre: "",
    poblacion: "",
    significado: "",
    sismoCheck: "",
    superficie: "",
    vocanesCheck: ""
  }

  constructor(private conexion: ConexionService) { }

  ngOnInit(): void {
  }

  agregar() {
    this.conexion.addItem(this.item);
    this.item.altitud = "";
    this.item.cabecera = "";
    this.item.clima = "";
    this.item.derrumbesCheck = "";
    this.item.deslaveCheck = "";
    this.item.igecem = "";
    this.item.incendioCheck = "";
    this.item.inundacionCheck = "";
    this.item.latitud = "";
    this.item.longitud = "";
    this.item.nombre = "";
    this.item.poblacion = "";
    this.item.significado = "";
    this.item.sismoCheck = "";
    this.item.superficie = "";
    this.item.vocanesCheck = "";

  }
}
