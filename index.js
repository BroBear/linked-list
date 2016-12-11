// Creates bookmark properties
function CreateBookmark (webTitle, webUrl) {
  this.title = webTitle;
  this.url = webUrl;
}

// Creates bookmark content and html
function bookmarkContent(createBookmark) {
  $( ".bookmarks" ).prepend(`
    <article class="stored-site">
      <h5 contenteditable>${createBookmark.title}</h5>
      <p class="unread" contenteditable>${createBookmark.url}</p>
      <input type="submit" value="Read" class="read-btn">
      <input type="submit" value="Delete">
    </article>`
  );
}

// Sets bookmark in motion from user input and btn click
$( ".enter-btn" ).click(function() {
  var webTitle = $( ".web-title" ).val();
  var webUrl = $( ".web-url" ).val();
  var createBookmark = new CreateBookmark(webTitle, webUrl);
  bookmarkContent(createBookmark);
  console.log(webTitle);
});
