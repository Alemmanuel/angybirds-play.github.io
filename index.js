var vix;
var viy;
var tt;
var t = '0';
var x;
var y;
var beginMove;

function resolve() {
    var area = document.getElementById('area')
    var vi = document.getElementById('vi').value
    var theta = document.getElementById('theta').value
    theta = theta * (Math.PI / 180)
    var g = document.getElementById('g').value
    var mostrar = document.getElementById('mostrar')
    //Vix, Viy
    vix = vi * Math.cos(theta).toFixed(3)
    viy = vi * Math.sin(theta).toFixed(3)
    //Ts, Tt
    var ts = viy / g
    var tt = ts * 2
    //Xmax, Ymax
    var xmax = vix * tt
    var ymax = Math.pow(viy, 2) / 2 * g
    //Mostrar Resultados
    console.log(vix.toFixed(3))
    console.log(viy.toFixed(3))
    console.log(ts.toFixed(3))
    console.log(tt.toFixed(3))
    console.log(xmax.toFixed(3))
    console.log(ymax.toFixed(3))

    for (t = 0; t <= tt; t++) {
        var x = vix * t
        var y = 590 - (viy * t - (g * Math.pow(t, 2)) / 2)
        var vy = Math.abs(viy - (g * t))
        var v = Math.sqrt(Math.pow(vix, 2) + Math.pow(vy, 2))
        console.log(vy)
        console.log(v)
        var angrybirds = document.createElement('img')
        angrybirds.src = 'https://i.picasion.com/pic92/171f8354f21801c9e7bd274e768d1422.gif'
        angrybirds.className = 'angrybirds'
        angrybirds.title=`VelX: ${vix}, VelY: ${vy.toFixed(3)}, Vel: ${v.toFixed(3)}`
        angrybirds.style.position = 'absolute'
        angrybirds.style.left = x + 'px'
        angrybirds.style.top = y + 'px'
        area.appendChild(angrybirds)
    }
}

function startMove() {
    var area = document.getElementById('area')
    var vi = document.getElementById('vi').value
    var theta = document.getElementById('theta').value
    theta = theta * (Math.PI / 180)
    var g = document.getElementById('g').value
    var mostrar = document.getElementById('mostrar')
    //Vix, Viy
    vix = vi * Math.cos(theta).toFixed(3)
    viy = vi * Math.sin(theta).toFixed(3)
    //Ts, Tt
    ts = viy / g
    tt = ts * 2
    //Xmax, Ymax
    var xmax = vix * tt
    var ymax = Math.pow(viy, 2) / 2 * g
    beginMove = setInterval(move, 200)
}

function move() {
    var g = document.getElementById('g').value
    x = vix * t
    y = 590 - (viy * t - (g * Math.pow(t, 2)) / 2)
    var image = document.getElementById('image')
    image.className = 'angrybirds2'
    if (t < tt) {
        image.style.left = x + 'px'
        image.style.top = y + 'px'
    } else {
        clearInterval(move)
    }
    console.log(x, y)
    t++;
}    