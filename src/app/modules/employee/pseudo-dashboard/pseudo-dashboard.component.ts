import { CdkDragStart, CdkDragMove, CdkDragEnd, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientFeedbackComponent } from '../../shared-modules/Dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from '../../shared-modules/Dialogue/other-contributions/other-contributions.component';
import { AwardComponent } from '../../shared-modules/dialogue/awards-dialogue/award/award.component';
import { CertificationDialogueComponent } from '../../shared-modules/dialogue/certification-dialogue/certification-dialogue.component';
import { SessionComponent } from '../../shared-modules/dialogue/session-dialogue/session.component';
import { InterviewComponent } from '../interview/interview.component';

@Component({
  selector: 'app-pseudo-dashboard',
  templateUrl: './pseudo-dashboard.component.html',
  styleUrls: ['./pseudo-dashboard.component.css']
})
export class PseudoDashboardComponent implements OnInit {

  //declare variables
  loggedUserData: any;     //variable to store complete data from MIS
  selectedTab = 'EC';
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

  constructor() { }

  ngOnInit(): void {
    this.col4InitialX = this.getCol4InitialX(); // Store the initial x-coordinate
    this.restorePositions(); // Restore positions on page load
  }

  getCol4InitialX(): number {
    const col4 = document.querySelector('.col-md-4');
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

  restorePositions(): void {
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
  }
}

