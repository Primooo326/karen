import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, setDoc, doc, updateDoc, collection, arrayUnion  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {  Observable } from 'rxjs';
import { InfoModel } from '../models/InfoModel';
@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  uploadPercent: any;
  downloadURL!: Observable<string>;

  constructor(private storage: AngularFireStorage, private db: Firestore) {
   }
  upload(info: InfoModel): void {
    const nombre = info.Nombre;
    const descripcion = info.descripcion;
    const articulo  = info.articulo;
    const file = info.archivo;
    const datos = collection(this.db, 'articulo');
    setDoc(doc(datos,articulo),{nombre:nombre,descripcion:descripcion})
    let contador = 0
    for(let img of file){
      const path = `${articulo}/${contador}`;
      contador = contador +1
      const task = this.storage.upload(path, img);
      this.uploadPercent = task.percentageChanges();
      setTimeout(()=>{
        const path = doc(this.db,'articulo',articulo)
        
        task.task.snapshot.ref.getDownloadURL().then(function(url){
          console.log(url);
          updateDoc(path,{url:arrayUnion(url)})
  
  
        })
      },3000)
    }


        
  }
  pruebas(urls:Array<string>){
    const datos = collection(this.db, 'pruebas');
    setDoc(doc(datos,'xd'),{hola:'saludo'})
    const documeto = doc(this.db,'pruebas','xd')
    let contador = 0
    for(let img of urls ){
      const task = this.storage.upload(`prueba/${contador}`, img)
      contador = contador + 1
      this.uploadPercent = task.percentageChanges();
      task.task.snapshot.ref.getDownloadURL().then(function(url){
      updateDoc(documeto,{chao:arrayUnion(url)})
      })
    }

  }
}