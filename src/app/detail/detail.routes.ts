const routes = [
    {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent)
  },{
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
  },{
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },{
    path: 'forget',
    loadComponent: () => import('./pages/forpass/forpass.component').then(c => c.ForpassComponent)
  },{
    path: 'curd',
    loadComponent: () => import('./pages/curd/curd.component').then(c => c.CurdComponent)
  },{
    path: '**',
    loadComponent: () => import('./pages/pagenotfound/pagenotfound.component').then(c => c.PagenotfoundComponent)
  }
];

export default routes;