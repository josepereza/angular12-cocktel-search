import { Component, OnInit } from '@angular/core';
import { CocktelService } from 'src/app/services/cocktel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cocktel-detail',
  templateUrl: './cocktel-detail.component.html',
  styleUrls: ['./cocktel-detail.component.css']
})
export class CocktelDetailComponent implements OnInit {
detalle!:any
ingredientes:any[]=[]
  constructor(private cocktelService:CocktelService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cocktelService.getDetail(id).subscribe(data=>{
      this.detalle=data;
      console.log('detalle ', data)
      
    })
  }

}
