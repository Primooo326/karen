import { Component, OnInit } from '@angular/core';
import { InfoModel } from 'src/app/models/InfoModel';
import { NgForm } from '@angular/forms';
import { ServicioService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  filepath = '';
  file: File | any;
  uploadFiles: Array <File>;
  info: InfoModel = new InfoModel();
  constructor(private servicio:ServicioService) {
    this.uploadFiles = new Array;
   }
   guardar(form: NgForm){
    if (form.invalid){
      console.warn('formulario invalido');
      return;
    }
    console.log('guardar ok');
    
    this.info.archivo = this.file;
    this.servicio.upload(this.info)
  }

  onFileChange(e: any){
    this.file = e.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {this.filepath = event.target.result; };
  }
  ngOnInit(): void {
  }

}

