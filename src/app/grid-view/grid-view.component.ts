import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit  {
  
  gridList: any;
  words: any;
  searchResults: { row: number; col: number; };
  word: any;
  searching: boolean;
  
  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.generateGrid();
    this.getWords();
  }

  generateGrid() {
    this.gridList = this.gridService.generateGrid();
  }

  getWords() {
    this.gridService.readFile().subscribe(words => {
      this.words = words;
    });
  }

  start() {
    this.searching = true;
    console.log("=======GRID=========");
    console.log(this.gridList);
    console.log("================");

    // Use this for testing
    // this.gridList = [
    //   ["a", "b", "c", "d", "e"],
    //   ["f", "g", "h", "i", "j"],
    //   ["k", "l", "m", "n", "o"],
    //   ["p", "q", "r", "s", "t"],
    //   ["u", "v", "w", "x", "y"]
    // ]
  
    // Run through all words
    for (let key = 0; key < this.words.length; key++) {
      this.word = this.words[key];
      if (this.gridList.length && this.word) {
        this.searchResults = this.gridService.wordSearch(this.gridList, this.word);
        if (this.searchResults) {
          this.searching = false;
          break;
        }
      }
    }
    this.searching = false;
  }
}
