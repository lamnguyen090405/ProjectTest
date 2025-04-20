
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTickets()
{
modal.classList.add('open')
}
function hideBuyTickets()
{
modal.classList.remove('open')
}

for(const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function (even){
even.stopPropagation()
})


var header = document.getElementById('header');
var mobileMenu = document.getElementById('menubtn');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(var i = 0;i < menuItems.length;i++)
{
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu)
        {
            event.preventDefault();
        }else
        {
            header.style.height = null;
        }
    }
}

var slider = document.getElementById("slider");

var images = [
    "assest/img/slider1/ny.jpg",
    "assest/img/slider1/la.jpg",
    "assest/img/slider1/chicago.jpg"
];

var current = 0;

function changeBackground() {
    slider.style.background = "url('" + images[current] + "') top center / cover no-repeat";
    current = (current + 1) % images.length;
    setTimeout(changeBackground, 3000); // đổi mỗi 3 giây
}

changeBackground();


// Hàm chuyển đổi chế độ Dark Mode
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    // Lưu trạng thái Dark Mode vào Local Storage để nhớ khi reload
    localStorage.setItem("darkMode", isDark);
  }
  
  // Hàm khởi tạo Dark Mode khi tải trang
  function initDarkMode() {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.body.classList.add("dark-mode");
    }
  }
  
  // Khởi tạo khi tải trang
  document.addEventListener("DOMContentLoaded", initDarkMode);

//   Music

// JavaScript for Music Player
const playPauseBtn = document.getElementById('playPauseBtn');
const songTitle = document.getElementById('songTitle');
const volumeControl = document.getElementById('volume');

const audio = new Audio('./assest/Song/alone.mp3'); // Đặt đường dẫn file nhạc của bạn
audio.loop = true; // Nhạc lặp lại

// Cập nhật tên bài hát
const songFileName = audio.src.split('/').pop();  // Lấy tên file từ URL
const songName = songFileName.replace('.mp3', '');  // Xóa đuôi .mp3 để lấy tên bài hát

// Cập nhật tên bài hát vào phần tử songTitle
songTitle.textContent = songName;

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Volume Control
volumeControl.addEventListener('input', (e) => {
  audio.volume = e.target.value / 100;
});
