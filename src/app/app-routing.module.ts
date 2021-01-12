import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: 'add-open-house',
    loadChildren: () => import('./add-open-house/add-open-house.module').then( m => m.AddOpenHousePageModule)
  },
  {
    path: 'choose-template',
    loadChildren: () => import('./choose-template/choose-template.module').then( m => m.ChooseTemplatePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'empity-list',
    loadChildren: () => import('./empity-list/empity-list.module').then( m => m.EmpityListPageModule)
  },
  {
    path: 'entry-page',
    loadChildren: () => import('./entry-page/entry-page.module').then( m => m.EntryPagePageModule)
  },
  {
    path: 'launched',
    loadChildren: () => import('./launched/launched.module').then( m => m.LaunchedPageModule)
  },
  {
    path: 'leads',
    loadChildren: () => import('./leads/leads.module').then( m => m.LeadsPageModule)
  },


  {
    path: 'open-house-list',
    loadChildren: () => import('./open-house-list/open-house-list.module').then( m => m.OpenHouseListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'schedule-listing',
    loadChildren: () => import('./schedule-listing/schedule-listing.module').then( m => m.ScheduleListingPageModule)
  },
  {
    path: 'start-launch',
    loadChildren: () => import('./start-launch/start-launch.module').then( m => m.StartLaunchPageModule)
  },
  {
    path: 'start-slides',
    loadChildren: () => import('./start-slides/start-slides.module').then( m => m.StartSlidesPageModule)
  },
  {
    path: 'templet',
    loadChildren: () => import('./templet/templet.module').then( m => m.TempletPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
