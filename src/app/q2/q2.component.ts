import { Component, OnInit } from '@angular/core';
declare var tableau: any;
@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  tableauViz: any;
  constructor() { }

  ngOnInit(): void {
    var placeholderDiv = document.getElementById('tableauViz');
    var url = 'https://public.tableau.com/views/WorldsSmile/Variations?:language=en-US&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      width: '1200px',
      height: '727px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);   
  }

}