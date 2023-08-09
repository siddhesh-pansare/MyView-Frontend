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
    console.log('My Profile clicked');
    this.isDropdownOpen = false; 
  }

  onLogoutClick() {
    console.log('Log out clicked');
    this.isDropdownOpen = false; 
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }


}
