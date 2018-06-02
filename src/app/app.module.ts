import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { UserPage } from '../pages/user/user';
import { DriverPage } from '../pages/driver/driver';
import { SignupPage } from '../pages/signup/signup';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../provider/data';
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { DriverhomePage } from '../pages/driverhome/driverhome';
import { PesanpokiPage } from '../pages/pesanpoki/pesanpoki';
import { KonfirmasiPage } from '../pages/konfirmasi/konfirmasi';
import { KonfirmasiPesananPage } from '../pages/konfirmasi-pesanan/konfirmasi-pesanan';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    UserPage,
    DriverPage,
    SignupPage,
    ProfilePage,
    EditprofilePage,
    DriverhomePage,
    PesanpokiPage,
    KonfirmasiPage,
    KonfirmasiPesananPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    UserPage,
    DriverPage,
    SignupPage,
    ProfilePage,
    EditprofilePage,
    DriverhomePage,
    PesanpokiPage,
    KonfirmasiPage,
    KonfirmasiPesananPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
