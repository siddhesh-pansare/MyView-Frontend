import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class OpenPositionsComponent implements OnInit {
  active: ActiveData[] = [];
  closed: ClosedData[] = [];
  activeTab: string = 'Active';
  displayedColumns: string[] = [
    'Priority',
    'Role',
    'Council',
    'SkillsRequired',
    'Experience',
    'Count',
    'Status',
  ];
  isButtonClicked: boolean = false;

  constructor(private http: HttpClient) {}

  tabState: 'Active' | 'Closed' = 'Active';

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.fetchData(this.activeTab);
  }

  setActiveTabAnm(tab: 'Active' | 'Closed') {
    this.tabState = tab;
    this.fetchData(this.tabState);
  }

  ngOnInit() {
    this.fetchData(this.activeTab);
  }

  fetchData(tab: string) {
    let url = '';

    if (tab === 'Active') {
      url = 'assets/temp_data/active.json';
    } else if (tab === 'Closed') {
      url = 'assets/temp_data/closed.json';
    }
    this.http.get<any>(url).subscribe((data) => {
      if (tab === 'Active') {
        this.active = data.active;
      } else if (tab === 'Closed') {
        this.closed = data.closed;
      }
    });
  }

  toggleButtonClass() {
    this.isButtonClicked = !this.isButtonClicked;
  }

  deleteRow(index: number) {
    this.active.splice(index, 1);
  }
}

interface ActiveData {
  Priority: string;
  Role: String;
  Council: string;
  SkillsRequired: string;
  Experience: string;
  Count: number;
  Status: string;
}

interface ClosedData {
  Role: String;
  Council: string;
  SkillsRequired: string;
  Experience: string;
  Count: number;
  Status: string;
}
