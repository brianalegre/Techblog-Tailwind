// Target
const commentSection = document.querySelector('.comment-section');
const commentBtn = document.querySelector('#comment-btn')

// Date
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');
// var yyyy = today.getFullYear();
// var today = yyyy + '/' + mm + '/' + dd;

// Send Comment to Blog Post
const commentHandler = async (id) => {
  // event.preventDefault();

  const comment_content = document.querySelector('#comment').value.trim();
  const comment_post_date = '2022-03-30'
  const blog_id = id;

  // Check all form variables
  if (comment_content) {
    try {
      const response = await fetch('/comment', {
        method: 'POST',
        body: JSON.stringify({
          comment_content,
          comment_post_date,
          // user_id,
          blog_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const waiting = response.json();

      if (!waiting) {
        return 'POST FAILED'
      }
    } catch (err) {
      console.log(err);
    }
  }
}

// commentSection.addEventListener('submit', signupFormHandler);


if (commentBtn) {
  const blog_id = commentBtn.dataset.id;
  commentBtn.addEventListener('click', () => {
    commentHandler(blog_id);
    // setTimeout(() => location.reload(), 2500);
  });
}