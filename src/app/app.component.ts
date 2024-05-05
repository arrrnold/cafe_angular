import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@fontsource/roboto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafe_web';
}
