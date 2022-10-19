import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is my title now';

  constructor(
    private messageService : MessageService,  //required by child components
  ) {
  }
}
