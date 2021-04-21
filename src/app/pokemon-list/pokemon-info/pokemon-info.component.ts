import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon : any[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,

  ) { }

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'))
    this.dataService.getMoreData(name).subscribe((response: any) =>{
      this.pokemon.push(response);
      console.log(this.pokemon);
    });
  }

  

}
