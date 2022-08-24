import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): any[] {
    return [
      {
        ID_genre: '1', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '2', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '3', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '3', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '3', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '4', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '5', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '6', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '7', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '8', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '8', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    },
    {
        ID_genre: '8', ISBN: 'Preety', Name: 'Tiwary',
        Description: 'https://www.gstatic.com/webp/gallery3/1.png'
    }
    ];
  }
}