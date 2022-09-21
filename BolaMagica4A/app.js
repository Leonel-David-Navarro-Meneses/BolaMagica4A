const ask = () =>{

const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
if(questionInput.value !== ""){
    let answer = MagicBall();

    answerInput.value = answer;

} else {
    answerInput.value = "pregunta algo!!";
}


 };

 const MagicBall = () => {

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'Tenkiu';
        break;
    case 1:
        eightBall = 'tas bien?';
        break;
    case 2:
        eightBall = 've por un refresco';
        break;
    case 3:
        eightBall = 'jijijijija';
        break;
    case 4:
        eighBall = 'alejate';
        break;
    case 5:
        eightBall = 'eso no se vale';
        break;
    case 6:
        eightBall = 'sonic';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    }
    return eightBall;
};

 