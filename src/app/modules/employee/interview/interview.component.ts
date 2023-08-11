import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface InterviewTaken {
  Candidate_Name: string;
  Email: string;
  Category: string;
  Status: string;
  Last_Update: string;
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  interviewRec: InterviewTaken[] = [];
  displayedColumns: string[] = [
    'Candidate_Name',
    'Email',
    'Category',
    'Status',
    'Last_Update',
  ];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.fetchData();
  }

  fetchData() {
    this.http
      .get<{ interview: InterviewTaken[] }>('/assets/temp_data/interview.json')
      .subscribe(
        (data) => {
          console.log('Data fetched:', data);
          this.interviewRec = data.interview;
          console.log('Interview array length:', this.interviewRec.length);
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

  getStatusColor(status: string): string {
    switch (status) {
      case 'Hired':
        return '#00AC2B';
      case 'In Progress':
        return '#FF9900';
      case 'Rejected':
        return '#E50202';

      default:
        return '#FF9900'; // Default color (or you can set it to another color)
    }
  }
}
