import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p>home component variable below</p>
  <p style="text-align: center;"><strong>{{name}}</strong></p>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  @Input() name: string = 'Angular'

  constructor(private zone: NgZone) { }


  ngOnInit() {
    console.log('NgZone initialized:', this.zone);

    // Log when entering the zone
    this.zone.onUnstable.subscribe(() => {
      console.log('Entering NgZone');
    });

    // Log when leaving the zone
    this.zone.onStable.subscribe(() => {
      console.log('Leaving NgZone');
    });

    // Log when a microtask is scheduled
    this.zone.onMicrotaskEmpty.subscribe(() => {
      console.log('NgZone microtask empty');
    });

    // Log when a macrotask is scheduled
    this.zone.onError.subscribe((error) => {
      console.error('NgZone error:', error);
    });
  }

}
