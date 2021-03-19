import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Basic ${btoa('6f69b8ff57a1ec161267:4ce6a2da9f1492a6a0e294bbc7ceda09823a15d6')}`,
        }
      }
    )
      .pipe(map(response => response));
  }
}
