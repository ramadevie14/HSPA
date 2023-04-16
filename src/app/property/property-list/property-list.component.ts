import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  SellRent=1;
  properties:IProperty[]  ;

  constructor(private route: ActivatedRoute, private housingservices:HousingService) { }

  ngOnInit(): void {
   if(this.route.snapshot.url.toString())
   {
    this.SellRent=2;
   }

     this.housingservices.getAllProperties(this.SellRent).subscribe(
      x=>{
        this.properties=x;

   },
   error=>{
    console.log('httperror');
    console.log(error);
   }
     )




  }



}
