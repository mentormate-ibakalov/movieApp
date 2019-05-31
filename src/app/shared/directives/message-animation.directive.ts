import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '@shared/services';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[appMessageAnimation]'
})
export class MessageAnimationDirective implements OnInit, OnDestroy {

  constructor(private elem: ElementRef, private renderer: Renderer2, private messageService: MessageService) { }
  
  message:Subscription

  addClass(className: string) {
    this.renderer.addClass(this.elem.nativeElement, className);
  }

  removeClass(className: string) {
    this.renderer.removeClass(this.elem.nativeElement, className);
  }

  ngOnInit(): void {
   this.message = this.messageService.getMessage().subscribe( msg => {
      if (Object.keys(msg).length !== 0) {
        setTimeout(() => { 
          this.removeClass('letIn') }, 7000
          );
      }
    })

  }
  ngOnDestroy(): void {
    this.message.unsubscribe();
  }
}
