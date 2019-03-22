import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
        const config = {
            apiKey: "AIzaSyA1g3f87BMD1it8mavNs6qAA9dpeF_pbVo",
            authDomain: "app-contact-be412.firebaseapp.com",
            databaseURL: "https://app-contact-be412.firebaseio.com",
            projectId: "app-contact-be412",
            storageBucket: "app-contact-be412.appspot.com",
            messagingSenderId: "868852170065"
        };
        firebase.initializeApp(config);
    }
}

