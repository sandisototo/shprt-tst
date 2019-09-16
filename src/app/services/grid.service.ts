import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  // Rows and columns in given grid 
  private R: number = 5
  private C: number = 5;

  // For searching in all 5 direction  
  private x = [-1, -1, -1, 0, 0];
  private y = [-1, 0, 1, -1, 1];

  private GRID_ELEMENT: string [][];

  constructor(private http: HttpClient) { }

  // This function searches in all 5-direction from point  
  // (row, col) in grid[][]  
  search2D(grid, row, col, word) {
    // If first character of word doesn't match with  
    // given starting point in grid.  
    if (grid[row][col] != word[0])
      return false;

    let len = word.length;

    // Search word in all 5 directions 
    // starting from (row,col) 
    for (let dir = 0; dir < 5; dir++) {
      // Initialize starting point 
      // for current direction  
      let k, rd = row + this.x[dir], cd = col + this.y[dir];

      // First character is already checked,  
      //  match remaining characters 
      for (k = 1; k < len; k++) {
        // If out of bound break  
        if (rd >= this.R || rd < 0 || cd >= this.C || cd < 0)
          break;

        // If not matched, break  
        if (grid[rd][cd] != word[k])
          break;

        // Moving in particular direction  
        rd += this.x[dir];
        cd += this.y[dir];
      }

      // If all character matched, then value of must  
      // be equal to length of word 
      if (k == len)
        return true;
    }
    return false;
  }

  // Random Letter generator
  generateRandomLetter() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  // Get grid elements ---> row and columns
  getGridElement() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let randomLetter = this.generateRandomLetter();
        this.GRID_ELEMENT[i][j] = randomLetter;
      }
    }

    return this.GRID_ELEMENT;
  }

  // Generate a grid
  generateGrid() {
    const GRID = [];

    for (let x = 0; x < 5; x++) {
      let element = this.getGridElement();
      GRID.push(element);
    }

    return GRID;
  }

  // Searches given word in a given 
  // matrix in all 5 directions 
  wordSearch(grid, word) {
    // Consider every point as starting  
    // point and search given word  
    for (let row = 0; row < this.R; row++) {
      for (let col = 0; col < this.C; col++) {
        if (this.search2D(grid, row, col, word)) {
          console.log(word + " found at " + row + ", " + col);
        }
      }
    }
  }

  readFile() {
    this.http.get('assets/words.txt', { responseType: 'text' }).subscribe(data => {
      console.log(data);
  })
    // return fs.readFileSync("assets/words.txt", "utf-8").split("\n");
  }

  // start() {
  //   // Read file and split it into an array of words
  //   let words = this.readFile();

  //   let grid = this.generateGrid();

  //   console.log("=======GRID=========");
  //   console.log(grid);
  //   console.log("================");
  //   // Run through all words
  //   for (let key = 0; key < words.length; key++) {
  //     let word = words[key];
  //     if (grid.length && word) {
  //       console.log("Search for:::", word);
  //       this.wordSearch(grid, word);
  //       console.log("================");
  //     }
  //   }
  // }
}
