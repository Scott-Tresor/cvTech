import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';

const ROUTING_PATH: Routes = [
    { path: ' ', redirectTo: '/', pathMatch: 'full' },
    { path: 'cv', component: CvComponent },
];

export const Route = RouterModule.forRoot(ROUTING_PATH);
