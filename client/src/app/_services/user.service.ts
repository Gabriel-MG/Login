import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../_models/index';
 
@Injectable()
export class UserService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post('/users/register', user);
    }
 
    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }
 
    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }


    setLed(_id:string, flag:boolean) 
    {
        if(flag)
        {
            return this.http.post('/users/apagar/' + _id,{});
        }
        else
        {
            return this.http.post('/users/encender/' + _id,{});
        }
        
    }
 
    getLed(_id: string) {
        return this.http.get('/users/getLed/' + _id).map((response: Response) => response.json());
    }
    
}