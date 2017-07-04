import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../css/main.css'

const App = {
  init: function() {
    $('#submit').on('click', function(e) {
      console.log('submit')
    })
  }
}

$(function() {
  App.init()
})
