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
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

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

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
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
   

   
  hideColumnHeaders: boolean = false;

   constructor(private snackBar: MatSnackBar,private http : HttpClient,private clipboard: Clipboard) { 
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
listOfColumns: ColumnItem[] = [
  {
    name: 'Name',
    sortOrder: null,
    sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
    listOfFilter: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' }
    ],
    filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
  },
  {
    name: 'Age',
    sortOrder: null,
    sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
    listOfFilter: [],
    filterFn: null
  },
  {
    name: 'Address',
    sortFn: null,
    sortOrder: null,
    listOfFilter: [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ],
    filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
  }
];
listOfData: DataItem[] = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];

trackByName(_: number, item: ColumnItem): string {
  return item.name;
}

sortByAge(): void {
  this.listOfColumns.forEach(item => {
    if (item.name === 'Age') {
      item.sortOrder = 'descend';
    } else {
      item.sortOrder = null;
    }
  });
}

resetFilters(): void {
  this.listOfColumns.forEach(item => {
    if (item.name === 'Name') {
      item.listOfFilter = [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ];
    } else if (item.name === 'Address') {
      item.listOfFilter = [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ];
    }
  });
}

resetSortAndFilters(): void {
  this.listOfColumns.forEach(item => {
    item.sortOrder = null;
  });
  this.resetFilters();
}


}
