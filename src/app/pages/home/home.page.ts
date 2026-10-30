import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  selector: 'app-home',
  styleUrl: './home.page.css',
  templateUrl: './home.page.html',
})
export class HomePage {}
