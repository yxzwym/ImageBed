$(document).ready(function () {
  var raf = window.requestAnimationFrame
    ? window.requestAnimationFrame
    : function (callback) {
        return setTimeout(callback, 12)
      }
  var $bulin = $('div.sprite-bulin')
  if ($bulin[0]) {
    $bulin.redraw = function () {
      $bulin.css('background-image', 'url(https://patchwiki.biligame.com/images/blhx/5/5a/iyji9nxgx7mqj9w34ch16x393g78x6q.png)')
      $bulin.css('transform', 'translate3d(' + Math.floor($bulin.X) + 'px, ' + Math.floor($bulin.Y) + 'px, 0) ' + (!$bulin.reversed ? 'rotateY(180deg)' : ''))
    }
    var bulin_width = 130
    var range = {
      minX: -50,
      maxX: document.body.clientWidth - bulin_width + 50,
      minY: -50,
      maxY: window.innerHeight - bulin_width + 50,
    }
    $bulin.speedX = (Math.random() + 1) * 2
    $bulin.speedY = (Math.random() + 1) * 2
    $bulin.X = -130
    $bulin.Y = (Math.random() * range.maxY)
    function bulinMove() {
      if ($bulin.X < range.minX) {
        $bulin.speedX = Math.abs($bulin.speedX)
        $bulin.reversed = !1
      } else if ($bulin.X > range.maxX) {
        $bulin.speedX = -$bulin.speedX
        $bulin.reversed = !0
      }
      $bulin.speedY = $bulin.Y < range.minY ? Math.abs($bulin.speedY) : $bulin.Y > range.maxY ? -$bulin.speedY : $bulin.speedY;
      $bulin.X += $bulin.speedX
      $bulin.Y += $bulin.speedY
      $bulin.redraw()
      return raf(bulinMove)
    }
    $bulin.appendTo('body')
    $bulin.css('display', 'block')
    bulinMove()

    window.addEventListener("resize", function() {
      range.maxX = document.body.clientWidth - bulin_width + 50
      if ($bulin.X > range.maxX) {
        $bulin.X = range.maxX
        $bulin.reversed = !0
      }
      range.maxY = window.innerHeight - bulin_width + 50
      if ($bulin.Y > range.maxY) {
        $bulin.Y = range.maxY
      }
    })
  }
})