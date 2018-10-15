import { Component, Input } from '@angular/core';
import { Channel } from '../../models/channel';


@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html'
})
export class ChannelDetailComponent  {

  @Input() channel: Channel;
}
