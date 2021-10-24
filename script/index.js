let btn_tips = document.querySelector('.tips');
let btns = document.querySelectorAll('.btn');
let at_show = document.querySelector('.btn_ctx');
// btn_tips.addEventListener('mouseover', appear);
// btn_tips.addEventListener('mouseout', disappear);

// function appear(e) {
//   btn_tips.style.left = 0 + 'px';
// }
// function disappear(e) {
//   btn_tips.style.left = -150 + 'px';
// }

// 按钮内容
let btn_ctx = [
  'add',
  'get_skill',
  [{ Army: 'add_general' }, { Army: 'clear' }, { Army: 'txds' }],
  'reset',
  [{ Guild: 'create' }, { Guild: 'occupy' }, { Guild: 'invite' }],
];
// console.log(btns);
// btns.addEventListener('click', showCtx);
btns.forEach(i => {
  i.addEventListener('click', showCtx);
});

function sort_at(at_other = [], at_Army = [], at_Guild = []) {
  for (let i = 0; i < btn_ctx.length; i++) {
    if (typeof btn_ctx[i] != 'object') {
      at_other.push(btn_ctx[i]);
      continue;
    }
    let key = Object.keys(btn_ctx[i][0])[0];
    if (key == 'Army') {
      for (let j = 0; j < btn_ctx[i].length; j++) {
        at_Army.push(btn_ctx[i][j][key]);
        // return at_Army;
      }
    } else {
      for (let k = 0; k < btn_ctx[i].length; k++) {
        at_Guild.push(btn_ctx[i][k][key]);
        // return at_Guild;
      }
    }
  }
  return { at_other, at_Army, at_Guild };
}

function showCtx(e) {
  let ats = sort_at()[`at_${e.target.innerText}`];
  console.log(ats);
  for (let i = 0; i < ats.length; i++) {
    let btns_at = document.createElement('button');
    btns_at.setAttribute('innerHTML', ats[i]);
    at_show.appendChild(btns_at);
  }
}
