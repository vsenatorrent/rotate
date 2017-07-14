window.addEventListener('scroll', function () {
  var img = document.querySelectorAll('img');
  var img1 = document.getElementById('img1');
  for (var i = 0; i < img.length; i++) {
    img[i].style.transform = "rotate("+window.pageYOffset+"deg)"
  }
})
