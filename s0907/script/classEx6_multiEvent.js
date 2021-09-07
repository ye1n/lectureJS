let out = document.getElementById("out");

//여러개의 이벤트리스너를 [함수]로 처리
let btn1 = document.getElementById("btn1");
function funEvt(e) {
    out.innerText = e.type + e.target.textContent;
}

btn1.addEventListener("mouseover", funEvt);
btn1.addEventListener("mouseout", funEvt);
btn1.addEventListener("mousedown", funEvt);
btn1.addEventListener("mouseup", funEvt);

//여러개의 이벤트리스너를 [오브젝트]로 처리
let btn2 = document.getElementById("btn2");
var objEvt = {
    handleEvent(e) {
        out.innerText = e.type + e.target.textContent;
    }
}

btn2.addEventListener("mouseover", objEvt);
btn2.addEventListener("mouseout", objEvt);
btn2.addEventListener("mousedown", objEvt);
btn2.addEventListener("mouseup", objEvt);

//여러개의 이벤트리스너를 [클래스]로 처리
let btn3 = document.getElementById("btn3");

class ClassEvt {
    handleEvent(e) {
        switch (e.type) {
            case "mouseover":
                out.innerText = e.type + e.target.textContent;
                break;
            case "mouseout":
                out.innerText = e.type + e.target.textContent;
                break;
            case "mousedown":
                out.innerText = e.type + e.target.textContent;
                break;
            case "mouseup":
                out.innerText = e.type + e.target.textContent;
                break;
        }
    }
}

let classEvt = new ClassEvt();
btn3.addEventListener("mouseover", classEvt);
btn3.addEventListener("mouseout", classEvt);
btn3.addEventListener("mousedown", classEvt);
btn3.addEventListener("mouseup", classEvt);