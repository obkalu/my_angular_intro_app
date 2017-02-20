import { Component } from '@angular/core';
import { Form, FormControl } from '@angular/forms'
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  { 
  name : string; 
  email : string;
  address : address;
  hobbies : string[];
  showHobbbies : boolean;
  posts : Post[];

  constructor(private postsService : PostsService) {
      this.name = 'Obinna A. Kalu'; 
      this.email = 'obkalu@gmail.com';
      this.address = {
                    street: '8501 West Chester Avenue',
                    city: 'Phoenix',
                    state: 'AZ',
                    zipcode: '85020'
      }
      this.hobbies = ['Music', 'Movies', 'Football'];
      this.showHobbbies = false;

      this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
      });
  }

  toggleHobbies() {
    if(this.showHobbbies == true) {
      this.showHobbbies = false;
    } else {
      this.showHobbbies = true;
    }
  }

  addHobby(hobby:FormControl) {
    this.hobbies.push(hobby.value);
    hobby.value = '';
  }

  deleteHobby(i:number) {
    this.hobbies.splice(i, 1);
  }


} // End of UserComponent class definition

interface address {
    street : string;
    city : string;
    state : string;
    zipcode : string;
} // End of address interface definition

interface Post {
  id : number;
  title : string;
  body : string;
}
