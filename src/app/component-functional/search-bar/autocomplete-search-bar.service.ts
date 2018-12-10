import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';

const httpOptions = {header: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
              providedIn: 'root'
            })
export class AutocompleteSearchBarService {
  
  private dataUrl = 'api/options';
  
  autocompleteSearchBarData: any[] = [];
  
  getAutoCompleteSearchBarDatas(): Observable<any[]> {
    return this
      .http
      .get<any[]>(this.dataUrl)
      .pipe(tap(item => this.log('fetch data')));
  }
  
  private log(msg: string) {
    console.log(msg);
  }
  
  constructor(private http: HttpClient) { }
}
