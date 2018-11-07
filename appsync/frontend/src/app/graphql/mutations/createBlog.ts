export const CreateBlog = `mutation CreateBlog($blogCategory: String, $blogDescription: String,
  $bloggerEmail: String, $likes: Int, $disLikes: Int) {
  createBlog(blogCategory: $blogCategory, blogDescription: $blogDescription, bloggerEmail: $bloggerEmail,
    likes: $likes, disLikes: $disLikes) {
    id
    blogCategory
    blogDescription
    bloggerEmail
    likes
    disLikes
  }
}`;
