import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';


interface RoundDetails {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}

@Component({
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.css']
})
export class RoundDetailsComponent implements OnInit {

  round1Data: RoundDetails[] = [];
  round2Data: RoundDetails[] = [];
  gdData: RoundDetails[] = [];
  onlineTestData: RoundDetails[] = [];
  resumeData: RoundDetails[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRound1Data();
    this.fetchRound2Data();
    this.fetchGdData();
    this.fetchOnlineTestData();
    this.fetchResumeData();
  }

  fetchRound1Data() {
    this.http.get<{ Round_1: RoundDetails[] }>('assets/temp_data/round_1.json').subscribe((data) => {
      this.round1Data = data.Round_1;
    });
  }

  fetchRound2Data() {
    this.http.get<{ Round_2: RoundDetails[] }>('assets/temp_data/round_2.json').subscribe((data) => {
      this.round2Data = data.Round_2;
    });
  }

  fetchGdData() {
    this.http.get<{ Group_Discussion: RoundDetails[] }>('assets/temp_data/group_discussion.json').subscribe((data) => {
      this.gdData = data.Group_Discussion;
    });
  }

  fetchOnlineTestData() {
    this.http.get<{ Online_Test: RoundDetails[] }>('assets/temp_data/online_test.json').subscribe((data) => {
      this.onlineTestData = data.Online_Test;
    });
  }

  fetchResumeData() {
    this.http.get<{ Resume_screening: RoundDetails[] }>('assets/temp_data/resume_screening.json').subscribe((data) => {
      this.resumeData = data.Resume_screening;
    });
  }
}


