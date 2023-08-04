import { Component } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-scratchpad',
  templateUrl: './scratchpad.component.html',
  styleUrls: ['./scratchpad.component.css']
})
export class ScratchpadComponent {
  private originalWidth = '370px';
  private originalHeight = '380px';
  private expandedWidth = '550px';
  private expandedHeight = '520px';
  
  public isExpanded = false;

  constructor(public dialogRef: MatDialogRef<ScratchpadComponent>) {

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
