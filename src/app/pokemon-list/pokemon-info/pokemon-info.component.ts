import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon : any[] = [];
  @Input() capured: string;
  name : string = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,

  ) {
   }

  ngOnInit(): void {
    this.name = String(this.route.snapshot.paramMap.get('name'))
    this.dataService.getMoreData(this.name).subscribe((response: any) =>{
      this.pokemon.push(response);
      console.log(this.pokemon);
    });
  }

  getCapture() {
    return localStorage.getItem(this.name)
  }

  setCapture() {
    localStorage.setItem(this.name, 'Yes')
    
    console.log(localStorage.getItem(this.name))
    return localStorage.getItem(this.name);
  }

}
