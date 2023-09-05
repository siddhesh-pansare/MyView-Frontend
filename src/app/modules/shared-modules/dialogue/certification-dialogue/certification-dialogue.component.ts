import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface CertiData {
  Date: string;
  Certification_Name: string;
  Cost: string;
  Link: string;
}

@Component({
  selector: 'app-certification-dialogue',
  templateUrl: './certification-dialogue.component.html',
  styleUrls: ['./certification-dialogue.component.css'],
})
export class CertificationDialogueComponent implements OnInit {
  certiData: CertiData[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<{ certificates: CertiData[] }>(
        './assets/temp_data/certification.json'
      )
      .subscribe(
        (data) => {
          this.certiData = data.certificates;
          console.log('JSON Data:', this.certiData);
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
