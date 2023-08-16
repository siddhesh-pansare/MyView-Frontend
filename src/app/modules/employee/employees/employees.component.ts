import { Component,OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DesignationDialogComponent } from 'src/app/designation-dialog/designation-dialog.component';
import { MatMenuTrigger } from '@angular/material/menu';


interface EmployeeData{
   EmpCode:string;
   Name:string;
   Designation:string;
   Email:string;
   MentorName:string;
}
interface DataItem {
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit , AfterViewInit{
    employeedata: EmployeeData[] = [];
    searchValue: string = '';
    currentFilterColumn: string = 'EmpCode'; 
    searchOptions: any[] = [];
    @ViewChild(MatMenuTrigger) filterMenu!: MatMenuTrigger; // Define the property
    uniqueDesignations: string[] = [];
    
    displayedColumns: string[] = ['EmpCode', 'Name', 'Designation', 'Email', 'MentorName'];
    pageIndex = 0;
    pageSize = 5;
    totalItems = 0;
    searchTerm: string = '';
    searchTerm1: string = '';

    searchTerm2: string = '';
    searchTerm3: string = '';
    searchTerm4: string = '';
    pageSizeOptions: number[] = [5, 10, 25];
    initiallyCheckedColumns = [
      'EmpCode',
      'Name',
      'Designation',
    ];
    filteredData = new MatTableDataSource<any>;
    dataSource = new MatTableDataSource<any>;
    initiallyCheckedColumnsCount: number = this.initiallyCheckedColumns.length;
    checkedColumnsCount: number = this.initiallyCheckedColumns.length;
    allColumnsVisible: boolean = false;
    selectAllChecked: boolean = false;
    hideColumns: boolean[] = [];
    flag:any;
    dataLength!: number;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   showSearchInput: boolean = false;
   enabledSearchColumns: string[] = [];
   copied: boolean = false;
   selectedDesignations: { [key: string]: boolean } = {};
   

   
  hideColumnHeaders: boolean = false;

   constructor(private snackBar: MatSnackBar,private http : HttpClient,private clipboard: Clipboard,private dialog:MatDialog) { 
    this.pageSize=this.pageSizeOptions[0];
    
  
   }
   data:any;
  //  addSearchOption() {
  //   const newSearchOption: any = {};
  //   for (const column of this.displayedColumns) {
  //     newSearchOption[column] = '';
  //   }
  //   this.searchOptions.push(newSearchOption);
  // }
  addSearchOption() {
    const newSearchOption: any = {};
    for (const column of this.displayedColumns) {
      newSearchOption[column] = '';
    }
    this.searchOptions.push(newSearchOption);
  }
  
  
  
  removeSearchOption(rowIndex: number) {
    if (rowIndex >= 0 && rowIndex < this.searchOptions.length) {
      this.searchOptions.splice(rowIndex, 1);
    }
  }
  openDesignationDialog() {
    const dialogRef = this.dialog.open(DesignationDialogComponent, {
      width: '300px',
      data: {
        designations: this.uniqueDesignations
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Apply the selected filters to the table
        this.selectedDesignations = result.reduce((obj: { [x: string]: boolean; }, designation: string | number) => {
          obj[designation] = true;
          return obj;
        }, {});
  
        this.applyFilt(); // Apply filters based on selected designations
      }
    });
  }
  
  
  

   ngOnInit() {
    this.fetchdata(); // Assuming you're populating the data source here
  
                    // const keys = Object.keys(this.data[0]);
                    // this.displayedColumns = keys;
                  
                    // const initiallyCheckedColumns = [
                    //   'EmpCode',
                    //   'Name',
                    //   'Designation',
                    
                    // ];
                    // // Set up the hideColumns array to track column visibility
                    // this.hideColumns = keys.map(
                    //   (column) => !initiallyCheckedColumns.includes(column)
                    // );
                    // console.log(this.hideColumns)
                    // this.filteredData = new MatTableDataSource(this.data);
                    
                    // this.filteredData.paginator = this.paginator;
                    // this.dataLength = this.filteredData.data.length;
                    this.http.get<{ employeedata: EmployeeData[] }>('assets/temp_data/employees.json').subscribe((data) => {
                      this.data = data;
                    
                    
                    const keys = Object.keys(this.data[0]);
                    console.log(keys);
                  
                    this.displayedColumns = keys;
                  
                    const initiallyCheckedColumns = [
                      'EmpCode',
                      'Name',
                      'Designation',
            
                    ];
                    // Set up the hideColumns array to track column visibility
                    this.hideColumns = keys.map(
                      (column) => !initiallyCheckedColumns.includes(column)
                    );
                  
                    this.filteredData = new MatTableDataSource(this.data);
                  
                    this.filteredData.paginator = this.paginator;
                    this.dataLength = this.filteredData.data.length;
                      });
  }
  
  // Other methods and logic in your component

  
   ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
  }
  toggleSearchColumn(column: string) {
    if (this.enabledSearchColumns.includes(column)) {
      this.enabledSearchColumns = this.enabledSearchColumns.filter(c => c !== column);
    } else {
      this.enabledSearchColumns.push(column);
    }
  }
  
  
  changeFilterColumn(column: string) {
    this.currentFilterColumn = column;
  }

