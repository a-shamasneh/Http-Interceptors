import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, observeOn } from 'rxjs/operators';
@Injectable()
export class AppService {

    constructor( private http: HttpClient){

    }
  

getNews():Observable<any>{
    return this.http.get<any>("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=5ccf40a4e56140f4294c0a43ab7e5fd12");
   
}

}