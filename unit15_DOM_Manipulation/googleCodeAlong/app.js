var logo = document.querySelector("#hplogo");
logo.setAttribute('srcset', 'https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/01/15/way-kings-stormlight-archive-brandon-sanderson-cover.jpg');

var links = document.querySelectorAll('a');

links.forEach( item => {
  item.setAttribute('href', 'https://dailystoic.com/')
  item.style.backgroundColor = 'orange';
  item.style.border = '1px solid red';
  item.style.color = 'pink';
});