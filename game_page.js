player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;



document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;



function send() {
    get_word = document.getElementById("word").value;//Crocodile
    word = get_word.toLowerCase();//crocodile
    console.log("word in lowerCase = " + word);//word in lowerCase = crocodile

    charAt1 = word.charAt(1);//r
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);//Math.floor(4.5)//4
    charAt2 = word.charAt(length_divide_2);//o
    console.log(charAt2);

    length_minus_1 = word.length - 1; //8
    charAt3 = word.charAt(length_minus_1); //e
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");//c_ocodile
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");//c_ _c_dile
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");// c _ _ c _ d i l _
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}





function check() {
    var word1 = document.getElementById("input_check_box").value
    if (word1 == word) {
        if (answer_turn == player1_name) {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score
            document.getElementById("player_answer").innerHTML = "You got it right!"
        }
        else {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
            document.getElementById("player_answer").innerHTML = "You got it right"
        }
    }
    else {
        document.getElementById("player_answer").innerHTML = "oh you got it wrong"
    }
    if (question_turn == "player1") {
        question_turn = "player2"
    }
    else {
        question_turn = "player1"
    }
    document.getElementById("output").innerHTML = " ";


}
