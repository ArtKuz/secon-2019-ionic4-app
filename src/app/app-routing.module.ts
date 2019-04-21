import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'speakers',
    pathMatch: 'full',
  },
  {
    path: 'speakers',
    loadChildren: './speakers/speakers.module#SpeakersPageModule',
  },
  {
    path: 'speaker/:id',
    loadChildren: './speaker/speaker.module#SpeakerPageModule',
  },
  {
    path: 'camera',
    loadChildren: './camera/camera.module#CameraPageModule',
  },
  {
    path: 'camera2',
    loadChildren: './camera2/camera2.module#Camera2PageModule',
  },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
