
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AwardComponent } from '../../shared-modules/dialogue/awards-dialogue/award/award.component';
import { CertificationDialogueComponent } from '../../shared-modules/dialogue/certification-dialogue/certification-dialogue.component';
import { InterviewComponent } from '../../shared-modules/dialogue/interview-dialogue/interview.component';
import { SessionComponent } from '../../shared-modules/dialogue/session-dialogue/session.component';
import { ClientFeedbackComponent } from '../../shared-modules/Dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from '../../shared-modules/Dialogue/other-contributions/other-contributions.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { ClientFeedbackComponent } from '../../shared-modules/Dialogue/client-feedback/client-feedback.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //declare variables
  loggedUserData: any;     //variable to store complete data from MIS
  selectedTab = 'EC';
  activeTab: string = 'dc';
  content: any;
  ApiData: any;
  DashboardData: any;
  DcData: any;
  Gem_Exp!:string;



  cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string, dialogComponent: string }[] = [
    { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt: 'award', dialogComponent: 'AwardComponent' },
    { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt: 'certification', dialogComponent: 'CertificationComponent' },
    { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt: 'interviews', dialogComponent: 'InterviewsComponent' },
    { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt: 'sessions', dialogComponent: 'SessionComponent' },
    { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt: 'client_feedback', dialogComponent: 'ClientFeedbackComponent' },
    { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt: 'other-Contributions', dialogComponent: 'OtherContributionsComponent' },
  ];

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.callDataAPI();
    this.restoreBoxPositions();

    // const apiUrl = environment.baseUrl+'homeEC';
    // const accessToken = sessionStorage.getItem('idToken');

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    // this.http.get<any>(apiUrl, { headers }).subscribe(
    //   response => {
    //     this.content = response;
    //     console.log(this.content)
    //   },
    //   error => {
    //     console.error('Error fetching content:', error);
    //   }
    // );
  }

  callDataAPI() {
    const apiUrl = environment.baseUrl + 'homeDC';
    const accessToken = sessionStorage.getItem('idToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    this.http.get<any>(apiUrl, { headers }).subscribe(
      response => {
        this.ApiData = response;
        this.DashboardData = this.ApiData.My_Details;
        this.Gem_Exp = this.calculateExperience(this.DashboardData.DOJ);
        this.DcData = this.ApiData;
        console.log(this.ApiData);


      },
      error => {
        console.error('Error fetching content:', error);
      }
    );
  }




  activateTab(tab: string) {
    this.activeTab = tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  private getAndSaveBoxCoordinates(): void {
    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.example-box');

    boxes.forEach((box: HTMLElement, index: number) => {
      const boxRect = box.getBoundingClientRect();
      const boxCoordinates = { left: boxRect.left, top: boxRect.top };
      localStorage.setItem(`dashboard_move_com_${index + 1}_coordinates`, JSON.stringify(boxCoordinates));
    });
  }

  onDragEnded(event: any) {
    this.getAndSaveBoxCoordinates();
  }

  private restoreBoxPositions(): void {
    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.example-box');

    boxes.forEach((box: HTMLElement, index: number) => {
      const storedCoordinates = localStorage.getItem(`dashboard_move_com_${index + 1}_coordinates`);
      if (storedCoordinates) {
        const { left, top } = JSON.parse(storedCoordinates);
        box.style.position = 'absolute'; // Use absolute positioning
        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
      }
    });
  }

  openDialog(dialogComponent: string) {
    if (dialogComponent === 'AwardComponent') {
      const dialogRef = this.dialog.open(AwardComponent, {
        width: '400px', // Set the width as needed
      });
    } else if (dialogComponent === 'CertificationComponent') {
      const dialogRef = this.dialog.open(CertificationDialogueComponent, {
        width: '400px', // Set the width as needed
      });
    } else if (dialogComponent === 'InterviewsComponent') {
      const dialogRef = this.dialog.open(InterviewComponent, {
        width: '400px', // Set the width as needed
      });
    }
    else if (dialogComponent === 'SessionComponent') {
      const dialogRef = this.dialog.open(SessionComponent, {
        width: '400px', // Set the width as needed
      });
    }
    else if (dialogComponent === 'ClientFeedbackComponent') {
      const dialogRef = this.dialog.open(ClientFeedbackComponent, {
        width: '400px', // Set the width as needed
      });
    }
    else if (dialogComponent === 'OtherContributionsComponent') {
      const dialogRef = this.dialog.open(OtherContributionsComponent, {
        width: '400px', // Set the width as needed
      });
    }
  }

  calculateExperience(dateOfJoining: string): string {
    const today = new Date();
    const joinDate = new Date(dateOfJoining);

    let years = today.getFullYear() - joinDate.getFullYear();
    let months = today.getMonth() - joinDate.getMonth();
    let days = today.getDate() - joinDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, joinDate.getDate());
        const diff = today.getTime() - lastMonth.getTime();
        const daysInLastMonth = Math.floor(diff / (1000 * 60 * 60 * 24));
        months--;
        days += daysInLastMonth;
    }

    //return `${years} years, ${months} months, ${days} days`;
    const yearText = years === 1 ? "year" : "years";
    const monthText = months === 1 ? "month" : "months";

    if (years === 0) {
        return `${months} ${monthText} & ${days} days`;
    } else if (months === 0) {
        return `${years} ${yearText} & ${days} days`;
    } else {
        return `${years} ${yearText}, ${months} ${monthText} & ${days} days`;
    }
}



}
