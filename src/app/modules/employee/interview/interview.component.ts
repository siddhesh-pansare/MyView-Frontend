import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface InterviewTaken {
  Candidate_Name: string;
  Email: string;
  Category: string;
  Status: string;
  Last_Update: string;
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit, AfterViewInit {
  interviewRec: InterviewTaken[] = [];
  dataSource!: MatTableDataSource<InterviewTaken>;
  displayedColumns: string[] = [
    'Candidate_Name',
    'Email',
    'Category',
    'Status',
    'Last_Update',
  ];

  pageIndex = 0;
  pageSize = 5;
  totalItems = 0;
  searchTerm: string = '';
  pageSizeOptions: number[] = [5, 10, 25];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.pageSize = this.pageSizeOptions[0];
    this.dataSource = new MatTableDataSource<InterviewTaken>(this.interviewRec);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.fetchData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchData() {
    this.http
      .get<{ interview: InterviewTaken[] }>('/assets/temp_data/interview.json')
      .subscribe(
        (data) => {
          console.log('Data fetched:', data);
          this.interviewRec = data.interview;
          this.totalItems = this.interviewRec.length;
          this.applyFilter();
        },
        (error) => {
          console.error('Error fetching data:', error);
          if (error.status === 404) {
            this.snackBar.open('Data not found (404 error).', 'Close', {
              duration: 5000,
            });
          } else if (error.status === 0) {
            this.snackBar.open(
              'Connectivity issues. Please check your network connection.',
              'Close',
              {
                duration: 5000,
              }
            );
          } else {
            this.snackBar.open(
              'An error occurred while fetching data.',
              'Close',
              {
                duration: 5000,
              }
            );
          }
        }
      );
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Hired':
        return '#00AC2B';
      case 'In Progress':
        return '#FF9900';
      case 'Rejected':
        return '#E50202';

      default:
        return '#FF9900'; // Default color (or you can set it to another color)
    }
  }

  applyFilter() {
    const filterValue = this.searchTerm.toLowerCase();
    const filteredData = this.interviewRec.filter(
      (interview) =>
        interview.Candidate_Name.toLowerCase().includes(filterValue) ||
        interview.Email.toLowerCase().includes(filterValue) ||
        interview.Category.toLowerCase().includes(filterValue) ||
        interview.Status.toLowerCase().includes(filterValue) ||
        interview.Last_Update.toLowerCase().includes(filterValue)
    );
    this.dataSource.data = filteredData;
    this.dataSource.paginator = this.paginator;
  }
  onPageChange(event: PageEvent): void {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.applyFilter();
  }

  goToFirstPage(): void {
    this.paginator.firstPage();
    this.onPageChange({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length,
    });
  }

  goToLastPage(): void {
    this.paginator.lastPage();
    this.onPageChange({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length,
    });
  }
}
