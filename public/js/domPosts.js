
window.onload = () => requestXHR('/getposts', 'GET', null, (err, res) => {
  const result = res.rows;
  if (err) console.log(err);

  else result.forEach(post => {
    console.log(post);

  });


  // else console.log(res);
});
