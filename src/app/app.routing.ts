import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';
import { DetailComponent } from './CvTech/detail/detail.component';

const ROUTING_PATH: Routes = [
    { path: ' ', redirectTo: '/', pathMatch: 'full' },
    { path: 'cv', component: CvComponent },
    { path: 'cv/:id', component: DetailComponent },
];

export const Route = RouterModule.forRoot(ROUTING_PATH);
