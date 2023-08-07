import { Component ,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
  
  
})
export class HeaderComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onProfileClick() {
    // Add your logic for the "My Profile" option here
    console.log('My Profile clicked');
    this.isDropdownOpen = false; // Close the dropdown
  }

  onLogoutClick() {
    // Add your logic for the "Log out" option here
    console.log('Log out clicked');
    this.isDropdownOpen = false; // Close the dropdown
  }

  closeDropdown() {
    // Close the dropdown when the mouse leaves it
    this.isDropdownOpen = false;
  }


}
