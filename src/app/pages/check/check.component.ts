import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(db: AngularFireDatabaseModule) { }

  ngOnInit() {
    console.log('>>>', AngularFireDatabaseModule);
  }

}
// try to attract and engage rather than asking
