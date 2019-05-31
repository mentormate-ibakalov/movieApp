import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '@shared/services/message.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }
  msg: Observable<object>;

  ngOnInit() {
    this.msg = this.messageService.getMessage();
  }

}
