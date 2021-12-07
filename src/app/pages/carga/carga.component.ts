import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InfoModel } from 'src/app/models/info.model';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  filepath = '';
  file: File | any;
  uploadFiles: Array <File>;
  info: InfoModel = new InfoModel();

constructor(private servicio: ServicioService) {
    this.uploadFiles = new Array;
   }

  ngOnInit(): void {

  }
  hola(){
    console.log('hola');
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

  // tslint:disable-next-line: typedef
  onFileChange(e: any){
    this.file = e.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {this.filepath = event.target.result; };
  }

}
