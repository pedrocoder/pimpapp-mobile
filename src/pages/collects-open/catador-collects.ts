import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NearestCatadores } from './../nearest-catadores/nearest-catadores';



@Component({
  selector: 'collects-open',
  templateUrl: 'collects-open.html',
})
export class CollectsOpen {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  openNearestCatadores(){
    this.navCtrl.push(NearestCatadores);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
