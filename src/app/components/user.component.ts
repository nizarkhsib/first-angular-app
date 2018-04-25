import { Component } from '@angular/core';

@Component({
  selector: 'user-selector',
  templateUrl: './user.component.html'

})
export class UserComponent {
 
  name : string;
  email: string;
  showInfo: boolean;
  hobbies: string[];
  

  constructor(){
    
      this.name='Nizar';
      this.email='nizar.khsib@esprit.tn';
      this.hobbies=['Music','Sports','TV'];
  }
  
  deleteHobby(index){
    console.log('in delete');
    this.hobbies.splice(index,1);
  }
  
  addHobby(h){
    this.hobbies.push(h);
  }

 toggleInfos(){
    if(this.showInfo==true){
      this.showInfo=false;
    }else{
      this.showInfo=true;
    }
  }
 

}
