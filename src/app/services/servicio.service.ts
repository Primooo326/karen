import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, setDoc, doc  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection } from '@firebase/firestore';
import { finalize, Observable } from 'rxjs';
import { InfoModel } from '../models/info.model';
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
    const datos = collection(this.db, articulo);
    // const task = this.storage.upload(path, file).task.snapshot.ref.getDownloadURL().then(function(url){

    //   setDoc(doc(datos,nombre ), {descripcion:descripcion,path:path,url:url})
    // }

    // )
    const storageRef = this.storage.ref(articulo);
        
  }
  
}