// Target
const commentSection = document.querySelector('.comment-section');
const commentBtn = document.querySelector('#comment-btn')


// Send Comment to Blog Post
const commentHandler = async (id) => {
  // event.preventDefault();

  const comment_content = document.querySelector('#comment').value.trim();
  // const comment_post_date = '2022-03-30'
  const blog_id = id;

  // Check all form variables
  if (comment_content) {
    try {
      const response = await fetch('/comment', {
        method: 'POST',
        body: JSON.stringify({
          comment_content,
          // comment_post_date,
          // user_id,
          blog_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const loggedIn = await response.json();

      if (!loggedIn) {
        return document.location.replace('/login');
      } else {
        document.location.reload();
      }

    } catch (err) {
      console.log(err);
    }
  }
}

if (commentBtn) {
  const blog_id = commentBtn.dataset.id;
  commentBtn.addEventListener('click', () => {
    commentHandler(blog_id);
    // setTimeout(() => location.reload(), 2500);
  });
}