import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private gridService: GridService ) { }

  ngOnInit() {
    this.gridService.readFile();
  }
}
