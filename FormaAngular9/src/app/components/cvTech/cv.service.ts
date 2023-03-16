import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from 'src/app/models/Person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Person[];

  link = 'http://localhost:3000/api/people';

  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Person(1, 'Muriel', 'TSIDIANY', 22, "tim_logo.png", 256525666, 'Developper'),
      new Person(2, 'Fatima', 'FANO', 21, "tim_logo.png", 25252525, 'Teacher'),
      new Person(3, 'Inconnu', 'Test', 45, "", 252522825, 'Formateur'),
    ];
   }

   getPersonnes(): Observable<Person[]>{
    return this.http.get<Person[]>(this.link);
   }

   getFakePersonne(){
    return this.personnes;
   }

   getPersonneById(id: number): Observable<Person>{
    
    return this.http.get<Person>(this.link+`/${id}`);
   }

  addPersonne(personne: Person): Observable<any>{
    const token = localStorage.getItem('token'); 

    if(token){
      const params = new HttpParams().set('access_token', token);
      return this.http.post(this.link, personne, {params});
    }
    return this.http.post(this.link, personne);
   }

   deletePersonne(id: number){
    return this.http.delete(this.link+`/${id}`);
   }
}
