import { PreloadingStrategy, Route } from '@angular/router';

import {Injectable} from "@angular/core";
import {delay, EMPTY, Observable} from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return (route.data && route.data['preloadme']) ?
      load(): EMPTY;
  }
}
