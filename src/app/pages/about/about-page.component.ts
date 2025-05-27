import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export default class AboutPageComponent implements OnInit {

  private title = inject( Title );
  private meta = inject( Meta );

  ngOnInit(): void {
    this.title.setTitle( 'About page' );
    this.meta.updateTag({ name: 'description', content: 'Este es mi about page' });
    this.meta.updateTag({ name: 'og:title', content: 'About page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Jesús,Lazo,Angular,PRO' });
  }

}
