import { Component, OnInit } from '@angular/core';

import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

import { AwardComponent } from 'src/app/modules/shared-modules/dialogue/awards-dialogue/award/award.component';
import { SessionComponent } from 'src/app/modules/shared-modules/dialogue/session-dialogue/session.component';
import { CertificationDialogueComponent } from 'src/app/modules/shared-modules/dialogue/certification-dialogue/certification-dialogue.component';

import { InterviewComponent } from 'src/app/modules/shared-modules/dialogue/interview-dialogue/interview.component';

import { ClientFeedbackComponent } from 'src/app/modules/shared-modules/Dialogue/client-feedback/client-feedback.component';

import { OtherContributionsComponent } from 'src/app/modules/shared-modules/Dialogue/other-contributions/other-contributions.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({

  selector: 'app-reportees',

  templateUrl: './reportees.component.html',

  styleUrls: ['./reportees.component.css']

})

export class ReporteesComponent implements OnInit{

  loggedUserData: any;

  selectedTab = 'EC';

  content: any;

 

  isMentee: boolean = true;

  isReportee: boolean = false;

  isMobile: boolean = false;   //variable to store complete data from MIS

  isCollapsed: { [key: string]: boolean } = {

    skills: false,

    details: false,

    activity: false

  };

 

  // isMobileScreen: boolean = false;

  cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string, dialogComponent: string }[] = [

    { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt:'award', dialogComponent: 'AwardComponent' },

    { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt:'certification', dialogComponent: 'CertificationComponent' },

    { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt:'interviews', dialogComponent: 'InterviewsComponent' },

    { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt:'sessions',  dialogComponent: 'SessionComponent' },

    { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt:'client_feedback', dialogComponent: 'ClientFeedbackComponent' },

    { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt:'other-Contributions', dialogComponent:'OtherContributionsComponent' },

  ];

 

  constructor(private userDataService: LoggedUserDataService, private dialog: MatDialog, private http: HttpClient ){}

 

  ngOnInit(): void {

    // this.loadData();

    this.checkMobileScreen();

    this.restoreBoxPositions();

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

  checkMobileScreen(): void {

    this.isMobile = window.innerWidth <= 768; // Define your mobile breakpoint

    if (this.isMobile) {

      this.isCollapsed['skills'] = this.isMobile; // Collapse skills card by default

      this.isCollapsed['details'] = this.isMobile; // Collapse details card by default

      this.isCollapsed['activity'] = this.isMobile; // Collapse activity card by default

    }

  }

  selectTab(tab: string) {

    this.selectedTab = tab;

  }

  drop(event: any) {

    if (event.previousIndex !== event.currentIndex) {

      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);

    }

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

 

 

  // @HostListener('window:resize', ['$event'])

  // onResize(event: any): void {

  //   this.checkMobileScreen();

  // }

 

  loadData(): void {

    const email = 'mohit.choudhary1@geminisolutions.com';

 

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {

      this.loggedUserData = filteredData[0];

      //console.log('here', this.loggedUserData);

    });

    // this.checkMobileScreen();

  }

 

  // checkMobileScreen(): void {

  //   this.isMobileScreen = window.innerWidth <8786;

  // }

 

  toggleCollapse(section: string): void {

    this.isCollapsed[section] = !this.isCollapsed[section];

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

 