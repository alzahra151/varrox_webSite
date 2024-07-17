import { Component } from '@angular/core';
import { WelcomeComponent } from "../welcome/welcome.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
