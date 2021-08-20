// getting all required elements 
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box")

//if start quiz button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); // info box appears
}

//if exit button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

//if continue button is clicked 
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // info box disappears
    quiz_box.classList.add("activeQuiz"); // show quiz box 
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//wif next button is clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }
    else {
        console.log("Questions Completed");
    }
}

//getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].numb + "." + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionsSelected(this)");
    }
}

function optionSelected(amswer){
    let userAns = answer.textContent;
    let correctAns = questions[index].answer;
    console.log(userAns)
}






function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ que_count +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}