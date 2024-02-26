import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullbody',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainContentComponent,
  ],
  templateUrl: './fullbody.component.html',
  styleUrl: './fullbody.component.css',
})
export class FullbodyComponent {
  userprofilephoto =
    'https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D';

  user: { firstname: string; lastname: string } = {
    firstname: 'Mayuresh',
    lastname: 'Gorantiwar',
  };
}
