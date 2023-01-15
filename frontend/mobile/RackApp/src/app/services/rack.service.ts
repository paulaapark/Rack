import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private http:HttpClient) { }
  newRack(formData:object){
    return this.http.post('http://localhost:3000/rack', formData)
  }
}
