import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UsersAPI } from '../../providers/users-api';

@Component({
  selector: 'page-coletaabertaretorno2h',
  templateUrl: 'coletaabertaretorno2h.html',
})
export class ColetaAbertaRetorno2h {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: UsersAPI, public loading: LoadingController, 
    public alertCtrl: AlertController) {
  }


}
