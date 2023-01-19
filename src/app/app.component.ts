import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  topEmployee: any = {
    name: 'Enterprise Co',
    subordinates: [
      {
        name: 'East Coast Group',
        subordinates: [
          {
            name: 'Eastern Foreign',
          },
          {
            name: 'Eastern Domestic',
            subordinates: [{ name: 'Cleveland Chevy' }],
          },
        ],
      },
      {
        name: 'West Coast Group',
        subordinates: [
          {
            name: 'Western Foreign',
          },
        ],
      },
    ],
  };
  isClicked(topEmployee: any) {
    console.log(topEmployee);
    this.openDialog();
  }
}
