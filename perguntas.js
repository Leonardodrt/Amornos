

    const answers = new Map()
    answers.set('A', ['Rosa', 'Sábado', 'At the door', '2 anos']);
    answers.set('B', ['Pastilha', 'Segunda', 'Sweet', '100 anos']);
    answers.set('C', ['Peluche', 'Domingo', 'Selfless', '10 000 anos']);
    answers.set('D', ['Beijinho', 'Quarta', 'All I need', 'Para sempre']);

    let iteration = 0
    console.log(iteration)

    function LoadQuizz(map, it) {
    document.getElementById("A").value = "A: " + map.get("A")[it];
    document.getElementById("B").value = "B: " + map.get("B")[it];
    document.getElementById("C").value = "C: " + map.get("C")[it];
    document.getElementById("D").value = "D: " + map.get("D")[it];
    }

      

    function SwitchQuizz(answer) {
            console.log(iteration)
            let question = document.getElementById("question")
            switch (iteration) {
                case 0:
                    if (answer === "A") {                       
                        iteration++;
                        LoadQuizz(answers, iteration);
                        question.textContent = "O primeiro dia de encontro?"
                        ;
                    }
                    break;
                case 1:
                    if (answer === "C") {                       
                        iteration++;
                        LoadQuizz(answers, iteration);
                        question.textContent = "A música?"
                        ;
                    }
                    break;
                case 2:
                    if (answer === "A") {                        
                        iteration++;
                        LoadQuizz(answers, iteration);
                        question.textContent = "O tempo?"
                        ;
                    }
                    break;
                case 3:
                    if (answer === "D") {                              
                        LoadQuizz(answers, iteration);
                        ;
                    }
                    break;
            }
    }

 document.addEventListener('DOMContentLoaded', () => {   
    LoadQuizz(answers, iteration);
  
})

