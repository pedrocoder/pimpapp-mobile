import { Feedback } from './../pages/feedback/feedback';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LandingPage } from './../pages/landing/landing';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild('c') nav: NavController;

  rootPage:any = LandingPage;
  public menu: MenuController;

  constructor(platform: Platform, statusBar: StatusBar, public menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });

  }

  openPage(page){
    switch (page) {
      case 'feedback':
      this.nav.push(Feedback);
      this.menuCtrl.close();
      break;
    }
  }
}

