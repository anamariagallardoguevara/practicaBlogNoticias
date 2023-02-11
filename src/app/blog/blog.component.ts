import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit{
  titulo: string = '';
  imagen: string = '';
  resumen: string = '';
  fecha: string = '';
  arrNews: Noticia[] = [
    {
      titulo: 'Monemvasía, el encanto de la mediterraneidad en el Peloponeso',
      imagen: 'https://imagenes.elpais.com/resizer/b_x9o1Lqqa5GgOffPrHZchItmWw=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2GG5JNE6DFDTVJYOQTXT5AM6IQ.jpg',
      resumen: 'Esta ciudad griega amurallada, unida a tierra firme por un puente de 200 metros, huele a olivos, a dátiles, a romero y a mar. Los vehículos a motor están prohibidos y uno de los mayores placeres aquí es sentarse en la terraza de algún café o restaurante a la hora adecuada mirando al Egeo.',
      fecha: '13/01/2023',
    },
    {
      titulo: 'Olimpia: una visita a las ruinas más atléticas de Grecia',
      imagen: 'https://imagenes.elpais.com/resizer/_SmyCSqJpxXaP9xoSOTzmLqLgI0=/1200x0/filters:focal(2145x1025:2155x1035)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KKNAQEKKKBHW3OYHR2MMIYZAEI.jpg',
      resumen: 'Un evocador recorrido por la ciudad dedicada al dios Zeus en la que durante más de mil años se celebró la competición más famosa. Del yacimiento al museo de la Historia de los Juegos Olímpicos de la Antigüedad con final en el museo Arqueológico.',
      fecha: '09/01/2023',
    }
  ];

  newsList: string = '';
  contador: number = 1;

  ngOnInit(){
    this.printNews();
  }

  save(): void {
    let news: Noticia = {
      id: this.contador,
      titulo: this.titulo,
      imagen: this.imagen,
      resumen: this.resumen,
      fecha: this.fecha,
    };

    const todoCorrecto = this.validateNews();

    if (todoCorrecto) {
      this.arrNews.push(news);
      this.contador++;
      this.printNews();
      this.titulo = '';
      this.imagen = '';
      this.resumen = '';
      this.fecha = '';
    } else {
      alert(
        'Para poder mostrar la noticia debe rellenar todos los campos. Por favor, intentelo de nuevo'
      );
    }
  }

  validateNews(): boolean {
    if (this.titulo && this.imagen && this.resumen && this.fecha) {
      return true;
    } else {
      return false;
    }
  }

  printNews(): void {
    this.newsList = '';
    this.arrNews.forEach((news) => {
      this.newsList += `<li class="li-news">
                            <article class="article-news">
                              <div class="imege-news">
                                <img src= ${news.imagen} class="image">
                              </div>
                              <div class="content-news">
                                  <h3 class="title-content-news">${news.titulo}</h3>
                                  <p class="text-content-news">${news.resumen}</p>
                                  <p class="date">${news.fecha}</p>
                              </div>    
                            </article>
                          </li>`;
    });
  }
}
