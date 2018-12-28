import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_ICONS, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './page-construction/main-page/main-page.component';
import {AppRoutingModule} from './app-routing.module';
import {PageHeaderComponent} from './page-construction/page-header/page-header.component';
import {SearchBarComponent} from './component-functional/search-bar/search-bar.component';
import {AutoCompleteData} from './mock-data/autoCompleteData';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ChartRoomComponent } from './page-construction/chart-room/chart-room.component';

registerLocaleData(zh);

const antDesignIcons          = AllIcons as { [key: string]: IconDefinition; };
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageHeaderComponent,
    SearchBarComponent,
    ChartRoomComponent,
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AutoCompleteData, {dataEncapsulation: false}
    )
  ],
  providers   : [{provide: NZ_I18N, useValue: zh_CN}, {provide: NZ_ICONS, useValue: icons}],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
