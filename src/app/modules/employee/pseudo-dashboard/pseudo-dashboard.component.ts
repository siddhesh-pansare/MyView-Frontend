import { CdkDragStart, CdkDragMove, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pseudo-dashboard',
  templateUrl: './pseudo-dashboard.component.html',
  styleUrls: ['./pseudo-dashboard.component.css']
})
export class PseudoDashboardComponent {
  private localStorageKey = 'draggedElementCoordinates';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Load the saved coordinates from local storage if available
    const savedCoordinates = localStorage.getItem(this.localStorageKey);
    if (savedCoordinates) {
      const { x, y } = JSON.parse(savedCoordinates);
      this.restoreCoordinates(x, y);
    }
  }

  // Function to handle drag start
  onDragStarted(event: CdkDragStart) {
    // Nothing to do here for the drag start event
  }

  // Function to handle drag move
  onDragMoved(event: CdkDragMove) {
    // Get the current X and Y coordinates of the dragged element
    const x = event.pointerPosition.x;
    const y = event.pointerPosition.y;

    // Save the coordinates to local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify({ x, y }));
  }

  // Function to handle drag end
  onDragEnded(event: CdkDragEnd) {
    // Nothing to do here for the drag end event
  }

  private restoreCoordinates(x: number, y: number) {
    // Get the dragged element and set its position using CSS transform
    const element = this.elementRef.nativeElement.querySelector('.example-box');
    if (element) {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }

}
