import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface ClientVisit {
  date: string;
  event: string;
  status: string;
}

interface InternalMeeting {
  date: string;
  event: string;
  status: string;
}

interface OfficeVisit{
  date: string;
  context: string;
  status: string;
}
@Component({
  selector: 'app-attendance-dialog',
  templateUrl: './attendance-dialog.component.html',
  styleUrls: ['./attendance-dialog.component.css'],
  animations: [
    trigger('EastOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AttendanceDialogComponent implements OnInit {
  clientvisit: ClientVisit[] = [];
  internalmeetings: InternalMeeting[] = [];
  officevisits: OfficeVisit[] = [];
  activeTab: string = 'Client Visits'; // Default active tab
  isDataLoadedcv: boolean = false;
  isDataLoadedim: boolean = false;
  isDataLoadedov: boolean = false;

  setActiveTab(tab: string) {
    this.activeTab = tab;
     this.fetchData(this.activeTab);
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData(this.activeTab);
    
  }

  fetchData(tab:string) {
    let url = '';

    if (tab === 'Client Visits') {
      url = 'assets/temp_data/clientvisit.json';
    } else if (tab === 'Internal Meetings') {
      url = 'assets/temp_data/internalmeetings.json';
    } else if (tab === 'Office Visits') {
      url = 'assets/temp_data/officevisits.json';
    }

    this.http.get<any>(url).subscribe((data) => {
      if (tab === 'Client Visits') {
        this.clientvisit = data.clientvisit;
        this.isDataLoadedcv=this.clientvisit.length > 0;
      } else if (tab === 'Internal Meetings') {
        this.internalmeetings = data.internalmeetings;
        this.isDataLoadedim=this.internalmeetings.length > 0;
      } else if (tab === 'Office Visits') {
        this.officevisits = data.officevisits;
        this.isDataLoadedov=this.officevisits.length > 0;
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Leave':
      case 'WFH':
      case 'Not Present':
        return 'red';
      default:
        return '#00ac2b'; // Default color (or you can set it to another color)
    }
  }


}
