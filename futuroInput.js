document.addEventListener('DOMContentLoaded', () => {

const inputDate = document.getElementById("date");
const dateBeggining = new Date('2024-04-04T01:00:00');
const msg = document.getElementById("msg");



function slash (digits, input) {
    console.log(digits);
    if (digits.length == 2 || digits.length == 4) {
        input.value += "/"
    }
}

function validate(digits, input) {
    if (digits.length < 8) {
        msg.textContent = ""
        return;
    }
    const dd = digits.slice(0, 2)
    const mm = digits.slice(2, 4);
    const yyyy = digits.slice(4, 8);

    // Confusing logic, tests if user inputed date is before 04/04/2026
    if (dd > 31 || mm > 12 || yyyy < 2026 || yyyy == 2026 && mm < 4 || yyyy == 2026 && mm == 4 && dd < 4) {
            input.value = ""
            msg.textContent = ""
            console.log(digits.length)
            return;
    }

    const userDate = new Date(yyyy, mm - 1, dd)
    let dias = userDate.getDate() - dateBeggining.getDate();
    let meses = userDate.getMonth() - dateBeggining.getMonth();
    let anos = userDate.getFullYear() - dateBeggining.getFullYear();

    if (dias < 0) {
        meses --
        const mesAnterior = new Date(userDate.getFullYear(), userDate.getMonth(), 0);
        dias += mesAnterior.getDate();
      }

      if (meses < 0) {
        anos--;
        meses += 12
      }

    
    console.log(dias, meses, anos);
    msg.textContent = `Estaremos juntos há ${anos} anos, ${meses} meses, ${dias} dias`;
    
}



inputDate.addEventListener("keydown", (e) => {
    if (!/^\d$/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
        e.preventDefault();
    }
    
})


inputDate.addEventListener("input", (e) => {
    const digits = inputDate.value.replace(/\D/g, '').slice(0,8);
    slash(digits, inputDate);
    validate(digits, inputDate)
})

})

