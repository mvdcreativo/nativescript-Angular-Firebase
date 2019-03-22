import { Injectable } from '@angular/core';

import * as firebase from 'nativescript-plugin-firebase';
import { firestore } from "nativescript-plugin-firebase";

import { Curso } from './curso';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }


  public addCurso(){
    const newCurso = firestore.collection('cursos');

    newCurso.add({
      name:'Cocina Casera',
      description: 'Cosina rapido, rico y saludable',
      image: 'http',
      date: '24/08/82',
      duration: 8,
      updateTs: Date()
    }).then(
      (curso) => {
      console.log(`curso: ${JSON.stringify(curso)}`);
    });

  }
}
