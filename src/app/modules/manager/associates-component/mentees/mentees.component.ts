import { Component, OnInit } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-mentees',
  templateUrl: './mentees.component.html',
  styleUrls: ['./mentees.component.css']
})
export class MenteesComponent implements OnInit{
  loggedUserData: any;
  isMobile: boolean = false;   //variable to store complete data from MIS
  isCollapsed: { [key: string]: boolean } = {
    skills: false,
    details: false,
    activity: false
  };
  // isMobileScreen: boolean = false;
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
    this.loadData();
    this.checkMobileScreen();
  }
  checkMobileScreen(): void {
    this.isMobile = window.innerWidth <= 768; // Define your mobile breakpoint
    if (this.isMobile) {
      this.isCollapsed['skills'] = this.isMobile; // Collapse skills card by default
      this.isCollapsed['details'] = this.isMobile; // Collapse details card by default
      this.isCollapsed['activity'] = this.isMobile; // Collapse activity card by default
    }
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



}
