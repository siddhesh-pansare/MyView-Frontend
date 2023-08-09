import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.css']
})
export class RoundDetailsComponent implements OnInit {
  
    round_details: RoundDetails[] = [];
    displayedColumns: string[] = ['Date','Step','Status','Interviewer','Feedback','Profile_Status'];
    
    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.fetchResumeData();
      this.fetchOnlineTestData();
      this.fetchGdData();
      this.fetchRound1Data();
      this.fetchRound2Data();
    }

    fetchResumeData() {
      this.http.get<{ Resume_screening: RoundDetails[] }>('assets/temp_data/Resume_screening.json').subscribe((data) => {
      this.round_details = data.Resume_screening;
    });}
    
    fetchOnlineTestData(){
      this.http.get<{ Online_Test: RoundDetails[] }>('assets/temp_data/Online_Test.json').subscribe((data) => {
      this.round_details = data.Online_Test;
    });}

    fetchGdData(){
      this.http.get<{ Online_Test: RoundDetails[] }>('assets/temp_data/Group_Discussion.json').subscribe((data) => {
      this.round_details = data.Online_Test;
    });}

    fetchRound1Data(){
      this.http.get<{ Online_Test: RoundDetails[] }>('assets/temp_data/Round_1.json').subscribe((data) => {
      this.round_details = data.Online_Test;
    });}

    fetchRound2Data(){
      this.http.get<{ Online_Test: RoundDetails[] }>('assets/temp_data/Round_2.json').subscribe((data) => {
      this.round_details = data.Online_Test;
    });}
        

}

interface RoundDetails {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}

