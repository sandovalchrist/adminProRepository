import { Component, OnInit } from '@angular/core';

// Recuperar rutas
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from "rxjs/operators";

// Title / MetaTags
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(  private router: Router,
                private title: Title,
                private meta: Meta
            ) {
    this.getDataRoute()
    .subscribe((dataDevueltaPipe) => {
      // console.log('Event', dataDevueltaPipe.titulo);
      this.titulo = dataDevueltaPipe.titulo;

      // Title de index.html
      this.title.setTitle(this.titulo);

      // Meta de index.html
      const metaTags: MetaDefinition = {
        name: 'Description',
        content: this.titulo
      };


      this.meta.updateTag(metaTags);
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    // Retorna Observable
    return this.router.events
    .pipe(
      filter((evento, index) => {
        // Los demas eventos del router nose controlan
        if (evento instanceof ActivationEnd ) {
          return true;
        }
      }),
      filter((evento: ActivationEnd , index) => {
        // Los demas eventos del router nose controlan
        if (evento.snapshot.firstChild === null) {
          return true;
        }
      }),
      map((evento: ActivationEnd) => {
         return evento.snapshot.data;
      })
    );
  }

}
