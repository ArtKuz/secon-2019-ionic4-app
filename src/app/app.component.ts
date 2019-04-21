import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Спикеры',
      url: '/speakers',
      icon: 'people',
    },
    {
      title: 'Камера',
      url: '/camera',
      icon: 'camera',
    },
    {
      title: 'Камера 2',
      url: '/camera2',
      icon: 'camera',
    },
    {
      title: 'Регистрация',
      url: '/registration',
      icon: 'today',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#ffffff');
    });
  }
}
