import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-designation-dialog',
  templateUrl: './designation-dialog.component.html',
  styleUrls: ['./designation-dialog.component.css']
})
export class DesignationDialogComponent {
  selectedDesignations: { [designation: string]: boolean } = {};

  constructor(
    public dialogRef: MatDialogRef<DesignationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // Load the selectedDesignations from local storage or another source if available
    const savedSelectedDesignations = localStorage.getItem('selectedDesignations');
    if (savedSelectedDesignations) {
      this.selectedDesignations = JSON.parse(savedSelectedDesignations);
    }
  }
  
  applyFilters(): void {
    const selectedFilters = Object.keys(this.selectedDesignations)
      .filter(key => this.selectedDesignations[key])
      .map(key => key);

    // Close the dialog and pass the selected filters back to the main component
    this.dialogRef.close(selectedFilters);
    localStorage.setItem('selectedDesignations', JSON.stringify(this.selectedDesignations));
  }

  clearFilters() {
    this.selectedDesignations = {}; // Clear the selected checkboxes
    localStorage.removeItem('selectedDesignations'); // Remove saved selections from local storage
  }
}
