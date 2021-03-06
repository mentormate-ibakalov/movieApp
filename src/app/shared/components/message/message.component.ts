import { Component, OnInit } from '@angular/core';
import { MessageService } from '@shared/services/message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    private messageService: MessageService
    ) { }
  msg: any;

  ngOnInit() {
    this.msg = this.messageService.currentMassage;
  }

}
