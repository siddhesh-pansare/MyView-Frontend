import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

interface ProfileData {
  Name: string;
  Email: string;
  Experience: string;
  Status:string;
}

interface ResumeScreening {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}
interface OnlineTest {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}
interface GroupDiscussion {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}
interface Rround1 {
  Date: string;
  Step: string;
  Status:string;
  Interviewer:string;
  Feedback: string;
  Profile_Status:string;

}
interface Round2 {
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

  round1: Rround1[] = [];
  round2: Round2[] = [];
  groupdiscussion: GroupDiscussion[] = [];
  onlineTest: OnlineTest[] = [];
  resume: ResumeScreening[] = [];
  profile:ProfileData[]=[];
  activeTab: string = 'Resume Screening';
  

  constructor(private http: HttpClient) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
     this.fetchData(this.activeTab);
  }

  ngOnInit() {
    this.fetchEmployeeProfile();
    this.setActiveTab('Resume Screening');
    
  }

  fetchEmployeeProfile() {
    this.http.get<{profile: ProfileData[] }>('assets/temp_data/user_profile.json').subscribe((data) => {
    this.profile = data.profile;

    });
  }

  fetchData(tab:string) {
    let url = '';

    if (tab === 'Resume Screening') {
      url = 'assets/temp_data/resume_screening.json';
    } else if (tab === 'Online Test') {
      url = 'assets/temp_data/online_test.json';
    } else if (tab === 'Group Discussion') {
      url = 'assets/temp_data/group_discussion.json';
    }else if (tab === 'Round 1') {
      url = 'assets/temp_data/round_1.json';
    }else if (tab === 'Round 2') {
      url = 'assets/temp_data/round_2.json';
    }
    this.http.get<any>(url).subscribe((data) => {
      if (tab === 'Resume Screening') {
        this.resume = data.resume;
      } else if (tab === 'Online Test') {
        this.onlineTest = data.onlineTest;
      } else if (tab === 'Group Discussion') {
        this.groupdiscussion = data.groupdiscussion;
      }else if (tab === 'Round 1') {
        this.round1 = data.round1;
      }
      else if (tab === 'Round 2') {
        this.round2 = data.round2;
      }
    });
  }
  getStatusColor(status: string): string {
    switch (status) {
      case 'Fail':
      case 'Not Match':
      case 'Rejected':
        return 'text-danger'; 
      case 'Considered':
      case 'Considered For Next Round':
      case 'Match':
        return 'text-success';
      default:
        return 'rgba(51, 54, 63, 0.60)'; 
    }
  }

}


