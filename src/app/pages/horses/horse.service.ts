import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHorse } from './IHorse';
import { HORSES } from './mock-horse';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  httpOptionsBasic = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
  };

    horseList:Array<IHorse> = HORSES;

  constructor(private http: HttpClient) { }

  getHorses(){
    //   return of(this.horseList);
    return this.http.get<IHorse[]>('http://localhost:8000/api/horses');
  }

  addHorse(inputName: string, inputColor: string){
    return this.http.post('http://localhost:8000/api/horses',{
      name : inputName,
      color : inputColor,
      isAvailable : true
    }, this.httpOptionsBasic)

  }

  deleteHorse(id: number){
      return this.http.delete(`http://localhost:8000/api/horses/${id}`);
  }

  updateHorse(id: number, inputName: string, inputColor: string, radioAvailable: boolean){
    return this.http.put(`http://localhost:8000/api/horses/${id}`,{
        name : inputName,
        color : inputColor,
        isAvailable : radioAvailable
      } );
}




}
