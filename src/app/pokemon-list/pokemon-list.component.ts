import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons : any[] = [];
  searchText;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach(result => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqueResponse: any) =>{
          this.pokemons.push(uniqueResponse);
          console.log(this.pokemons);
        });
      }); 
    });
  }

}
