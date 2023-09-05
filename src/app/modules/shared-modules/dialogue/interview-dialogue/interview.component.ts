import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface InterviewDiData {
  //will need to be remade as per the data being fetched
  Date: string;
  Certification_Name: string;
  Cost: string;
  Link: string;
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent {
  intDiData: InterviewDiData[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<{ certificates: InterviewDiData[] }>(
        './assets/temp_data/interviewDialogue.json'
      )
      .subscribe(
        (data) => {
          this.intDiData = data.certificates;
          console.log('JSON Data:', this.intDiData);
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
