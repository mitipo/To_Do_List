const btn = document.getElementById("btn");
let addValue = document.getElementById("addValue");
let result = document.getElementById("result");

// 할일 추가하기
function addTodo() {
  if (addValue.value == false) {
    alert("내용을 입력하세요.");
  } else {
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerHTML = addValue.value;
    result.appendChild(list);
    list.appendChild(del);
    del.innerText = "X";
    del.style.fontSize = "8px";
    del.style.backgroundColor = "#fff";
    del.style.borderRadius = "50px";
    del.style.color = "#skyblue";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "10px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList);
    del.style.position = "relative";
    del.style.verticalAlign = "center";
    del.style.lineHeight = "18px";
    del.style.width = "22px";
    //
    list.style.fontSize = "8px";
    list.style.textAlign = "left";
    list.style.width = "600px";
    list.style.height = "40px";
    list.style.position = "relative";
    list.style.display = "block";
    list.style.marginLeft = "";
    list.style.backgroundColor = "skyblue";
    list.style.borderBottom = "3px solid #fff";
    list.style.margin = "0 auto";
    list.style.float = "left";
    list.style.listStyle = "circle";
    list.style.lineHeight = "38px";
    list.style.textIndent = "12px";
    addValue.value = "";
    addValue.focus();
    list.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
      list.style.color = "#fff";
    });
  }
}
// 할일 목록 삭제시
function deleteList(e) {
  let removeOne = e.target.parentElement;
  removeOne.remove();
}
// 전체 삭제시
function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    if (result.innerHTML == "") {
      alert("삭제할 목록이 없습니다.");
    } else {
      result.innerText = ""; //전체 삭제
    }
  } else {
    return false; //삭제 취소
  }
}
