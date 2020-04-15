import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';
import { DetailComponent } from './CvTech/detail/detail.component';
import { AddComponent } from './CvTech/add/add.component';
import { DeleteComponent } from './CvTech/delete/delete.component';
import { ErrorComponent } from './CvTech/error/error.component';

const ROUTING_PATH: Routes = [
    {
        path: 'cv', children: [
            { path: '', component: CvComponent },
            { path: 'delete/:id', component: DeleteComponent },
            { path: 'add', component: AddComponent },
            { path: ':id', component: DetailComponent },
        ]
    },
    { path: '', component: CvComponent },
    { path: '**', component: ErrorComponent },
];

export const Route = RouterModule.forRoot(ROUTING_PATH);
