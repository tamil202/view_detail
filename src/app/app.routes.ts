import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: "",
    loadChildren:()=>import('./detail/detail.routes')
},
    {
    path: "detail",
    loadChildren:()=>import('./detail/detail.routes')
}
];
