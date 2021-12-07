import { Component, OnInit } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
export interface Item{ articulo:string, nombre:string, descripcion:string,path :string}
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  profileUrl: Observable<string | null>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private storage: AngularFireStorage,private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('nombre');
    this.items = this.itemsCollection.valueChanges()
    const ref = this.storage.ref('nombre/hola');
    this.profileUrl = ref.getDownloadURL();
    console.log(this.profileUrl);


  }
  
  ngOnInit(): void {
  }

}
