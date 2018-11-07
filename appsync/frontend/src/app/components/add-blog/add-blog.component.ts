import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Blog} from '../../models/Blog';
import { FlashMessagesService} from 'angular2-flash-messages';
import { BlogService } from '../../services/blog.service';
import {CreateBlog} from './../../graphql/mutations/createBlog';

import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

    public  blog: Blog = {
      id: '',
      blogCategory: '',
      blogDescription : '' ,
      bloggerEmail : '',
      likes: 0,
      disLikes: 0
     };



  @ViewChild('blogForm') form: any;
  constructor(private flashMessage: FlashMessagesService,
              private blogService: BlogService,
              private router: Router) {

              }

  ngOnInit() {

  }

  async onSubmit({value, valid}: {value: Blog, valid: boolean}) {
     if (!valid) {
        // Show error
        this.flashMessage.show('Please fill out the form correctly!!', {
          cssClass: 'alert-danger', timeout: 4000
        });
     } else {
                value.likes = 0;
                value.disLikes = 0;
                const newBlog = <Blog> await this.newBlog(value);

                  this.blogService.blogs.push(newBlog) ;

               this.flashMessage.show('New Blog added!!', {
                cssClass: 'alert-success', timeout: 4000
              });
              this.router.navigate(['/']);
     }
  }

  async newBlog(blog: Blog): Promise<any> {
    console.log('Blog is going to be added!!');
    const result = await API.graphql(graphqlOperation(CreateBlog, blog));
    console.log('Response from GraphQL:', result);
   }

}
