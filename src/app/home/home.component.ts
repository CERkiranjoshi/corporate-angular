import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	slides = [{
            type:"template",
            template: 'download',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][3 % 4],
            id: 0
        },{
            type:"template",
            template: 'sub',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][3 % 4],
            id: 1
        },{
            type:"template",
            template: 'browser',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][3 % 4],
            id: 2
        }];
	public myInterval: number = 2000;
	 public noWrapSlides:boolean = false;

	 articleList=[{
            type:"article",
            name: "Corporate article 1",
            image:"../assets/img/1.jpg",
            id: 1
        },{
            type:"article",
            name: "Corporate article 2",
            image:"../assets/img/2.jpg",
            id: 2
        },{
            type:"article",
            name: "Corporate article 3",
            image:"../assets/img/3.jpg",
            id: 3
        },{
            type:"article",
            name: "Corporate article 4",
            image:"../assets/img/4.jpg",
            id: 4
        }];

  constructor() { }



  ngOnInit() {
  }

}
