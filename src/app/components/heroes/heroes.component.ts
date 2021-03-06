import {Component, OnInit} from '@angular/core';

import {Hero} from '../../classes/hero';
import {HeroService} from '../../services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  public heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
