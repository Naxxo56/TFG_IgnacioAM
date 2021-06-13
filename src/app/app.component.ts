import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TFG IGNACIO ARROYO MAYO';
  constructor() { }

  ngOnInit() {

  }
}
 
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.3.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.3.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/
