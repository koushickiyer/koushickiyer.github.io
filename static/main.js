const cols = document.getElementsByClassName('column');
Array.from(cols).forEach((col, ncol) => {
  fetch('static/images/')
    .then(response => response.text())
    .then(dir => {
      const re = new RegExp(`ski_${ncol+1}`, 'g');
      const nrows = dir.match(re).length/2;
      for (var i=1; i<=nrows; i++) {
        var img = document.createElement('img');
        img.src = `static/images/ski_${ncol+1}0${i}.jpg`;
        col.append(img);
      }
    })
    .catch(error => console.log(error));
});
