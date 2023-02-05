import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  titulo:string = "";
  imagen:string = "";
  resumen:string = "";
  fecha:Date|null = new Date();
  arrNews: any[] = [];
  
    add(): void{
      this.titulo;
      this.imagen;
      this.resumen;
      this.fecha
    }
  
    save(): void{
      let news = {
        titulo: this.titulo,
        imagen: this.imagen,
        resumen: this.resumen,
        fecha: this.fecha
      }
      this.arrNews.push(news);
      console.log(this.arrNews);
  
      this.titulo = "";
      this.imagen = "";
      this.resumen = "";
      this.fecha = null;
    }

}

    
  
  
