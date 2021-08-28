function showblogs() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayBlog(data))
}
showblogs();

function displayBlog(blogs) {
    const blogContainer = document.getElementById('blogs');
    for (const blog of blogs) {
        console.log(blog);
        const blogDiv = document.createElement('div');
        blogDiv.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.body}</p>
        `;
        blogDiv.classList.add('blog');
        blogContainer.appendChild(blogDiv);
    }
}