   fetchdata(){
    this.http.get<{ employeedata: EmployeeData[] }>('assets/temp_data/employees.json').subscribe((data) => {
      this.employeedata = data.employeedata;
      this.totalItems = this.employeedata.length;
      this.uniqueDesignations = [...new Set(this.employeedata.map(employee => employee.Designation))];
      const keys = Object.keys(this.employeedata[0]);
      console.log(keys);
      this.displayedColumns = keys;
                  
      const initiallyCheckedColumns = [
        'EmpCode',
        'Name',
        'Designation',

      ];
      // Set up the hideColumns array to track column visibility
      this.hideColumns = keys.map(
        (column) => !initiallyCheckedColumns.includes(column)
      );
    
      this.filteredData = new MatTableDataSource(this.data);
    
      this.filteredData.paginator = this.paginator;
      this.dataLength = this.filteredData.data.length;
    
      this.applyFilter();
      });
   
    }
   copy(email:string){
    this.clipboard.copy(email);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 500); // Reset the "copied" class after 500ms

    // Show copied tooltip using MatSnackBar
    this.snackBar.open('Copied!', 'Close', {
      duration: 2000,
    });
  
   
   }
  
    copyEmail(email: string): void {
      
      const outlookURL =
        'https://outlook.office.com/mail/deeplink/compose?to=' +
        encodeURIComponent(email);
      const windowOptions = 'width=800,height=600,scrollbars=yes,resizable=yes';
      window.open(outlookURL, 'Outlook', windowOptions);
    }
  
    toggleColumnVisibility(index: number) {
      const column = this.displayedColumns[index];
      const columnIndex = this.initiallyCheckedColumns.indexOf(column);
      if (columnIndex !== -1) {
        // Column is already in initiallyCheckedColumns, so remove it
        this.initiallyCheckedColumns.splice(columnIndex, 1);
      } else {
        // Column is not in initiallyCheckedColumns, so add it
        this.initiallyCheckedColumns.push(column);
      }
      this.updateColumnVisibility();
      this.updateCheckedColumnsCount();
    }
    
    
    
    
    
applyFilter() {
  const filterValue = this.searchTerm.toLowerCase();
    const filteredData = this.employeedata.filter(
      (employee) =>
        employee.Name.toLowerCase().includes(filterValue) ||
        employee.Designation.toLowerCase().includes(filterValue) ||
        employee.MentorName.toLowerCase().includes(filterValue) ||
        employee.EmpCode.toLowerCase().includes(filterValue) 


    );
    this.filteredData.data = filteredData;
    console.log(this.filteredData.data)
    this.filteredData.paginator = this.paginator;
}
applyFilt() {
  const selectedDesignationKeys = Object.keys(this.selectedDesignations)
    .filter(key => this.selectedDesignations[key]);

  if (selectedDesignationKeys.length === 0) {
    // No filters selected, show all data
    this.filteredData.data = this.employeedata;
  } else {
    // Apply filters based on selected designations
    this.filteredData.data = this.employeedata.filter(employee => {
      const lowercaseDesignation = employee.Designation;
      return selectedDesignationKeys.includes(lowercaseDesignation);
    });
  }

  this.filteredData.paginator = this.paginator;
}






onPageChange(event: PageEvent): void {
  this.paginator.pageIndex = event.pageIndex;
  this.paginator.pageSize = event.pageSize;
  this.applyFilter();

}
convertToTitleCase(input: string): string {
  const words = input.split('_');
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
}

goToFirstPage(): void {
  this.paginator.firstPage();
  this.onPageChange({
    pageIndex: this.paginator.pageIndex,
    pageSize: this.paginator.pageSize,
    length: this.paginator.length
  });
}

goToLastPage(): void {
  this.paginator.lastPage();
  this.onPageChange({
    pageIndex: this.paginator.pageIndex,
    pageSize: this.paginator.pageSize,
    length: this.paginator.length
  });
}

exportToExcel() {
  const data = this.filteredData.filteredData.map((item) => ({
    'Emp Code': item.EmpCode,
    'Name': item.Name,
    'Designation': item.Designation,
    'Email': item.Email,
    'Mentor Name': item.MentorName
  }));

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  const now = new Date();
  const fileName = `employee_data_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.xlsx`;

  saveAs(blob, fileName);
}
areAllColumnsVisible(): boolean {
  //return this.hideColumns.every(column => !column);
  return this.displayedColumns.length === this.initiallyCheckedColumns.length;
}
toggleAllColumnVisibility() {
  if (this.areAllColumnsVisible()) {
    this.initiallyCheckedColumns = ['EmpCode', 'Name', 'Designation'];
  } else if (!this.selectAllChecked) {
    this.initiallyCheckedColumns = this.displayedColumns.slice();
  }
  this.updateColumnVisibility();
  this.updateCheckedColumnsCount();
}
updateColumnVisibility() {
  if (!this.selectAllChecked) {
    // Show only the initially checked columns
    this.hideColumns = this.displayedColumns.map(column =>
      !this.initiallyCheckedColumns.includes(column)
    );
  } else {
    // Show all columns when "select all" is checked
    this.hideColumns = this.displayedColumns.map(() => false);
  }
  this.allColumnsVisible = this.areAllColumnsVisible();
}
updateCheckedColumnsCount() {
  this.checkedColumnsCount = this.initiallyCheckedColumns.length;
}



}
