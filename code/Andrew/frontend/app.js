// Retrieve and display the username
const username = '@' + localStorage.getItem('username');
console.log(username);

// Initial posts array
const posts = [];

// Utility function to format timestamps
function formatTimestamp(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12; 
  const formattedMinute = minute < 10 ? '0'+minute : minute;
  return `${months[monthIndex]} ${day}, ${year}, ${formattedHour}:${formattedMinute} ${ampm}`;
}

// Show or hide the 'no tweet' message based on posts length
function updateNoTweetVisibility() {
  document.getElementById('noTweet').style.display = posts.length === 0 ? 'block' : 'none';
}

// Function to create a post element from a post object
function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <div class="postDiv">
      <div class="topPost">
        <h4 class="postUsername">${post.username}</h4>
        <small>${post.timestamp}</small>
      </div>
      <p>${post.content}</p>
    </div>
  `;
  return postElement;
}

// Function to add a new post
function addPost() {
  var content = document.querySelector('.inputTweet').value;
  var timestamp = formatTimestamp(new Date());
  posts.push({username: username, content: content, timestamp: timestamp});
  updateNoTweetVisibility();
}

// Function to update the feed
function updateFeed() {
  const feed = document.getElementById('MainFeed');
  feed.innerHTML = '';
  posts.forEach(post => {
    const postElement = createPostElement(post);
    feed.appendChild(postElement);
  });
}

// Event listeners for UI interactions
document.getElementById('add').addEventListener('click', function() {
  document.getElementById('addTweet').style.display = 'block';
  document.getElementById('modalOverlay').style.display = 'block';
});

document.querySelector('.inputButton').addEventListener('click', function () {
  addPost();
  updateFeed();
  document.getElementById('addTweet').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
  document.querySelector('.inputTweet').value = '';
});

document.querySelector('.exitAdd').addEventListener('click', function () {
  document.getElementById('addTweet').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('modalOverlay').addEventListener('click', function() {
  document.getElementById('addTweet').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
});

updateNoTweetVisibility();
