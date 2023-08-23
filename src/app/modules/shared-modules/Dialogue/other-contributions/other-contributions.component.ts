import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



interface ContributionData {
  Date: string;
  Details: string;
}

@Component({
  selector: 'app-other-contributions',
  templateUrl: './other-contributions.component.html',
  styleUrls: ['./other-contributions.component.css']
})
export class OtherContributionsComponent implements OnInit {

  contributions: ContributionData[] = [];
  displayedColumns: string[] = ['Date', 'Details'];
  hasContributions: boolean = false; // New property to track if there are contributions

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ contributions: ContributionData[] }>('assets/temp_data/contributions.json').subscribe((data) => {
      this.contributions = data.contributions;
      
      this.hasContributions = this.contributions.length > 0; // Update the hasContributions property
    }, (error) => {
      console.error('Error fetching data:', error);
      if (error.status === 404) {
        this.snackBar.open('Data not found (404 error).', 'Close', {
          duration: 5000,
        });
      } else if (error.status === 0) {
        this.snackBar.open(
          'Connectivity issues. Please check your network connection.',
          'Close',
          {
            duration: 5000,
          }
        );
      } else {
        this.snackBar.open(
          'An error occurred while fetching data.',
          'Close',
          {
            duration: 5000,
          }
        );
      }
    });
  }
  deleteRow(index: number) {
    // Remove the row from the array based on the given index
    this.contributions.splice(index, 1);
  };
}
