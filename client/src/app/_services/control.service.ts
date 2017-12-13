import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

 
@Injectable()
export class ControlService {
    constructor(private http: Http) { }
 
    setLed(_id:string, flag:boolean) 
    {
        if(flag)
        {
            return this.http.get('/users/apagar/' + _id);
        }
        else
        {
            return this.http.get('/users/encender/' + _id);
        }
        
    }
 
    getLed(_id: string) {
        return this.http.get('/users/get/' + _id);
    }
}