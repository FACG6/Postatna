window.onload = () => requestXHR('/getposts', 'GET', null, (err, res) => {
  const result = res.rows;

  if (err) console.log(err);

  else {
    result.forEach((post) => {
      const mainsection = document.getElementsByTagName('main')[0];
      const postDiv = document.createElement('div');
      const name = document.createElement('h5');
      const date = document.createElement('h6');
      const hr = document.createElement('hr');
      const desc = document.createElement('p');
      const userName = document.getElementById('userName');
      postDiv.classList.add = 'post';
      postDiv.setAttribute('class', 'post');
      date.setAttribute('class', 'post-date');
      desc.setAttribute('class', 'post--des');
      userName.textContent = post.username;
      name.textContent = post.username;
      const postDate = post.postdate;
      date.textContent = postDate;
      desc.textContent = post.description;
      postDiv.appendChild(name);
      postDiv.appendChild(date);
      postDiv.appendChild(hr);
      postDiv.appendChild(desc);
      mainsection.appendChild(postDiv);
    });
  }
});


function myFunction() {
  const craeteForm = document.getElementById('create-post');
  if (craeteForm.style.display === 'none') {
    craeteForm.style.display = 'block';
  } else {
    craeteForm.style.display = 'none';
  }
}
