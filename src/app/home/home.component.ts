import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string;
  constructor(private _AppService:AppService) { }

  ngOnInit() {
    this._AppService.getNews().subscribe((data:any)=>{
      console.log(data);
    },error=>this.message=error
    );
  }

}
