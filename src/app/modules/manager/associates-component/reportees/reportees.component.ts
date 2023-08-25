import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reportees',
  templateUrl: './reportees.component.html',
  styleUrls: ['./reportees.component.css']
})
export class ReporteesComponent implements OnInit{
  loggedUserData: any;     //variable to store complete data from MIS

  isMentee: boolean = false;
  isReportee: boolean = true;

  cards: { cardImageSrc: string; cardTitle: string, ImageAlt: string }[] = [
    { cardImageSrc: '../../../../assets/images/icons/awards.svg', cardTitle: 'Awards', ImageAlt:'award' },
    { cardImageSrc: '../../../../assets/images/icons/certificate.svg', cardTitle: 'Certifications', ImageAlt:'certification' },
    { cardImageSrc: '../../../../assets/images/icons/interview.svg', cardTitle: 'Interviews', ImageAlt:'interviews' },
    { cardImageSrc: '../../../../assets/images/icons/session.svg', cardTitle: 'Sessions', ImageAlt:'sessions' },
    { cardImageSrc: '../../../../assets/images/icons/client_feedback.svg', cardTitle: 'Client Feedback', ImageAlt:'client_feedback' },
    { cardImageSrc: '../../../../assets/images/icons/other_contributions.svg', cardTitle: 'Other Contributions', ImageAlt:'other-Contributions' },
  ];

  constructor(){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
}
}
