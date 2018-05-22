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
      halfChecked: false,
      children: [
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '济南市',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '市中区',
              children: [
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '大观园街道',
                  children: [
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '纬一路',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '睦和苑',
                    },
                    {
                      checked: false,
                      hasChildren: false,
                      halfChecked: false,
                      name: '纬五路',
                    },
                    {
                      checked: false,
                      hasChildren: true,
                      halfChecked: false,
                      name: '经二路',
                    },
                    {
                      checked: false,
                      hasChildren: true,
                      halfChecked: false,
                      name: '万紫巷',
                    },
                  ]
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
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
                  hasChildren: true,
                  halfChecked: false,
                  name: '舜耕街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '舜玉路街道',
                },
              ]
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '历山区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '历下区',
              children: [
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '趵突泉街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '大明湖街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '甸柳新村街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '东关街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '解放路街道',
                },
                {
                  checked: false,
                  hasChildren: true,
                  halfChecked: false,
                  name: '泉城路街道',
                },
              ]
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '高新区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '青岛',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '四方区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '崂山区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '李沧区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '城阳区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '临沂',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '河东区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '罗庄区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '兰山区',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '北城新区',
            },
          ]
        },
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '日照',
        },
      ]
    },
    {
      checked: false,
      name: '北京',
      hasChildren: true,
      halfChecked: false,
      children: [
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '东城',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '东十条',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '东单',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '王府井',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '东四',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '西城',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '西十条',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '西单',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '北海',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '西四',
            },
          ]
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '朝阳',
          children: [
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '大悦城',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '大屯',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '望京',
            },
            {
              checked: false,
              hasChildren: true,
              halfChecked: false,
              name: '北苑',
            },
          ]
        },
        {
          checked: false,
          hasChildren: false,
          halfChecked: false,
          name: '海淀',
        },
      ]
    },
    {
      checked: false,
      name: '江苏',
      hasChildren: true,
      halfChecked: false,
      children: [
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '南京',
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '徐州',
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '苏州',
        },
        {
          checked: false,
          hasChildren: true,
          halfChecked: false,
          name: '无锡',
        },
      ]
    },
    {
      checked: false,
      name: '上海',
      hasChildren: false,
      halfChecked: false,
    }
  ];

  options = {
    allowDrag: true,
    getChildren: (node: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
          { name: 'async data1' },
          { name: 'async data2', hasChildren: true }
        ]), 1000);
      });
    }
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
                    county.children.forEach(town => {
                      if (town.checked === true && town.halfChecked === false ) {
                        console.log(town.name + '街道全选了');
                      } else if (town.checked === false && town.halfChecked === false ) {
                        console.log(town.name + '街道没有选');
                      } else if (town.checked === false && town.halfChecked === true ) {
                        console.log(town.name + '街道选择了一部分');
                        town.children.forEach(community => {
                          if (community.checked === true && community.halfChecked === false ) {
                            console.log(community.name + '社区全选了');
                          } else if (community.checked === false && community.halfChecked === false ) {
                            console.log(community.name + '社区没有选');
                          } else if (community.checked === false && community.halfChecked === true ) {
                            console.log(community.name + '社区选择了一部分');
                          }
                        });
                      }
                    });
                  }
                });
            }
        });
      }
    });
  }

  onEvent(ev: any) {
    console.log('onEvent', ev);
  }
}
