import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
