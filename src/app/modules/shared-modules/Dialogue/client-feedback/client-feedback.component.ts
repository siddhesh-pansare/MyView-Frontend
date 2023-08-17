import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ feedback: FeedbackData[] }>('assets/temp_data/client_feedback.json').subscribe((data) => {
      this.feedbackdata = data.feedback;
    });
  }

  deleteRow(index: number) {
    // Remove the row from the array based on the given index
    this.feedbackdata.splice(index, 1);
  };
}
