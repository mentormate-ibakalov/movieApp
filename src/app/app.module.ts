
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserHeader } from '@shared/providers/app.user-header';
import { SharedModule } from '@shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    // RoutingComponents,
    // SearchComponent,
    // SearchResultComponent,s
    // HeaderComponent,
    // MessageComponent,
    // MessageAnimationDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // AppRoutingModule,
    // HttpClientModule,
    // FormsModule,
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: UserHeader, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
