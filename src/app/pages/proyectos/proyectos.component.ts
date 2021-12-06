import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ServicioService } from '../../services/upload.service';
export interface Item{ articulo:string, nombre:string, descripcion:string,url :string}
export interface prueba{hola:string, chao:Array<string>}
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  x:string[] = new Array();

  // itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore, private servicio: ServicioService) {

    this.itemsCollection = afs.collection('articulo');
    this.items = this.itemsCollection.valueChanges();

   

}  
ngOnInit(){
  }
traer(){
  this.items.forEach(resp=>{
    for (let i of resp){
      let h = i.url
      console.log(h);
      for(let o of h){
        console.log(o);
        this.x.push(o)
      }
    }
  })
}
}


