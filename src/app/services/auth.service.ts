import { Injectable, NgZone } from '@angular/core';
//import { User } from "../models/user";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
//import { auth } from 'firebase/app';
import firebase from 'firebase/app'  
​
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any; // Save logged in user data
 

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
      this.router.navigate(['/profile']);
      console.log("work")
      })
      .catch((error) => {      
        window.alert(error.message) 
        this.router.navigate(['/login'])
        console.log("not work")
       })
  }


  // Sign up with email/password
  SignUp(email,password,uname,fname) {
    return this.afAuth.createUserWithEmailAndPassword(email,password)
      .then((result) => {
        this.afs.collection('User').add({
             useremail:email,
             userpassword:password,
             userId:result.user.uid,
             username:uname,
             firstname:fname
        })
        this.router.navigate(['/profile'])
        console.log("work")
      }).catch((error) => {
        window.alert(error.message)
        this.router.navigate(['/register'])
        console.log("not work")
      })
  }


   //auth guard 
   isUserLoggedIn(){          
        return false;
   }



  }


  
