
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { AwardComponent } from '../../shared-modules/dialogue/awards-dialogue/award/award.component';
import { CertificationDialogueComponent } from '../../shared-modules/dialogue/certification-dialogue/certification-dialogue.component';
import { InterviewComponent } from '../../shared-modules/dialogue/interview-dialogue/interview.component';
import { SessionComponent } from '../../shared-modules/dialogue/session-dialogue/session.component';
import { ClientFeedbackComponent } from '../../shared-modules/Dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from '../../shared-modules/Dialogue/other-contributions/other-contributions.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  content: any;



  cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string, dialogComponent: string }[] = [
    { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt: 'award', dialogComponent: 'AwardComponent' },
    { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt: 'certification', dialogComponent: 'CertificationComponent' },
    { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt: 'interviews', dialogComponent: 'InterviewsComponent' },
    { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt: 'sessions', dialogComponent: 'SessionComponent' },
    { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt: 'client_feedback', dialogComponent: 'ClientFeedbackComponent' },
    { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt: 'other-Contributions', dialogComponent: 'OtherContributionsComponent' },
  ];

  constructor(private userDataService: LoggedUserDataService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.restoreBoxPositions();
    this.loadData();

    const apiUrl = '';
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiI2YzM2YzA0Mi0wYmZiLTQ1MGMtODFiOS1iZGNhOWE5MmM5ZTQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vYjk4MDZjN2QtOTI4MC00ZTQ0LWFmZWEtNmRjMGZmNDk1YzJmL3YyLjAiLCJpYXQiOjE2OTI2OTc0NjUsIm5iZiI6MTY5MjY5NzQ2NSwiZXhwIjoxNjkyNzAxMzY1LCJncm91cHMiOlsiZWE5YzMxMzEtN2E4Yi00ODVlLTk3M2YtZjU0ZjllYWFjMWE1IiwiMTMyYmZhNWMtMmIxMy00MDI0LTk2NGItMjAxODBjZmRhMGM2IiwiMTdhN2RhZDctNzJhZS00MzM0LWFlN2YtNzk1OWU1ZjJjZmViIl0sIm5hbWUiOiJTaWRkaGVzaCBTYW5kZWVwIFBhbnNhcmUiLCJub25jZSI6ImUwMGUxODhiLTA4NDMtNGUyNi1iNDVjLTZiMDY2YjlhMjNjMCIsIm9pZCI6ImYxZmM4NTZlLTQ1NzYtNDE4Yi04ODE3LTQyMDc1MWQ5ZWEwYiIsInByZWZlcnJlZF91c2VybmFtZSI6IlNpZGRoZXNoLlBhbnNhcmVAR2VtaW5pc29sdXRpb25zLmNvbSIsInJoIjoiMC5BWEVBZld5QXVZQ1NSRTZ2Nm0zQV8wbGNMMExBTm16N0N3eEZnYm05eXBxU3llU0hBSkkuIiwic3ViIjoiakdFdmV4SnZPdDJacTU3VXhFUHpMM0FqNkhpbWRpTXlPcXJpVkNVaXB0dyIsInRpZCI6ImI5ODA2YzdkLTkyODAtNGU0NC1hZmVhLTZkYzBmZjQ5NWMyZiIsInV0aSI6IlgwZ2UzenFFVWtDZ0NabjBCOWtSQUEiLCJ2ZXIiOiIyLjAifQ.DfcWmJdx2fRYAkOWv-BotGs3V9RPkJmZsJIZd2G9bqIaDEKVvvx6rLMewX-Pj2X0QGaQyy-NZeTTD8W3YCEBusXPlxGyiolY-kwed-n9f0K6SM8f4C6cAjeJmpQsLI52_cCt3pxORoQuOEMEEayKPr-Og-Z5W4XsN-sFzDl58Hi4MMpDzbFQYYB4iiAhJmuIyxpqqucbu9eSQVnxV18QHguWXMI6mk0ThzorWs_9bpEcDH86CSVk9IB7f3upfP0HH9A5EBzlO6PQZVe-vM0O3aLxkbOgDYeFipR0zXQdI6m9J0-pJimwGXE7333QRkuwnr5BZWDfu31OFWs0LupJSA';


    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    this.http.get<any>(apiUrl, { headers }).subscribe(
      response => {
        this.content = response;
      },
      error => {
        console.error('Error fetching content:', error);
      }
    );
  }


  loadData(): void {
    const email = 'siddhesh.pansare@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      //console.log('here', this.loggedUserData);
    });
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
    console.log('restoring positions'
    );

    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.example-box');

    boxes.forEach((box: HTMLElement, index: number) => {
      const storedCoordinates = localStorage.getItem(`dashboard_move_com_${index + 1}_coordinates`);
      if (storedCoordinates) {
        const { left, top } = JSON.parse(storedCoordinates);
        box.style.position = 'fixed'; // Use absolute positioning
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

}
