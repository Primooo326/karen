import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection } from '@firebase/firestore';
import {  Observable } from 'rxjs';
import { InfoModel } from '../models/InfoModel';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  uploadPercent: any;
  downloadURL!: Observable<string>;

  
  constructor(private storage: AngularFireStorage, private db: Firestore,private afs: AngularFirestore) {}
  upload(info: InfoModel): void {
    // datos
    const nombre = info.Nombre;
    const descripcion = info.descripcion;
    const articulo  = info.articulo;
    const path = `${articulo}/${nombre}`;
    const file = info.archivo;

    //declaracion de base de datos
    const ARTICULO = collection(this.db,'articulo');
    //subida de datos
    const task = this.storage.upload(path, file)
    this.uploadPercent = task.percentageChanges();
    // setDoc(doc(DATO,articulo),{articulo:articulo})
    setTimeout(function(){
      task.task.snapshot.ref.getDownloadURL().then(function(url){
        setDoc(doc(ARTICULO,articulo), {articulo:articulo,nombre:nombre,descripcion:['hola','chao'],url:url})

      }).catch(err=>console.log(err))
    },3000)
  }


}