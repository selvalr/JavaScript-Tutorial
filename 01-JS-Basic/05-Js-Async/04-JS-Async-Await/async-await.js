async function getData() {
    let blogPost = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Blog Post");
      }, 2000);
    });
  
    let blogComment = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Comment For Blog");
      }, 5000);
    });
  
    console.log("Fetching Post....");
    let post = await blogPost;
    console.log("Post : ", post);
    console.log("Fetching Comment....");
    let comment = await blogComment;
    console.log("Comment : ", comment);
    return [post, comment];
  }
  
  console.log("Welcome to Blog Post");
  let data = getData();
  console.log(data);
  
  data
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });