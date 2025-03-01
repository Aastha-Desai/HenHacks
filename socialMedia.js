document.addEventListener('DOMContentLoaded', () => {
    const addPostButton = document.getElementById('addPostButton');
    const postForm = document.getElementById('postForm');
    const newPostForm = document.getElementById('newPostForm');
    const wrapper = document.querySelector('.wrapper'); // Ensure this exists!
  
    // Toggle form visibility
    addPostButton.addEventListener('click', () => {
      postForm.style.display = postForm.style.display === 'none' ? 'block' : 'none';
    });
  
    // Handle form submission
    newPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const thoughts = document.getElementById('thoughts').value;
      const imageFile = document.getElementById('imageUpload').files[0];
  
      if (!thoughts && !imageFile) {
        alert('Please add text or an image.');
        return;
      }
  
      const createPost = (imageUrl = null) => {
        const postHTML = `
          <div class="testimonial-quote group">
            <img src="pfp.jpg" alt="Profile Picture" class="profile-picture">
            <div class="quote-container">
              <blockquote>
                <p>${thoughts || ''}</p>
                ${imageUrl ? `<img src="${imageUrl}" alt="Uploaded" style="width: 120px; height: 120px;">` : ''}
              </blockquote>
              <!-- No name or user info for new posts -->
            </div>
          </div>
          <hr style="margin: 60px auto; opacity: .5;">
        `;
        wrapper.insertAdjacentHTML('afterbegin', postHTML); // Insert at TOP
      };
  
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => createPost(e.target.result);
        reader.readAsDataURL(imageFile);
      } else {
        createPost();
      }
  
      postForm.style.display = 'none';
      newPostForm.reset();
    });
  });