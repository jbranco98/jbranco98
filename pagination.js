document.addEventListener("DOMContentLoaded", () => {
    const postsPerPage = 10;
    const allPosts = [
        { title: "Understanding x86 Assembly", link: "x86-basics.html" },
        { title: "Intro to Malware Analysis", link: "malware-analysis.html" }
        // Add more posts here as needed
    ];
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    const postsList = document.getElementById("posts-list");
    const pagination = document.querySelector(".pagination");

    function loadPage(page) {
        postsList.innerHTML = "";
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;

        const postsToDisplay = allPosts.slice(start, end);
        postsToDisplay.forEach(post => {
            const postItem = document.createElement("article");
            postItem.innerHTML = `<a href="${post.link}">${post.title}</a>`;
            postsList.appendChild(postItem);
        });

        updatePagination(page);
    }

    function updatePagination(currentPage) {
        pagination.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.textContent = i;
            pageLink.href = "#";
            pageLink.className = currentPage === i ? "active" : "";
            pageLink.addEventListener("click", (e) => {
                e.preventDefault();
                loadPage(i);
            });
            pagination.appendChild(pageLink);
        }
    }

    // Load the first page by default
    loadPage(1);
});
