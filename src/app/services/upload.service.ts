import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, setDoc, doc  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection } from '@firebase/firestore';
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
    const path = `${articulo}/${nombre}`;
    const file = info.archivo;
    const datos = collection(this.db, 'img');
    const task = this.storage.upload(path, file)
    this.uploadPercent = task.percentageChanges();
    task.task.snapshot.ref.getDownloadURL().then(function(url){
      setDoc(doc(datos,articulo,nombre,nombre), {nombre:nombre,descripcion:descripcion,path:path,url:url})
    })

        
  }
  
}