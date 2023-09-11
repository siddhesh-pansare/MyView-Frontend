import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

interface SessionsAttended {
  //will need to be remade as per the data being fetched
  date: string;
  event: string;
  status: string;
}

interface SessionsConducted {
  date: string;
  event: string;
  status: string;
}

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  animations: [
    trigger('EastOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
        animate('0.5s'),
      ]),
    ]),
  ],
})
export class SessionComponent implements OnInit {
  sessionsAttended: SessionsAttended[] = [];
  sessConducted: SessionsConducted[] = [];
  isDataLoadedsa: boolean = true;
  isDataLoadedsc: boolean = true;
  activeTab: string = 'Sessions Attended';

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.fetchData(this.activeTab);
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchData(this.activeTab);
  }

  fetchData(tab: string) {
    let url = '';

    if (tab === 'Sessions Attended') {
      url = 'assets/temp_data/sessionsAttended.json';
    } else if (tab === 'Sessions Conducted') {
      url = 'assets/temp_data/sessConducted.json';
    }
    this.http.get<any>(url).subscribe(
      (data) => {
        if (tab === 'Sessions Attended') {
          this.sessionsAttended = data.sessionsAttended;
          this.isDataLoadedsa = this.sessionsAttended.length > 0;
        } else if (tab === 'Sessions Conducted') {
          this.sessConducted = data.sessConducted;
          this.isDataLoadedsc = this.sessConducted.length > 0;
        }
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
          // Handle other HTTP errors here if needed.
        }
      }
    );
  }
}
