
var evChache = [];
var prevDiff = -1;

const pointerdown_handler = (ev) => {
    evChache.push(ev);

    console.log('pointerDown', ev)
}

const pointermove_handler = ev => {
    console.log('pointerMove', ev);
    ev.target.style.border = 'dashed';

    for (i= 0; i <evChache.length; i++) {
        if(ev.pointerId === ev.evChache[i].pointerId){
            evChache[i]= ev;
            break;
        }
    }

    if(evChache.length === 2) {
        const curDiff = Math.abs(evChache[0].clientX - evChache[1].clientX);

        if(prevDiff > 0) {
            console.log('Pinch moving OUT -> Zoom in, ev');
            ev.target.style.background = 'lightblue';
        }

        prevDiff = curDiff;
    }
}

const init = () => {
    const el = document.getElementById('target');
    el.onpointerdown = pointerdown_handler;
    el.onpointermove = pointermove_handler;

    el.onpointerup = pointerup_handler;
    el.onpointercancel = pointerup_handler;
    el.onpointerout = pointerup_handler;
    el.onpointerleave = pointerup_handler;
}