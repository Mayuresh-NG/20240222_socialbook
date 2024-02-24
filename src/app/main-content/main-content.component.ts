import { Component } from '@angular/core';
import { StoryGalleryComponent} from '../story-gallery/story-gallery.component';
import { WritePostContainerComponent } from '../write-post-container/write-post-container.component';
import { PostContainerComponent } from '../post-container/post-container.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [StoryGalleryComponent, WritePostContainerComponent, PostContainerComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  userprofilephoto =
    'https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D';
}
