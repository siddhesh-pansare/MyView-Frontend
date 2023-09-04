import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


interface FeedbackData {
  Date: string;
  Feedback: string;
}

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css']
})



export class ClientFeedbackComponent implements OnInit {

  feedbackdata: FeedbackData[] = [];
  displayedColumns: string[] = ['Date', 'Feedback'];
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}


  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ feedback: FeedbackData[] }>('assets/temp_data/client_feedback.json').subscribe((data) => {
      this.feedbackdata = data.feedback;
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
    this.feedbackdata.splice(index, 1);
  };
}