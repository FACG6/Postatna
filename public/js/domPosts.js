
window.onload = () => requestXHR('/getposts', 'GET', null, (err, res) => {

  const result = res.rows;

  if (err) console.log(err);

  else {
    result.forEach(post => {
      const postdiv = document.getElementById('posts');
      const name = document.createElement('h5');
      const date = document.createElement('h6');
      const hr = document.createElement('hr');
      const desc = document.createElement('p');
      postdiv.classList.add = 'post';
      date.classList.add = 'post-date';
      desc.classList.add = 'post--des';
      date.textContent = post.postdate;
      desc.textContent = post.description;
      postdiv.appendChild(name);
      postdiv.appendChild(date);
      postdiv.appendChild(hr);
      postdiv.appendChild(desc)
      console.log(post);
    });
  }

  // else console.log(res);
});
