import { Component, OnInit } from '@angular/core';
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/Blog';
import { appSyncConfig } from '../../graphql/appSyncConfig';
import { SubscribeToNewBlogs } from '../../graphql/subscribtions/subscribeToNewBlogs';
import {GetBlogs} from './../../graphql/queries/getBlogs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
 blogs = [];

 constructor(private blogService: BlogService) {
  Amplify.configure(appSyncConfig);
  this.SubscribeToNewBlogs();
  }

  async ngOnInit() {
    this.blogs = await this.getBlogs();
    console.log('Conent of th');
   }
   async getBlogs() {
    const result = await API.graphql(graphqlOperation(GetBlogs));
    console.log('GraphQL Query is executed');
    return result['data']['getBlogs'];
  }
   async SubscribeToNewBlogs() {
    const subscription: any = await API.graphql(graphqlOperation(SubscribeToNewBlogs));
    subscription.subscribe({next: this.subscriptionRecieved });
    console.log('Subscribed to new blogs');
  }
  subscriptionRecieved = (blogData) => {
      console.log('The new blog recieved is', blogData.value.data.createdBlog);
      const newBlog: any = blogData.value.data.createdBlog;
      console.log('Blogs', this.blogs);
      this.blogs.push(newBlog);
    }
}
