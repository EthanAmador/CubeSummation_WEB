import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceApiService } from '../services/service-api.service'
import { Operacion } from '../models/operacion'

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html'
})
export class OperacionesComponent implements OnInit {

  //operacion = new FormControl('');

  showError:boolean= false; 
  textError:string = ""; 
/*
  
  */
  
  operacion = new FormGroup({
    txtdato: new FormControl('')
  }); 

  txtdatoResult = new FormControl(''); 
  
  constructor(private servicio: ServiceApiService) { }

  ngOnInit() {
  }

   onSubmit(){
    if(this.operacion.valid){

      let op = new Operacion(); 
      op.operacion = this.operacion.controls.txtdato.value

      this.servicio.ObtenerResultado(op).subscribe(
        (data)=>{
          let _result:string = ""; 
          data.result.forEach(element => {
             _result += element+"\n"; 
          });
          this.txtdatoResult.setValue(_result); 
        },
        (e) => {

            this.showError = true; 
            this.textError = e.error; 
            setTimeout(() => {
              this.showError = false; 
              this.textError = "";  
            }, 5000);
        }); 
      
    }
  }

}
