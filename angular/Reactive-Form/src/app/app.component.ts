import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // constructor() {
  // var obj = {
  //   name: "Rounak",
  //   age: 23,
  //   city: "Delhi"
  // }
  
  // var obj2 = {
  //   name: "Het",
  //   age: 26
  // }
  
  // var obj3 = {...obj, ...obj2}
  
  // var obj4 = {
  //   name: "Jay",
  //   age: 26
  // }
  
  // var t = Object.assign({},obj4)
  // // console.log(JSON.stringify(t))

  //   var str:string = "My name is Rounak"
  //   var str2= str.split(" ");
  //   var res = []
  //   for (let index = 0; index < str2.length; index++) {
  //     res.push(str2[index].split("").reverse().join(""))
  //   }
    
  //   console.log(res.join(" "));
  //   let arr = [1,2,3,4,5,6,7,8,9,10]
  //   arr.find((item) => {
  //     if(item>5){
  //       console.log(item)
  //     }
  //   })
  //   arr.filter((item) => {
  //     if(item>5){
  //       console.log(item)
  //     }
  //   })
  // }
  title = 'Reactive-Form';
}
