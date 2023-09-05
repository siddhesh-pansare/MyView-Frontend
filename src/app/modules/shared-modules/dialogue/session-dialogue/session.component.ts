import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface SessData {
  //will need to be remade as per the data being fetched
  Date: string;
  Certification_Name: string;
  Cost: string;
  Link: string;
}

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {
  sessData: SessData[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<{ sessions: SessData[] }>('./assets/temp_data/sessions.json')
      .subscribe(
        (data) => {
          this.sessData = data.sessions;
          console.log('JSON Data:', this.sessData);
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
