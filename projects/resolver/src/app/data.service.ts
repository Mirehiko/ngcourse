import {Injectable} from "@angular/core";
import {from, Observable, ObservedValueOf} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class DataService {

    mydata?: string;

    constructor(private http: HttpClient) {}

    loadData(): Observable<string> {
        if (this.mydata) {
            return from(this.mydata);  // return from cache
        } else {
            return this.http.get<string>("./assets/48MB_DATA.json")
                .pipe(tap(data => this.mydata = data));
        }
    }
}
