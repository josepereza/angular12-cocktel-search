import { Component, OnInit } from '@angular/core';
import { CocktelService } from 'src/app/services/cocktel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
cocktels:string[]=[]
  constructor(private cocktelService:CocktelService) { }

  ngOnInit(): void {
    this.cocktelService.getAll().subscribe((data:any)=>{
     // this.cocktels=data.data.memes;
      console.log('mis cockterls ',data)
    })
  }

}
