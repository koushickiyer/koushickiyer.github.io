const spos = [
  [1, 3, 2],
  [5, 4, 7],
  [0, 6, 0],
];

const mpos = [
  [3, 2, 1],
  [4, 0, 0],
];

const cols = document.querySelectorAll('div.column');
function populate(val) {
  const pos = (val == 's') ? spos : mpos;
  Array.from(cols).forEach((col, n) => {
    col.innerHTML = '';
    for (var i=0; i<pos.length; i++) {
      if (!pos[i][n]) continue;
      var img = document.createElement('img');
      if (pos[i][n] < 10) {
        img.src = `static/images/${val}0${pos[i][n]}.webp`;
      } else {
        img.src = `static/images/${val}${pos[i][n]}.webp`;
      }
      img.loading = 'lazy';
      col.append(img);
    };
  });
}

var active = document.getElementById('active');
populate(active.value);

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', event => {
    active.id = '';
    event.target.id = 'active';
    active = event.target;
    populate(active.value);
  })
})
