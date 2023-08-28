import { Component, ElementRef, ViewChild, HostListener, EventEmitter, Directive, Output,Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    });
  }
  toggleDropdown() : void{
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
