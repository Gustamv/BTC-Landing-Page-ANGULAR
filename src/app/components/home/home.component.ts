import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuoteComponent } from '../quote/quote.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    QuoteComponent,
    CardsComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
