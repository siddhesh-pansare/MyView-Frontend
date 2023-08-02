import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-scratchpad',
  templateUrl: './scratchpad.component.html',
  styleUrls: ['./scratchpad.component.css']
})
export class ScratchpadComponent {
  constructor(public dialogRef: MatDialogRef<any>) { }

//    ngOnInit() {
//     this.dialogRef.updateSize('60%', '80%');
//     // this.changeDialogSize();
// }

  // Method to change the size on button click
  // changeDialogSize() {
  //   this.dialogRef.updateSize('40%', '50%'); // Replace with desired width and height
  // }

}
