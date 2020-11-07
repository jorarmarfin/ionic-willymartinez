import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertCtrl:AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.backButton.subscribeWithPriority(0, () => {
        this.presentAlert();
       
     });
    });
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cuidado estas apunto de salir',
      message: 'Esta seguro que desea salir de la aplicacion',
      buttons: [{
        text:"Ok",
        handler:()=>{
          navigator['app'].exitApp();
        },
      },'Cancel']
    });

    await alert.present();
  }



}
