import { Component, ElementRef, ViewChild, HostListener, EventEmitter, Directive, Output,Renderer2, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

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

  deleteStoredValues(): void {
    // List of element keys to delete from Local Storage
    const elementKeys = ['element1', 'element2', 'element3', 'element4', 'element5'];

    elementKeys.forEach(key => {
      localStorage.removeItem(key);
    });

    // Optionally, update the positions on the page after deletion
    this.restorePositions();
  }

  restorePositions(): void {
    // Trigger change detection to update the view
    this.cdr.detectChanges();
  }




}
