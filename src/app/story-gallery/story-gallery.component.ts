import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-gallery.component.html',
  styleUrl: './story-gallery.component.css',
})
export class StoryGalleryComponent {
  userprofilephoto =
    'https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D';
  story2: { profile_url: string; url: string; name: string } = {
    profile_url:
      'https://plus.unsplash.com/premium_photo-1708194041762-245c26f3c8bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://images.unsplash.com/photo-1682687220363-35e4621ed990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNTl8fHxlbnwwfHx8fHw%3D',
    name: 'NEOM',
  };

  story3: { profile_url: string; url: string; name: string } = {
    profile_url:
      'https://images.unsplash.com/photo-1477064601209-5ed2b9f3b1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://images.unsplash.com/photo-1708164863710-14fa216daa5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjJ8fHxlbnwwfHx8fHw%3D',
    name: 'DM DAVID',
  };

  story4: { profile_url: string; url: string; name: string } = {
    profile_url:
      'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://images.unsplash.com/photo-1708074017412-be6a9e38e4ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjZ8fHxlbnwwfHx8fHw%3D',
    name: 'ASHFORD MARX',
  };

  story5: { profile_url: string; url: string; name: string } = {
    profile_url:
      'https://images.unsplash.com/photo-1707707289494-af5b6017f7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://images.unsplash.com/photo-1708022799750-afbe4be26f73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzZ8fHxlbnwwfHx8fHw%3D',
    name: 'NICHOLAS',
  };
}
