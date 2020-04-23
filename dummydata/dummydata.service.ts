import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class DummyDataService {
    public baseUrl: string;
    constructor(private http: HttpClient) {
      this.baseUrl = environment.apiURL;
    }

    getData(){
        return this.http.get(this.baseUrl + 'employees')
          .pipe(
            map(res => {
              return res;
            })
          );
    }
    getDataDetail(id:any){
      return this.http.get(this.baseUrl + 'employee/' + id)
        .pipe(
          map(res => {
            return res;
          })
        );
    }

    createData(data){
      return this.http.post(this.baseUrl + 'create', data)
        .pipe(
          map(res => {
            return res;
          })
        );
    }

    updateData(data, id){
      return this.http.put(this.baseUrl + 'update/' + id, data)
        .pipe(
          map(res => {
            return res;
          })
        );
    }

    deleteData(id){
      return this.http.delete(this.baseUrl + 'delete/' + id)
      .pipe(
        map(res => {
          return res;
        })
      );
    }
}