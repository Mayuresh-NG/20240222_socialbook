import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-container.component.html',
  styleUrl: './post-container.component.css'
})
export class PostContainerComponent {
  user: { firstname: string; lastname: string } = {
    firstname: 'Mayuresh',
    lastname: 'Gorantiwar',
  };
  userprofilephoto =
    'https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D';
  posts: Array<{
    imgSrc: string;
    userName: string;
    timestamp: string;
    postText: string;
    postImgSrc: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
  }> = [
    {
      imgSrc: this.userprofilephoto,
      userName: this.user.firstname + ' ' + this.user.lastname,
      timestamp: 'June 2 2023, 16:40 pm',
      postText:
        'Graceful wanderers, finding beauty in the vast silence of the desert sands – Deers in the Desert.',
      postImgSrc:
        'https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNzh8fHxlbnwwfHx8fHw%3D',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1706883376007-95963191784e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D',
      userName: 'Aashish Gorantiwar ',
      timestamp: 'November 1 2023, 1:40 am',
      postText:
        'Awaken your senses with the vibrant symphony of Indian spices, where every dish tells a tale of tradition, flavor, and a rich culinary heritage. 🌶️🌿 #SpiceOfIndia #FlavorfulJourney',
      postImgSrc:
        'https://plus.unsplash.com/premium_photo-1705433052991-8ebe1c81ce35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODR8fHxlbnwwfHx8fHw%3D',
      likeCount: 100,
      commentCount: 50,
      shareCount: 8,
    },
    {
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      userName: 'Ramesh Thakur',
      timestamp: 'June 2 2023, 16:40 pm',
      postText:
        'Subscribe <span></span> Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel',
      postImgSrc:
        'https://images.unsplash.com/photo-1708269311289-fc780cf2cfdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODd8fHxlbnwwfHx8fHw%3D',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      userName: 'Brijesh Yadav',
      timestamp: 'June 2 2023, 16:40 pm',
      postText:
        'Subscribe <span></span> Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel',
      postImgSrc:
        'https://images.unsplash.com/photo-1682688759157-57988e10ffa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTh8fHxlbnwwfHx8fHw%3D',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
  ];
}
