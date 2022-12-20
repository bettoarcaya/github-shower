import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitListService {
  constructor(private http: HttpClient) { }

  getAllCommit() {
    return this.http.get('http://localhost:3000/');
  }
}
