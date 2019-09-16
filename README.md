# Shoprite Test

1. Go to project folder and install dependencies:

```bash
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
ng serve

- Open your broswer and go to: http://localhost:4200/
- Click on "Search" button and see results if a word from a file is found
- Click on "Reload" button to re-generate the GRID - repeat prev step
```

For manual testing: go to: ```app/components/grid-view.component.ts: start()``` change the ```gridList``` value and search for a word that is in the ```gridList``` 
```
    // Example: 
    // this.gridList = [
    //   ["a", "b", "c", "d", "e"],
    //   ["f", "g", "h", "i", "j"],
    //   ["k", "l", "m", "n", "o"],
    //   ["p", "q", "r", "s", "t"],
    //   ["u", "v", "w", "x", "y"]
    // ]
    
    this.gridService.wordSearch(this.gridList, "ihj"); // pass in word e.g abc, xy etc..
```
