import { HttpService } from './../../services/http.service';
import { Game, APIResponse } from './../../model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string;
  public games!: Array<Game>;
  private routeSub!: Subscription;
  private gameSub!: Subscription;
  constructor(private httpService : HttpService, private activatedRoute: ActivatedRoute) { }



  imaget:any = {I1:"assets/photo/fifa.jpg",I2:"assets/photo/xbox.svg"}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params)=>{
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      }else{
        this.searchGames('metacrit')
      }
    });
  }
  // searchGames(sort: string, search: string):void
  // {
  //   this.gameSub = this.httpService
  //   .getGameList(sort, search)
  //   .subscribe((gameList: APIResponse<Game>) => {
  //     this.games = gameList.results;
  //     console.log(gameList);
  //   });
  // }

  searchGames(sort:string , search?: string): void{
  this.gameSub =this.httpService
  .getGameList(sort, search).subscribe((gameList: APIResponse<Game>)=>{
    this.games = gameList.results;
    console.log(gameList);

  })
  }
  // searchGames(sort: string, search?: string): void {
  //   this.gameSub = this.httpService
  //     .getGameList(sort, search)
  //     .subscribe((gameList: APIResponse<Game>) => {
  //       this.games = gameList.results;
  //       console.log(gameList);
  //     });
  // }
}
