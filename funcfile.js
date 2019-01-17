var good;
var fast;
var cheap;

function process() {
    if (good == true) {
        var state2 = document.getElementById('idfast').checked;
        var state3 = document.getElementById('idcheap').checked;
        if (state2 && state3 == true) {
            document.getElementById('idfast').checked = false;
        }
    } else {
        var state2 = document.getElementById('idfast').checked;
        var state3 = document.getElementById('idcheap').checked;
        if (state2 == false && state3==true) {
            document.getElementById('idfast').checked = true;
        } else (state2==true && state3 == false)
        {
            document.getElementById('idcheap').checked = true;
        }
    }
}

function eventPress() {
    window.addEventListener('keydown', process)
}

function evengood() {
    var stategood = document.getElementById('idgood').checked;

    if (stategood) {
        good = true;
        process();

    } else {
        good=false;
        process();
    }

}

function evenfast() {
    var statefast = document.getElementById('idfast').checked;
    if (statefast) {
        var state1 = document.getElementById('idgood').checked;
        var state3 = document.getElementById('idcheap').checked;
        if (state1 && state3 == true) {
            document.getElementById('idgood').checked = false;
        }
    } else {
        var state1 = document.getElementById('idgood').checked;
        var state3 = document.getElementById('idcheap').checked;
        if (state1 == false) {
            document.getElementById('idgood').checked = true;
        } else (state3 == false)
        {
            document.getElementById('idcheap').checked = true;
        }
    }
}


function evencheap() {
    var statecheap = document.getElementById('idcheap').checked;
    if (statecheap) {
        var state1 = document.getElementById('idgood').checked;
        var state3 = document.getElementById('idcheap').checked;
        if (state1 && state3 == true) {
            document.getElementById('idgood').checked = false;
        }
    } else {
        var state1 = document.getElementById('idgood').checked;
        var state2 = document.getElementById('idfast').checked;
        if (state1 == false && state2 ==true) {
            document.getElementById('idgood').checked = true;
        } else (state2 == false && state1==true)
        {
            document.getElementById('idfast').checked = true;
        }
    }
}