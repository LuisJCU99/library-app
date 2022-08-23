/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //alert("hola?")

  }
  

}
*/
// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GenreService } from './genres.service';
//import { DataServices } from 'src/app/data.services';
import { GENRES } from './mock-genres';
import { Genre } from './genre';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres$!: Observable<Genre[]>;
  selectedId = 0;

  constructor(
    private service: GenreService,
    private route: ActivatedRoute,
    //private dataService: DataServices
  ) {}
  
  //aquí carga lo de la pag principal creo
  ngOnInit() {
    this.genres$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getGenres();
      })
    );
  }
  
}