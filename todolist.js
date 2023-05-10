let addText = document.getElementById('listText');
let result = document.getElementById('result');
let addBtn = document.getElementById('submitBtn');

// 할 일 리스트를 9개까지만 작성할 수 있도록 수를 세어주는 변수 추가
var count = 0;
var click = 0;

function addTodo() {
    // 입력 받은 값이 없으면 경고창 띄우기
    if(addText.value==false) {
        alert('할 일을 적어주세요.')
    } else {
        count++;

        // 리스트 9개가 채워지면
        if(count>=10) {
            // 리스트 삭제를 원하면 전체 삭제를, 아니면 더 이상 추가하지 못하도록 구현
            if(confirm("더이상 추가할 수 없습니다. 전체 삭제 후 재작성 하시겠습니까?")==true){
                result.innerText='';
                count=0; 
            }else{
                count--;
                return false;
            }

        } else { 
            // 새롭게 li, button 추가
            let list = document.createElement("li");
            let del = document.createElement('button');
            let icon = document.createElement('button');

            // list안에 addText에서 받아온 값을 넣어줌
            list.innerHTML = addText.value;


            // result 안에 list 추가하기
            result.appendChild(list);
            // list 안에 del 추가하기
            list.appendChild(del);
            list.appendChild(icon);

            // list, del, icon 각각 넣고싶은 css 추가하기
            list.style.backgroundColor="#f0f0f0";

            del.innerText = "X";
            del.style.fontSize = "35px";
            del.style.border = "none";
            del.style.float = "right";
           
            del.style.cursor = "pointer";
            del.style.position='relative';

            icon.innerText = "🥜";
            icon.style.fontSize = "35px";
            icon.style.border = "none";
            icon.style.float = "left";
            del.style.cursor = "pointer";
            del.style.position='relative';


            //삭제버튼 클릭시 해당 리스트 삭제 
            del.addEventListener("click", deleteList);

            // 리스트 칸 클릭하면 줄이 그어짐
            // 클릭할때마다 줄이 그어지고 사라지고의 반복을 구현
            list.addEventListener("click", function(){      //할일 완료 후 클릭시 밑줄로 표시
                ++click;

                if(click==1){
                    list.style.textDecoration = "line-through";
                    list.style.textDecorationThickness = "7px";
                    list.style.backgroundColor = "#666666";
                    del.style.backgroundColor = "#666666";
                    icon.style.backgroundColor = "#666666";
                }
                if(click==2){
                    list.style.textDecoration = "none";
                    list.style.backgroundColor = "#f0f0f0";
                    del.style.backgroundColor = "#f0f0f0";
                    icon.style.backgroundColor = "#f0f0f0";
                    click=0;
                }
            })

            // 이걸 써줘야 입력창에 적었던 값을 초기화 할 수 있음
            addText.value = "";
        } 
    }

}

//할일 목록 삭제시
function deleteList(e){ //삭제 버튼 클릭시 
    count--;
    let removeOne = e.target.parentElement;  
    removeOne.remove();
}
