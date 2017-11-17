
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {InicialPage} from '../pages/inicial/inicial';
import {ParapentePage} from '../pages/parapente/parapente';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParamotorPage } from '../pages/paramotor/paramotor';
import { RodapeComponent } from '../components/rodape/rodape';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InicialPage,
    ParapentePage,
    ParamotorPage,
    RodapeComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InicialPage,
    ParapentePage,
    ParamotorPage,
    RodapeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
