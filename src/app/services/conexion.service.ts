import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
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

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem() {
    return this.items;
  }

  addItem(item: Item) {
    // Persist a document id
    //const id = this.afs.createId();
    //const item: Item = { id, name };
    //this.itemsCollection.doc(id).set(item);
    this.itemsCollection.add(item);
  }

  deleteItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }

}
