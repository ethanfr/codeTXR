import { Component, OnInit } from '@angular/core';
import { Stickie } from '../../models/stickie';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent  {

 public stickies = [
    {category: 'Home', value: 'Pay the mobile bill.', color: 'lightseagreen'},
    {category: 'Bank', value: 'Submit the declaration form.', color: 'lightgreen'},
    {category: 'Home', value: 'Pay the electricity bill.', color: 'lightseagreen'},
    {category: 'Office', value: 'Submit travel expense xls.', color: 'lightblue'},
    {category: 'Office', value: 'It is coffee time.', color: 'lightblue'}

  ];
  stickie:Stickie;

  

}
