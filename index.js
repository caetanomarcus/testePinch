
var evChache = [];
var prevDiff = -1;

const pointerdown_handler = (ev) => {
    evChache.push(ev);

    console.log('pointerDown', ev)
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