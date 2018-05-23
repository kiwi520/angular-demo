import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent implements OnInit {
  nodes = [
    {
      checked: false,
      name: '山东省',
      hasChildren: true,
      level: 1,
      halfChecked: false,
      children: [
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          level: 2,
          name: '济南市',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '市中区',
              level: 3,
              children: [
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '大观园街道',
                  level: 4,
                  children: [
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      level: 5,
                      name: '纬一路',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      level: 5,
                      name: '睦和苑',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      level: 5,
                      name: '纬五路',
                    },
                    {
                      checked: false,
                      hasChildren: true,
                      halfChecked: false,
                      level: 5,
                      name: '经二路',
                    },
                    {
                      checked: false,
                      hasChildren: true,
                      halfChecked: false,
                      level: 5,
                      name: '万紫巷',
                    },
                  ]
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  level: 4,
                  name: '六里山街道',
                  children: [
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '六里山路',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '玉函南',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '六里山南',
                    },
                    {
                      checked: false,
                      hasChildren: true,
                      halfChecked: false,
                      name: '铁路玉函',
                    },
                  ]
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  level: 4,
                  name: '舜耕街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  level: 4,
                  name: '舜玉路街道',
                },
              ]
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '历山区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '历下区',
              level: 3,
              children: [
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '趵突泉街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '大明湖街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '甸柳新村街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '东关街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '解放路街道',
                },
                {
                  checked: false,
                  hasChildren: false,
                  children: [],
                  halfChecked: false,
                  name: '泉城路街道',
                },
              ]
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '高新区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '青岛',
          level: 2,
          children: [
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '四方区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '崂山区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '李沧区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '城阳区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '临沂',
          level: 2,
          children: [
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '河东区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '罗庄区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '兰山区',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '北城新区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: false,
          children: [],
          halfChecked: false,
          level: 2,
          name: '日照',
        },
      ]
    },
    {
      checked: false,
      name: '北京',
      hasChildren: true,
      halfChecked: false,
      level: 1,
      children: [
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '东城',
          level: 2,
          children: [
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '东十条',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '东单',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '王府井',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '东四',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '西城',
          level: 2,
          children: [
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '西十条',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '西单',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '北海',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '西四',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '朝阳',
          level: 2,
          children: [
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '大悦城',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '大屯',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '望京',
            },
            {
              checked: false,
              hasChildren: false,
              children: [],
              halfChecked: false,
              level: 3,
              name: '北苑',
            },
          ]
        },
        {
          checked: false,
          hasChildren: false,
          children: [],
          halfChecked: false,
          level: 2,
          name: '海淀',
        },
      ]
    },
    {
      checked: false,
      name: '江苏',
      hasChildren: true,
      halfChecked: false,
      level: 1,
      children: [
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '南京',
          level: 2,
          children: [],
        },
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '徐州',
          level: 2,
          children: [],
        },
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '苏州',
          level: 2,
          children: [],
        },
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '无锡',
          level: 2,
          children: [],
        },
      ]
    },
    {
      checked: false,
      name: '上海',
      children: [],
      hasChildren: false,
      halfChecked: false,
      level: 1,
    }
  ];
  roomData = [];
  options = {
    allowDrag: true,
    // getChildren: (node: any) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve([
    //       { name: 'async data1' },
    //       { name: 'async data2', hasChildren: true }
    //     ]), 1000);
    //   });
    // }
  };
  constructor() { }

  ngOnInit() {
  }

  onTree() {
    console.log(this.nodes);
    this.nodes.forEach( province => {
      if ( province.checked === true && province.halfChecked === false ) {
        console.log(province.name + '全选了');
      } else if ( province.checked === false && province.halfChecked === false ) {
        console.log(province.name + '没有选');
      } else if ( province.checked === false && province.halfChecked === true ) {
        console.log(province.name + '省份选择了一部分');
        if ( province.hasOwnProperty('children') === true ) {
          province.children.forEach(city => {
            if (city.checked === true && city.halfChecked === false ) {
              console.log(city.name + '城市全选了');
            } else if (city.checked === false && city.halfChecked === false ) {
              console.log(city.name + '城市没有选');
            } else if (city.checked === false && city.halfChecked === true ) {
              console.log(city.name + '城市选择了一部分');
              city.children.forEach(county => {
                if (county.checked === true && county.halfChecked === false ) {
                  console.log(county.name + '区全选了');
                } else if (county.checked === false && county.halfChecked === false ) {
                  console.log(county.name + '区没有选');
                } else if (county.checked === false && county.halfChecked === true ) {
                  console.log(county.name + '区选择了一部分');
                  // county.children.forEach(town => {
                  //   if (town.checked === true && town.halfChecked === false ) {
                  //     console.log(town.name + '街道全选了');
                  //   } else if (town.checked === false && town.halfChecked === false ) {
                  //     console.log(town.name + '街道没有选');
                  //   } else if (town.checked === false && town.halfChecked === true ) {
                  //     console.log(town.name + '街道选择了一部分');
                  //     town.children.forEach(community => {
                  //       if (community.checked === true && community.halfChecked === false ) {
                  //         console.log(community.name + '社区全选了');
                  //       } else if (community.checked === false && community.halfChecked === false ) {
                  //         console.log(community.name + '社区没有选');
                  //       } else if (community.checked === false && community.halfChecked === true ) {
                  //         console.log(community.name + '社区选择了一部分');
                  //       }
                  //     });
                  //   }
                  // });
                }
              });
            }
          });
        }

      }
    });

    var province = [];
    for (var i = 0 ; i < this.nodes.length; i ++ ) {
      console.log('i' + i);
      if ( this.nodes[i].checked === true && this.nodes[i].halfChecked === false ) {
        console.log(this.nodes[i].name + '全选了');
        province[i] = this.nodes[i].name;
      }
      if ( this.nodes[i].checked === false && this.nodes[i].halfChecked === false ) {
        console.log(this.nodes[i].name + '没有选');
      }
      if ( this.nodes[i].checked === false && this.nodes[i].halfChecked === true ) {
        console.log(this.nodes[i].name + '省份选择了一部分');

        if ( this.nodes[i].hasOwnProperty('children') === true ) {
          var city = [];
          for (var j = 0; j < this.nodes[i].children.length; j++) {
            console.log('j个数' + this.nodes[i].children.length);
            console.log(i + j );
            if (this.nodes[i].children[j].checked === true && this.nodes[i].children[j].halfChecked === false ) {
              console.log(this.nodes[i].children[j].name + '城市全选了');
              city[j] = this.nodes[i].children[j].name;
            }
            if (this.nodes[i].children[j].checked === false && this.nodes[i].children[j].halfChecked === false ) {
              console.log(this.nodes[i].children[j].name + '城市没有选');
            }
            if (this.nodes[i].children[j].checked === false && this.nodes[i].children[j].halfChecked === true ) {
              console.log(this.nodes[i].children[j].name + '城市选择了一部分');
              var county = [];
              for (var m = 0; m < this.nodes[i].children[j].children.length; m++) {
                console.log('m个数' + this.nodes[i].children[j].children.length);
                console.log(i + j + m);
                if (this.nodes[i].children[j].children[m].checked === true && this.nodes[i].children[j].children[m].halfChecked === false) {
                  console.log(this.nodes[i].children[j].children[m].name + '区全选了');
                  county[m] = this.nodes[i].children[j].children[m].name;
                }
                if (this.nodes[i].children[j].children[m].checked === false && this.nodes[i].children[j].children[m].halfChecked === false) {
                  console.log(this.nodes[i].children[j].children[m].name + '区没有选');
                }
                if (this.nodes[i].children[j].children[m].checked === false && this.nodes[i].children[j].children[m].halfChecked === true ) {
                  console.log(this.nodes[i].children[j].children[m].name + '区选择了一部分');
                  // this.nodes[i].children[j].children[m].children.forEach(town => {
                  var town = [];
                    for (var n = 0; n < this.nodes[i].children[j].children[m].children.length; n++) {
                      console.log('n个数' + this.nodes[i].children[j].children[m].children.length);
                      console.log(i + j + m + n);
                    if (this.nodes[i].children[j].children[m].children[n].checked === true && this.nodes[i].children[j].children[m].children[n].halfChecked === false ) {
                      console.log(this.nodes[i].children[j].children[m].children[n].name + '街道全选了');
                      town[n] = this.nodes[i].children[j].children[m].children[n].name;
                    }
                    if (this.nodes[i].children[j].children[m].children[n].checked === false && this.nodes[i].children[j].children[m].children[n].halfChecked === false ) {
                      console.log(this.nodes[i].children[j].children[m].children[n].name + '街道没有选');
                    }
                    if (this.nodes[i].children[j].children[m].children[n].checked === false && this.nodes[i].children[j].children[m].children[n].halfChecked === true ) {
                      console.log(this.nodes[i].children[j].children[m].children[n].name + '街道选择了一部分');
                      var community = [];
                        for (var x = 0; x < this.nodes[i].children[j].children[m].children[n].children.length; x++) {
                          console.log('x个数' + this.nodes[i].children[j].children[m].children[n].children.length);
                          console.log(i + j + m + x);
                        if (this.nodes[i].children[j].children[m].children[n].children[x].checked === true && this.nodes[i].children[j].children[m].children[n].children[x].halfChecked === false ) {
                          console.log(this.nodes[i].children[j].children[m].children[n].children[x].name + '社区全选了');
                          community[x] = this.nodes[i].children[j].children[m].children[n].children[x].name;

                        }
                        if (this.nodes[i].children[j].children[m].children[n].children[x].checked === false && this.nodes[i].children[j].children[m].children[n].children[x].halfChecked === false ) {
                          console.log(this.nodes[i].children[j].children[m].children[n].children[x].name + '社区没有选');
                        }
                        if (this.nodes[i].children[j].children[m].children[n].children[x].checked === false && this.nodes[i].children[j].children[m].children[n].children[x].halfChecked === true ) {
                          console.log(this.nodes[i].children[j].children[m].children[n].children[x].name + '社区选择了一部分');
                        }
                      }

                      this.roomData['community'] = community;
                    }
                  }
                  this.roomData['town'] = town;
                }
              }
              this.roomData['county'] = county;
          }
        }
        this.roomData['city'] = city;
      }
    }
  }
  this.roomData['province'] = province;

  console.log('this.roomData');
  console.log(this.roomData);


  }


  treeNodes(tree: any , levels: string ）{
    if(tree ) {
      var trees = [];
      for (var i =0; i < tree.length; i++ ) {
        if ( tree[i].checked === true && tree[i].halfChecked === false && tree[i].level == levels) {
          console.log(tree.name + '全选了');
          trees.push(tree[i].name + tree[i].level);
        }
      }
      return trees;
    }
  }



  onEvent(ev: any) {
    console.log('onEvent', ev);
  }
}
