// award.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface AwardData {
  Date: string;
  Award: string;
  Nominated_By: string;
}

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
})
export class AwardComponent implements OnInit {
  awardData: AwardData[] = [];
  displayedColumns: string[] = ['Date', 'Award', 'Nominated_By'];
  // isDataLoaded: boolean = false;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<{ awards: AwardData[] }>('./assets/temp_data/award.json')
      .subscribe(
        (data) => {
          this.awardData = data.awards;
        },
        (error) => {
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
        }
      );
  }
}
