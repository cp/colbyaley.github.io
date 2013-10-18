function toggleExtra() {
  var text = document.getElementsByClassName('extra')[0]
  var button = document.getElementById('more')
  if(text.style.display == 'block') {
    text.style.display = 'none'
    button.innerHTML = "Read more."
  } else {
    text.style.display = 'block'
    text.className = "extra animated fadeIn"
    button.innerHTML = "Read less."
  }
}