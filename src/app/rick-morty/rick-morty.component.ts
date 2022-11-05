import { Component, OnInit } from '@angular/core';
import { Result } from '../core/models/character.model';
import { RickmortyService } from '../core/services/rickmorty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent implements OnInit {

  characters: Result[] = [];
  previous: any;
  next: any;

  constructor(private rickMortyService: RickmortyService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(direction: string = '') {
    let observable = this.rickMortyService.getCharacters();
    if (direction === 'next' && this.next) {
      observable = this.rickMortyService.getCharacterPage(this.next);
    }

    if (direction === 'prev' && this.previous) {
      observable = this.rickMortyService.getCharacterPage(this.previous);
    }

    observable.subscribe({
      next: (response) => {
        this.characters = response.results;
        this.previous = response.info.prev;
        this.next = response.info.next;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

}
