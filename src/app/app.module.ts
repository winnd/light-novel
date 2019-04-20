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
import {AutoCompleteData} from '../data/mock-data/autoCompleteData';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NavBarTopComponent} from './page-construction/nav-bar-top/nav-bar-top.component';
import {ChartRoomComponent} from './page-construction/chart-room/chart-room.component';
import {ContentBlockComponent} from './page-construction/content-block/content-block.component';
import {LeftSideNavComponent} from './page-construction/left-side-nav/left-side-nav.component';
import {BookDetailComponent} from './page-construction/book-detail/book-detail.component';
import {EpubReaderComponent} from './component-functional/epub-reader/epub-reader.component';
import { AdBlockComponent } from './page-construction/ad-block/ad-block.component';
import { PageFooterComponent } from './page-construction/page-footer/page-footer.component';
import { CarouseComponent } from './page-construction/carouse/carouse.component';

registerLocaleData(zh);

const antDesignIcons = AllIcons as { [key: string]: IconDefinition; };
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageHeaderComponent,
    SearchBarComponent,
    NavBarTopComponent,
    ChartRoomComponent,
    ContentBlockComponent,
    LeftSideNavComponent,
    BookDetailComponent,
    EpubReaderComponent,
    AdBlockComponent,
    PageFooterComponent,
    CarouseComponent,
  ],
  imports: [
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
  providers: [{provide: NZ_I18N, useValue: zh_CN}, {provide: NZ_ICONS, useValue: icons}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
