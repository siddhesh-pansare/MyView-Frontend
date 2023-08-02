import { Component } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-scratchpad',
  templateUrl: './scratchpad.component.html',
  styleUrls: ['./scratchpad.component.css']
})
export class ScratchpadComponent {
  private originalWidth = '300px';
  private originalHeight = '310px';
  private expandedWidth = '500px';
  private expandedHeight = '450px';
  
  private isExpanded = false;

  constructor(public dialogRef: MatDialogRef<ScratchpadComponent>) {
    // Initially, set the dialog size to its original size
    this.dialogRef.updateSize(this.originalWidth, this.originalHeight);
   }
  expandDialog() {
    const newWidth = this.isExpanded ? this.originalWidth : this.expandedWidth;
    const newHeight = this.isExpanded ? this.originalHeight : this.expandedHeight;

    // Update the dialog size
    this.dialogRef.updateSize(newWidth, newHeight);

    // Toggle the dialog state
    this.isExpanded = !this.isExpanded;
  }
}
