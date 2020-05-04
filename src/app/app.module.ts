import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//agendaprog
import { FormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

//sociallogin
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('862895939324-v05el3s26cb2a1a7lagcsmg6bmrngu61.apps.googleusercontent.com')
    },
    //{
      //id: FacebookLoginProvider.PROVIDER_ID,
      //provider: new FacebookLoginProvider("Facebook-App-Id")
    //}
  ]);
   
  export function provideConfig() {
    return config;
  }
   
 


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        SocialLoginModule,
        FormsModule,
        RouterModule


    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
   
        
    ],
    providers: [
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
         provide: AuthServiceConfig,
          useFactory: provideConfig
         },

       //  provider used to create fake backend
        fakeBackendProvider
    ],
   
    bootstrap: [AppComponent]
})

export class AppModule { }