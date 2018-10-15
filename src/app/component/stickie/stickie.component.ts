import { Component, OnInit, Input } from '@angular/core';
import { Stickie } from '../../models/stickie';

@Component({
  selector: 'app-stickie',
  templateUrl: './stickie.component.html',
  styleUrls: ['./stickie.component.css']
})
export class StickieComponent{
  @Input() stickie:Stickie;
}