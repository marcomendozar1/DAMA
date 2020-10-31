import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';


import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  faTrash = faTrash;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  items: any;
  editarItem: any = {
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
  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit(): void {
  }

  eliminar(item) {
    this.conexion.deleteItem(item);
  }

  editar(item, flag) {
    this.editarItem = item;
    if (flag) {
      $('.look2').removeAttr('disabled');
      $('#btnUpdate').show();
    } else {
      $('.look2').attr('disabled', true);
      $('#btnUpdate').hide();
    }
  }
  agregarItemEditado() {
    this.conexion.updateItem(this.editarItem);
  }
}
