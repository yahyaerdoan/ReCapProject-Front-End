import { Component } from '@angular/core';

//app.component.ts, app.component.html'in datasını yönettiğimiz yerdir.

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'ReCapProject';
  user : string = 'Merhaba Yahya';
  
}
