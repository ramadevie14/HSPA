import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{
message:string;
/**
 *
 */
constructor(private router:Router) {


}
ngOnInit(): void {

}
onBack()
{
  this.router.navigate(['/'])
  // this.message="I can't go back";
}
}
