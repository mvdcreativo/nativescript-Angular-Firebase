import { Component, OnInit } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ns-firebase';

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  public onButtonTap(){

    this.route.navigate['login'];
    console.log('linck')


    ///////LOGIN  
    // firebase.login(
    //   {
    //     type: firebase.LoginType.PASSWORD,
    //     passwordOptions: {
    //       email: "mvdcreativo@gmail.com",
    //       password: "123456"
    //     }
    //   }
    // ).then(
    //   (user) =>{
    //     console.log(user.email)
    //   }
    // ).catch(
    //   (error)=> console.log(error)
    // );
  }
}
