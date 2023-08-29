
import { CdkDragDrop, CdkDragEnd, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
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
  content: any;
  activeTab: string = 'dc';



  cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string, dialogComponent: string }[] = [
    { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt: 'award', dialogComponent: 'AwardComponent' },
    { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt: 'certification', dialogComponent: 'CertificationComponent' },
    { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt: 'interviews', dialogComponent: 'InterviewsComponent' },
    { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt: 'sessions', dialogComponent: 'SessionComponent' },
    { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt: 'client_feedback', dialogComponent: 'ClientFeedbackComponent' },
    { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt: 'other-Contributions', dialogComponent: 'OtherContributionsComponent' },
  ];
  col4InitialX!: number; // Store the initial x-coordinate of the col-md-4 column
  constructor(private userDataService: LoggedUserDataService, private dialog: MatDialog, private http: HttpClient, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.col4InitialX = this.getCol4InitialX(); // Store the initial x-coordinate
    this.restorePositions(); // Restore positions on page load
    this.loadData();

    const apiUrl = environment.baseUrl+'homeEC';
    const accessToken = sessionStorage.getItem('idToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    this.http.get<any>(apiUrl, { headers }).subscribe(
      response => {
        this.content = response;
        console.log(this.content)
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

  getCol4InitialX(): number {
    const col4 = document.querySelector('.news-container');
    console.log(col4?.getBoundingClientRect().left);

    return col4 ? col4.getBoundingClientRect().left : 0;
  }

  onDragEnd(event: CdkDragEnd, elementId: string, inCol8: boolean): void {
    const element = event.source.getRootElement();
    const rect = element.getBoundingClientRect();
    let coordinates = { x: rect.left, y: rect.top };



    if (inCol8) {
      //if element is from col-md-8
      console.log("inside @incol8");
      localStorage.setItem(elementId, JSON.stringify(coordinates));
    }else{
      coordinates = {x:(coordinates.x - this.getCol4InitialX()), y:rect.top}
      localStorage.setItem(elementId, JSON.stringify(coordinates));
    }
  }

  deleteStoredValues(): void {
    const elementKeys = ['element1', 'element2', 'element3', 'element4', 'element5'];

    elementKeys.forEach(key => {
      localStorage.removeItem(key);
    });

    // Run change detection within NgZone
    this.ngZone.run(() => {
      this.restorePositions();
    });
  }


  restorePositions(): void {
    console.log('restoring position');

    const elements = document.querySelectorAll('.example-box');

    elements.forEach(element => {
      const elementId = element.id;
      const storedCoordinates = localStorage.getItem(elementId);

      if (storedCoordinates) {
        const coordinates = JSON.parse(storedCoordinates);
        const htmlElement = element as HTMLElement;

        // Set the element's position to absolute for accurate positioning
        htmlElement.style.position = 'absolute';

        // Set the saved coordinates
        htmlElement.style.left = `${coordinates.x}px`;
        htmlElement.style.top = `${coordinates.y}px`;
      }
    });

    this.cdr.detectChanges();
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
