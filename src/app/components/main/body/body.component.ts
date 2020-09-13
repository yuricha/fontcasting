import { Component, OnInit} from '@angular/core';
import { Options } from 'ng5-slider';


import { ServicerecetService } from '../../servicerecet.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  value: number = 100;
  options: Options = {
    floor: 500,
    ceil: 1800
  };
  lista:string[]=["1","2","3", "4","5","6","7","8", "9","10"];
  headElements = ['Id', 'Titulo', 'Imagen'];
  mostrar = true;
  listR:any;
  constructor(public recetaService: ServicerecetService) { }

  ngOnInit() {


  }

  onClickSearch(){
    const n:any = document.getElementById("namereceta");
    const s:any = document.getElementById("miselect");
    const nameReceta:any=n.value;
    const calories:any=this.value;
    const numrecetas:any=s.value;
   
    this.recetaService.getReceta(nameReceta,calories,numrecetas).subscribe(
      data => {
        console.log(data);
         this.listR= data["results"];
      });
  }

}
