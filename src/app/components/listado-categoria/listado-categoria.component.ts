import { Component, OnInit } from '@angular/core';
import { CocktelService } from 'src/app/services/cocktel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap,map,filter,finalize,tap,debounceTime,distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent implements OnInit {
  src:string=""
isLoading:boolean=false;
categoria!:any
  constructor(private cocktelService:CocktelService,private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit(): void {
    // this.route.params
    // .pipe(
    //   switchMap(({categoria}) => this.cocktelService.getListadoCategoria(categoria))
    //   )
    // .subscribe((data:any)=>this.categoria=data.drinks)
  
    this.categoria= this.route.paramMap.pipe(tap(()=>this.isLoading=true),
      switchMap((params: ParamMap) =>this.cocktelService.getListadoCategoria(params.get('categoria'))
     
      ),map((data:any)=>data.drinks),tap(()=>this.isLoading=false)
      )
  }
 
   verDetail(id:any){
     this.router.navigate(['detalle', id])
   }
 search(event:any){
  this.isLoading = true; 
  this.categoria= this.route.paramMap.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((params: ParamMap) =>this.cocktelService.getListadoCategoria(params.get('categoria'))
   
    ),map((data:any)=>data.drinks.filter((data:any)=>data.strDrink.includes(event))),
   
    tap(()=>this.isLoading=false)
    )
 }
}


 