import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-designation-dialog',
  templateUrl: './designation-dialog.component.html',
  styleUrls: ['./designation-dialog.component.css']
})
export class DesignationDialogComponent {
  selectedDesignations: { [key: string]: boolean } = {};

  constructor(
    public dialogRef: MatDialogRef<DesignationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  applyFilters(): void {
    const selectedFilters = Object.keys(this.selectedDesignations)
      .filter(key => this.selectedDesignations[key])
      .map(key => key);

    // Close the dialog and pass the selected filters back to the main component
    this.dialogRef.close(selectedFilters);
  }
}
