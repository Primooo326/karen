import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private fns: AngularFireFunctions, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mknynydr',
        { name: email.name, replyto: email.email, telefono:email.tel , message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }
}
