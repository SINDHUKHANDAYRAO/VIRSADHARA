// Add event listener for form submission
document.getElementById('articleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const title = document.getElementById('articleTitle').value.trim();
    const content = document.getElementById('articleContent').value.trim();

    // Check if title and content are provided
    if (title && content) {
        // Create a new draft post element
        const draftPost = document.createElement('div');
        draftPost.classList.add('draft-post');
        draftPost.innerHTML = `<h4>${title}</h4><p>${content}</p>`;

        // Append the new draft post to the drafts section
        document.getElementById('drafts').appendChild(draftPost);

        // Clear the input fields
        document.getElementById('articleTitle').value = '';
        document.getElementById('articleContent').value = '';

        // Optionally, you can show a success message or feedback
        alert('Draft saved successfully!');
    } else {
        // Show an error message if inputs are empty
        alert('Please provide both a title and content for the article.');
    }
});
