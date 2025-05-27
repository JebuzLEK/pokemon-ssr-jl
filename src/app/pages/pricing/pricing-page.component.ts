import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export default class PricingPageComponent implements OnInit {

  private title = inject( Title );
  private meta = inject( Meta );
  private platform = inject( PLATFORM_ID );

  ngOnInit(): void {
    // if ( isPlatformBrowser( this.platform ) ){
    //   console.log( 'browser' );
    //   document.title = 'Pricing page';
    // }
    this.title.setTitle( 'Pricing page' );
    this.meta.updateTag({ name: 'description', content: 'Este es mi Pricing page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Jesús,Lazo,Angular,PRO' });
  }
}
