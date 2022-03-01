import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {
  CoreModule,
  APP_VERSION,
  TokenService,
  AUTH_OPTIONS_INJECTION_TOKEN,
  AuthenticationOptions
} from '@insurance/core';
import { IconDefinition  } from '@ant-design/icons-angular';
import {
  KeyOutline,
  LockOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NzIconModule } from 'ng-zorro-antd/icon';


const icons: IconDefinition[] = [
  UserOutline,
  LockOutline
];

const authOptions: AuthenticationOptions = {
  clientId: environment.auth.clientId,
  clientSecret: environment.auth.clientSecret,
};

export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getToken();
    },
    skipWhenExpired: true,
    allowedDomains: [],
    disallowedRoutes: ['/oauth-api/v1/Account/login']
  };
}

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzIconModule.forChild(icons),
    CoreModule.forRoot(environment.production),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService]
      }
    }),
    LoggerModule.forRoot({
      level: environment.production
        ? NgxLoggerLevel.WARN
        : NgxLoggerLevel.DEBUG
    }),],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: AUTH_OPTIONS_INJECTION_TOKEN, useValue: authOptions },
    { provide: APP_VERSION, useValue: environment.version },
    { provide: 'BaseUrl', useValue: environment.baseUrl },],
  bootstrap: [AppComponent],
})

export class AppModule {


}
