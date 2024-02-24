import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-write-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './write-post-container.component.html',
  styleUrl: './write-post-container.component.css'
})
export class WritePostContainerComponent {
  userprofilephoto =
  'https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D';
  user: { firstname: string; lastname: string } = {
    firstname: 'Mayuresh',
    lastname: 'Gorantiwar',
  };
}
