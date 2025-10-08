import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
