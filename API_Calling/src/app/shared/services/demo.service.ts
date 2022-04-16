import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface UserInfo {
    total_count: string;
    incomplete_results: string;
    items: [];
}
 
@Injectable({
    providedIn: 'root',
   })



export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getUsers(user:any) {
        return this.http.get<UserInfo>('https://api.github.com/search/users?q='+user); 
    }
}