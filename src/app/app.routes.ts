import { Routes } from '@angular/router';
import { ShortoneComponent } from './shortcutRedirects/shortone/shortone.component';
import { ShortTwoComponent } from './shortcutRedirects/short-two/short-two.component';
import { ShortThreeComponent } from './shortcutRedirects/short-three/short-three.component';
import { ShortFourComponent } from './shortcutRedirects/short-four/short-four.component';
import { FullbodyComponent } from './fullbody/fullbody.component';


export const routes: Routes = [
    {path: '', component:FullbodyComponent},
    {path: 'sh1', component: ShortoneComponent},
    {path: 'sh2', component: ShortTwoComponent},
    {path: 'sh3', component: ShortThreeComponent},
    {path: 'sh4', component: ShortFourComponent},
];
