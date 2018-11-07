export const GetBlogs = `query GetBlogs {
  getBlogs {
      id
      blogCategory
      blogDescription
      bloggerEmail
      likes
      disLikes
  }
}`;
