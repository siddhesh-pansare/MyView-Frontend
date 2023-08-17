import { CdkDragStart, CdkDragMove, CdkDragEnd, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-pseudo-dashboard',
  templateUrl: './pseudo-dashboard.component.html',
  styleUrls: ['./pseudo-dashboard.component.css']
})
export class PseudoDashboardComponent implements OnInit {


   //declare variables
   loggedUserData: any;     //variable to store complete data from MIS
   selectedTab = 'EC';

   cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string }[] = [
     { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt:'award' },
     { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt:'certification' },
     { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt:'interviews' },
     { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt:'sessions' },
     { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt:'client_feedback' },
     { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt:'other-Contributions' },
   ];

   constructor(private userDataService: LoggedUserDataService ){}


  ngOnInit(): void {
    //this.getAndSaveBoxCoordinates();
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.restoreBoxPositions();
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

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  private getAndSaveBoxCoordinates(): void {
    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.example-box');

    boxes.forEach((box: HTMLElement, index: number) => {
      const boxRect = box.getBoundingClientRect();
      const boxCoordinates = { left: boxRect.left, top: boxRect.top };
      localStorage.setItem(`box${index + 1}_coordinates`, JSON.stringify(boxCoordinates));
    });
  }

  onDragEnded(event: any){
    this.getAndSaveBoxCoordinates();
  }

  private restoreBoxPositions(): void {
    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.example-box');

    boxes.forEach((box: HTMLElement, index: number) => {
      const storedCoordinates = localStorage.getItem(`box${index + 1}_coordinates`);
      if (storedCoordinates) {
        const { left, top } = JSON.parse(storedCoordinates);
        box.style.position = 's'; // Use absolute positioning
        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
      }
    });
  }

}
