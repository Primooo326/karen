import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
export interface Item{ articulo:string, nombre:string, descripcion:string,url :string}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollectionGroup<Item>;
  items: Observable<Item[]>;
  constructor(private storage: AngularFireStorage,private afs: AngularFirestore) {
    this.itemsCollection = afs.collectionGroup<Item>('luna');
    this.items = this.itemsCollection.valueChanges()
    console.log(this.items)

}  
ngOnInit(){
  }}

