import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modelss',
  templateUrl: './modelss.component.html',
  styleUrls: ['./modelss.component.css']
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    "Access-Control-Allow-Headers": "Content-Type"

  })
};
export class ModelssComponent implements OnInit {

  isVisible = false;

  constructor(private http: HttpClient) { }
  nodes = [{"classcode":"111111","classname":"16历史学01","studnum":12,"bednum":[{"roomcode":"102102102","roomname":"102宿舍","emptybednum":5},{"roomcode":"103103103","roomname":"103宿舍","emptybednum":3},{"roomcode":"105105105","roomname":"105宿舍","emptybednum":4}]},{"classcode":"222222","classname":"16历史学02","studnum":6,"bednum":[{"roomcode":"110110110","roomname":"110宿舍","emptybednum":6}]},{"classcode":"333333","classname":"16经济学01","studnum":12,"bednum":[{"roomcode":"106106106","roomname":"106宿舍","emptybednum":4},{"roomcode":"107107107","roomname":"107宿舍","emptybednum":6},{"roomcode":"109109109","roomname":"109宿舍","emptybednum":2}]},{"classcode":"444444","classname":"16经济学02","studnum":5,"bednum":[{"roomcode":"111111111","roomname":"111宿舍","emptybednum":5}]},{"classcode":"555555","classname":"16政治学01","studnum":8,"bednum":[{"roomcode":"105105105","roomname":"105宿舍","emptybednum":2},{"roomcode":"109109109","roomname":"109宿舍","emptybednum":4},{"roomcode":"111111111","roomname":"111宿舍","emptybednum":1},{"roomcode":"113113113","roomname":"113宿舍","emptybednum":1}]}];
  showModes = [];
  ngOnInit() {
  }



  showModal = () => {

    // this.nodes.forEach(node => {
    this.showModes = [];
    for(var i=0; i < this.nodes.length; i++) {
      var rooms = [];
      var room = [];
      this.nodes[i].bednum.forEach( item => {
        var ro = [];
        ro.push(item.roomname + '(' + item.emptybednum + '个人)');
        room.push(ro.toString());
      });
      rooms['classcode'] = this.nodes[i].classcode;
      rooms['classname'] = this.nodes[i].classname;
      rooms['studnum'] = this.nodes[i].studnum;
      rooms['bednum'] = room.toString();
      this.showModes.push(rooms);
    }
    console.log(this.showModes);
    this.isVisible = true;
    this.http.post('http://localhost:8080',
      {
      title: 'foo',
      body: 'ddd'
    }, httpOptions ).subscribe(res => {
      console.log(res);
    });
  }

  handleOk = (e) => {
    this.isVisible = false;
    console.log(this.showModes);
    console.log(this.nodes);
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

}
