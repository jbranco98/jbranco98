// Add functionality to handle likes and comments
document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach((post) => {
        // Handle likes
        const likeBtn = post.querySelector(".like-btn");
        const likeCount = post.querySelector(".like-count");

        likeBtn.addEventListener("click", () => {
            const currentLikes = parseInt(likeCount.textContent);
            likeCount.textContent = currentLikes + 1;
        });

        // Handle comments
        const commentForm = post.querySelector(".comment-form");
        const commentInput = post.querySelector(".comment-input");
        const commentsList = post.querySelector(".comments-list");

        commentForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission

            const commentText = commentInput.value.trim();
            if (commentText !== "") {
                const commentItem = document.createElement("li");
                commentItem.textContent = commentText;
                commentsList.appendChild(commentItem);
                commentInput.value = ""; // Clear input field
            }
        });
    });
});
