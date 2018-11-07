import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { appSyncConfig } from '../graphql/appSyncConfig';
import {GetBlogs} from '../graphql/queries/getBlogs';

@Injectable({
  providedIn: 'root'

})
export class BlogService {

 blogs: Blog[] = [];
 blog: Observable<Blog>;

constructor() {
 // Amplify.configure(appSyncConfig);
}



}
