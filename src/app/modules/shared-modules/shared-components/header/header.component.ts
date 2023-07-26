import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
  
  
})
export class HeaderComponent {
  isDropdownOpen = false;

  constructor() { }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
}

isSearchBarVisible = false;

  showSearchBar() {
    this.isSearchBarVisible = true;
  }

  hideSearchBar() {
    this.isSearchBarVisible = false;
  }

}
