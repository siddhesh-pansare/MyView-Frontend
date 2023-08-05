import { Component,OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

interface EmployeeData{
   EmpCode:string;
   Name:string;
   Designation:string;
   Email:string;
   MentorName:string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit , AfterViewInit{
    employeedata: EmployeeData[] = [];
    dataSource!: MatTableDataSource<EmployeeData>;
    displayedColumns: string[] = ['EmpCode', 'Name', 'Designation', 'Email', 'MentorName'];
    pageIndex = 0;
    pageSize = 5;
    totalItems = 0;
    searchTerm: string = '';
    pageSizeOptions: number[] = [5, 10, 25];

   @ViewChild(MatPaginator) paginator!: MatPaginator;

   constructor(private http : HttpClient) { 
    this.dataSource = new MatTableDataSource<EmployeeData>(this.employeedata);
   }

   ngOnInit() {
     this.fetchdata();

   }
   
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

   fetchdata(){
    this.http.get<{ employeedata: EmployeeData[] }>('assets/temp_data/employees.json').subscribe((data) => {
      this.employeedata = data.employeedata;
      this.totalItems = this.employeedata.length;
      this.applyFilter();
      });
   
    }

applyFilter() {
  const filterValue = this.searchTerm.toLowerCase();
    const filteredData = this.employeedata.filter(
      (employee) =>
        employee.Name.toLowerCase().includes(filterValue) ||
        employee.Designation.toLowerCase().includes(filterValue) ||
        employee.MentorName.toLowerCase().includes(filterValue)
    );
    this.dataSource.data = filteredData;
    this.dataSource.paginator = this.paginator;
}
onPageChange(event: PageEvent): void {
  this.paginator.pageIndex = event.pageIndex;
  this.paginator.pageSize = event.pageSize;
  this.applyFilter();

}
}
