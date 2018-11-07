export const SubscribeToNewBlogs = `subscription SubscribeToNewBlogs{
  createdBlog {
    id
    blogCategory
    blogDescription
    bloggerEmail
    likes
    disLikes
  }
}`;
