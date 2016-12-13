function buttonEnabler() {
  var webTitle = $( ".web-title" ).val();
  var webUrl = $( ".web-url" ).val();
  if( webTitle.length < 1 && webUrl.length < 1 ) {
    $('.enter-btn').attr('disabled', true);
  } else{
    $('.enter-btn').attr('disabled', false);
  }
};
function totalLinks() {
  var count = $(".stored-site").length;
  $('.links').text("Number of Links: "+ count);
}
function readLinks() {
  var count = $(".read").length;
  $('.read-links').text("Number of Read Links: "+ count);
}
function unreadLinks() {
  var totalBookmarks = $(".stored-site").length;
  var readBookmarks = $(".read").length;
  var unreadTotal = totalBookmarks - readBookmarks;
  $('.unread-links').text("Number of Unread Links: "+ unreadTotal);

}
// Creates bookmark properties
function CreateBookmark (webTitle, webUrl) {
  this.title = webTitle;
  this.url = webUrl;
}

// Creates bookmark content and html
function bookmarkContent(createBookmark) {
  $(".bookmarks").prepend(`
    <article class="stored-site">
      <h5>${createBookmark.title}</h5>
      <p class="unread"><a href="${createBookmark.url}" target="_blank">${createBookmark.url}</a></p>
      <input type="submit" value="Read" id="read-btn">
      <input type="submit" value="Delete" id="delete-btn">
    </article>`
  );
}

//grabs and stores user input values
function makeBookmark() {
  var webTitle = $( ".web-title" ).val();
  var webUrl = $( ".web-url" ).val();
  var createBookmark = new CreateBookmark(webTitle, webUrl);
  bookmarkContent(createBookmark);
}

//resets input fields to placeholder values
function resetInputFields() {
  $( ".web-title" ).val('');
  $( ".web-url" ).val('');
}
 //clear bookmarks button
$( ".clear-btn" ).on("click",function() {
  $('.stored-site').remove();
  });

//binds the enter button to typing in inputfields
$( ".web-title, .web-url" ).keyup(function() {
  buttonEnabler();
});

// Sets bookmark in motion from user input and btn click
$( ".enter-btn" ).click(function() {
  makeBookmark();
  resetInputFields();
  totalLinks();
  unreadLinks();
  buttonEnabler();
});

// Toggle Class for Delete Button
$( ".bookmarks" ).on("click", "#delete-btn", function() {
  $( this ).parent().remove();
  });
function changeArticleClass() {
$('.stored-site').toggleClass('read-bookmark');
  $(this).toggleClass('read-bookmark');

};
// Toggle Class for Read Button
$( ".bookmarks" ).on("click", "#read-btn", function() {
     $(this).toggleClass('read');
     changeArticleClass();
     readLinks();
     unreadLinks();
  });

// // Use Enter to submit
// $( ".web-url, .web-title").keypress(function(event) {
//   if( event.which == 13 ) {
//     event.preventDefault();
//     buttonEnabler();
//     makeBookmark();
//     resetInputFields();
//   }
// });
