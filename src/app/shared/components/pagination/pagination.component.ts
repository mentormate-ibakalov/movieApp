import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {


  @Output() returnPage = new EventEmitter<number>();
  @Input() totalPages: number;
  @Input() currentPage: number;


  returnPageFunc(type: string) {
    if (type == 'next' && this.totalPages > this.currentPage) this.currentPage++;
    else if (type == 'previous' && this.currentPage > 1) this.currentPage--;
    this.returnPage.emit(this.currentPage);
  }
}
