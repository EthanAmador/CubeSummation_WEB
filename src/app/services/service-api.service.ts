import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Operacion } from '../models/operacion'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  constructor(private http: HttpClient) {}
  
   ObtenerResultado(_operacion:Operacion):Observable<any>{
      return this.http.post("http://localhost:55288/api/Operacion/GetResult",_operacion); 
      /*.subscribe(
        (data)=>{console.log(data.result)},
        (e: HttpErrorResponse) => {
            if(e.error instanceof Error){
              console.log("Error en el cliente"); 
            }else{
              console.log("Error en el servidor: "+ e);  
            }
        }); 
        */
  }
  
}
