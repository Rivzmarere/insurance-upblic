import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

import { NxModule } from '@nrwl/angular';
import { TokenService } from './services/token.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromCurrentUser from './+state/current-user.reducer';
import { CurrentUserEffects } from './+state/current-user.effects';
import { CurrentUserFacade } from './+state/current-user.facade';

const uiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#ffffff',
  fgsColor: '#ffffff',
  pbColor: '#ffffff',
  bgsPosition: POSITION.centerCenter,
  overlayColor: 'rgba(30, 85, 36, 0.65)',
  bgsSize: 40,
  bgsType: SPINNER.fadingCircle, // background spinner type
  fgsType: SPINNER.fadingCircle, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness,
  bgsOpacity: 0.5,
  blur: 0.5,
  text: 'PLEASE WAIT...',
  textColor: '#ffffff',
  textPosition: 'center-center',
};

@NgModule({
  imports: [
    HttpClientModule,
    NgxUiLoaderModule.forRoot(uiLoaderConfig),
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),

    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    StoreModule.forFeature(
      fromCurrentUser.CURRENT_USER_FEATURE_KEY,
      fromCurrentUser.reducer
    ),
    EffectsModule.forFeature([CurrentUserEffects]),
  ],
  exports: [NgxUiLoaderModule],
  providers: [CurrentUserFacade],
})
export class CoreModule {
  public static forRoot(
    isProduction?: boolean
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        TokenService
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}

export const APP_VERSION = new InjectionToken<string>('AppVersion');
