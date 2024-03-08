document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const foodMenuItems = document.querySelectorAll('.food-menu-item');

    searchInput.addEventListener('input', function() {
      const searchText = this.value.toLowerCase().trim();
      
      foodMenuItems.forEach(item => {
        const title = item.querySelector('.food-titile').innerText.toLowerCase();
        if (title.includes(searchText)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });

$(document).ready(function () {
   
    $("a").on("click", function (e) {
      
      if (this.hash !== "") {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      } 
    });
  });

  var swipe = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  });