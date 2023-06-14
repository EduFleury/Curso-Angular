import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private apiurl = 'http://localhost:3000/animals'

  remove(animals: Animal[], animal: Animal){
      console.log("Ativando service")
      return animals.filter((a) => animal.name != a.name)
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiurl)
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiurl}/${id}`)
  }
}
