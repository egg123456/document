# angular_cli

### feature
1. Angular CLI 可以快速搭建框架，创建module，service，class，directive等；

2. 具有webpack的功能，代码分割（code splitting），按需加载；

3. 代码打包压缩；

4. 模块测试，端到端测试；

5. 热部署，有改动立即重新编译，不用刷新浏览器；而且速度很快

6. 有开发环境，测试环境，生产环境的配置，不用自己操心； 

7. sass，less的预编译Angular CLI都会自动识别后缀来编译；

8. typescript的配置，Angular CLI在创建应用时都可以自己配置；

9. 在创建好的工程也可以做一些个性化的配置，webpack的具体配置还不支持，未来可能会增加；

10. Angular CLI创建的工程结构是最佳实践，生产可用；

### install
$ npm install -g angular-cli

### command
command|abbr|description
---|---|---
ng new projiect-name|....|新建项目
ng generate class my-new-class|ng g cl my-new-class|新建 class（默认更新app.module.ts）
ng generate component my-new-component|ng g c my-new-component|新建组件（默认更新app.module.ts）
ng generate directive my-new-directive|ng g d my-new-directive|新建指令（默认更新app.module.ts）
ng generate enum my-new-enum|ng g e my-new-enum|新建枚举（默认更新app.module.ts）
ng generate module my-new-module|ng g m my-new-module|新建模块（默认更新app.module.ts）
ng generate pipe my-new-pipe|ng g p my-new-pipe|新建管道（默认更新app.module.ts）
ng generate service my-new-service|ng g s my-new-service|新建服务(ng generate service hero --module=app)
ng serve -open|ng serve -o|启动项目
ng serve --port 4201|...|修改启动端口

### theory
1. 模块包含组件、服务、等app.module.ts根模块更是包含模块
```js
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
2. 组件包含html、css文件，定义数据变量
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```
3. 服务用于获取数据和提供数据
```js
<!--service  -->
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moc-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
```
```js
<!--component  -->
//注入服务
constructor(private heroService: HeroService) { }
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
//在声明周期函数中调用
ngOnInit() {
  this.getHeroes();
}
```
```js
<!--moc-heroes  -->
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```
4. 类定义一个类
```js
<!--class  -->
export class Hero {
    id:number;
    name:string;
}
```
5. 路由模块定义路径几所对应得component
```js
<!--router  -->
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
```
```js
<!--组件中使用  -->
<h1>{{title}}</h1>
<nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
```
6. http模块获取数据、通常放在service中使用




