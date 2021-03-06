
const requestXHR = (url, method, data, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {      
      const response = JSON.parse(xhr.responseText);
      if (xhr.status === 200) {
        if (response.error) {
          cb(new TypeError(response.error));
        } else {
          cb(null, response);
        }
      } else {
        cb(new TypeError(response.error));
      }
    }
  };
  xhr.open(method, url);
  xhr.send(data);
};
