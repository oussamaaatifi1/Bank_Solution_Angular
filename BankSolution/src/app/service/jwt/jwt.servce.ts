import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BASE_URL = ["http://localhost:8082/api/v1/auth/"]
@Injectable({
    providedIn : 'root'
})
export class JwtService {
    constructor(private http : HttpClient) {}

    register(signRequest:any): Observable<any>{
        return this.http.post(BASE_URL +'register', signRequest)
    }
    login(signRequest:any): Observable<any>{
        return this.http.post(BASE_URL +'authenticate', signRequest)
    }
}