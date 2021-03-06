import { Component, OnInit } from '@angular/core';
import { InfoModel } from 'src/app/models/InfoModel';
import { NgForm } from '@angular/forms';
import { ServicioService } from 'src/app/services/upload.service';

export interface carta{imagen:string}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  filepath = '';
  filepathArray:any[] = new Array('./assets/sinFile.png');
  file: File | any;
  uploadFiles:any[] = new Array();
  names:string[] = new Array()
  info: InfoModel = new InfoModel();

  constructor(private servicio:ServicioService) {
    const imagen = ''
    console.log(this.filepathArray);
  }
   guardar(form: NgForm){
     
    if (form.invalid){
      console.warn('formulario invalido');
      return;
    }
    else{
      console.log('guardar ok');
      console.log(this.uploadFiles);
      this.info.archivo = this.uploadFiles;
      this.servicio.upload(this.info)
    }

  }

  agregar(){
    if(this.filepathArray[0]=== './assets/sinFile.png'){
      this.filepathArray.pop();
    }
    this.uploadFiles.push(this.file)
    this.filepathArray.push(this.filepath)
    this.filepath = ''
  }
  onFileChange(e: any){
    let file = e.target.files[0]
    this.file = e.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {this.filepath = event.target.result;};
  }
  ngOnInit(): void {
  }
  
}

