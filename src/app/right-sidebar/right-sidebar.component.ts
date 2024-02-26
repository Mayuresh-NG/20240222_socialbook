import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {
  Date = [
    {
      Day: '08',
      Month: 'June',
      desc: 'Angular training',
      venue: 'Aspire',
    },
    {
      Day: '18',
      Month: 'February',
      desc: 'Persona Fest',
      venue: 'MIT',
    },
    {
      Day: '25',
      Month: 'March',
      desc: 'IPL Match',
      venue: 'Indira gandhi stadium',
    },
  ];
}
