import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  onUpdateTittle(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
