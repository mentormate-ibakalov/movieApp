import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MessageService } from '@shared/services/message.service';


@Directive({
  selector: '[appMessageAnimation]'
})
export class MessageAnimationDirective implements OnInit {

  constructor(private  elem: ElementRef, private renderer: Renderer2, private MessageService: MessageService) {}

  addClass(className: string) {
  this.renderer.addClass(this.elem.nativeElement, className);
}

removeClass(className: string) {
    this.renderer.removeClass(this.elem.nativeElement, className);
}

  ngOnInit(): void {
    this.MessageService.currentMassage.subscribe(sub => {
      if (Object.keys(sub).length !== 0) {
        setTimeout(() => { this.removeClass('letIn') }, 7000);
      }
    })
  }
}
