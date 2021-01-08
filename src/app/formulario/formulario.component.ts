import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl( '', Validators.compose([Validators.email, Validators.required])),
    //telefono: new FormControl( '', Validators.compose([Validators.minLength(10), Validators.required])),
    telefono: new FormControl('', Validators.compose([Validators.pattern(/^[+]+[0-9]+$/),Validators.required, Validators.maxLength(20), Validators.minLength(7)])),
    name: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z ]+$/),Validators.required])),
    lname: new FormControl('', Validators.compose([Validators.pattern(/^[a-zA-Z ]+$/),Validators.required])),
    username: new FormControl('', Validators.compose([Validators.maxLength(20),Validators.required, Validators.minLength(6)])),
    password: new FormControl('', Validators.compose([Validators.minLength(6),Validators.required])),
    vpassword: new FormControl('',Validators.compose([Validators.minLength(6),Validators.required])),
  });

  datos: any [];

  constructor( db: AngularFireDatabase) {
    db.list('/Animes').snapshotChanges().subscribe( dato=>{
      this.datos=dato;
      console.log(dato);
      
    });
   }

  ngOnInit(): void {
  }

  enviar(values){
    // alert(values.JSON);
    console.log(values);
    
  }
}
