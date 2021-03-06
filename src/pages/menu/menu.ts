import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorialPage } from './../tutorial/tutorial';
import { PerfilCatador } from './../perfil-catador/perfil-catador';
import { ErrorPage } from './../404/ErrorPage';

import { CatakiPage } from './../cataki/cataki';
import { PimpMyCarrocaPage } from './../pimpmycarroca/pimpmycarroca';
import { ParceirosPage } from './../parceiros/parceiros';
import { PraOndeVamosPage } from './../praondevamos/praondevamos';
import { ColaborePage } from './../colabore/colabore';
import { CadastroCatador } from './../cadastro-catador/cadastro-catador';
import { CadastroCatadorWebPage } from './../cadastro-catador-web/cadastro-catador-web';


@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    constructor(public navCtrl: NavController) {
    }

    openTutorial() {
        this.navCtrl.push(TutorialPage);
    }

    errorpage() {
        this.navCtrl.push(ErrorPage);
    }

    goCataki() {
        this.navCtrl.push(CatakiPage);
    }

    goPimpMyCarroca() {
        this.navCtrl.push(PimpMyCarrocaPage);
    }

    goParceiros() {
        this.navCtrl.push(ParceirosPage);
    }

    goParondeVamos() {
        this.navCtrl.push(PraOndeVamosPage);
    }

    goColabore() {
        this.navCtrl.push(ColaborePage);
    }
    
    cadastroCatador() {
        this.navCtrl.push(CadastroCatador);
    }

    cadastroCatadorWeb() {
        this.navCtrl.push(CadastroCatadorWebPage);
    }

    openCatadorPage() {
        // Open Página do Catador
        this.navCtrl.push(PerfilCatador, 
            {catadorID: 325},  //325 e 343
            {   animate: true, 
                direction: 'forward',
                duration: 1000,
                animation: 'md-transition'}
        );
    }
}
