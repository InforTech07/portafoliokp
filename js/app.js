const regex={
    name: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9.]+$/,
    phone: /^[5,0,2]{3}[4|5|7]{1}([\d]{7})$/,
    subject:/^([a-zA-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
    description: /^\w+\s+/
}


function showMessage(result,idInput){
    if (result) {
        document.getElementById(idInput).style.display='none'; 
    }else{
        document.getElementById(idInput).style.display='block';
    }
}


function inputValition(tyInput,valInput){
    switch (tyInput) {
        case 'name':
                let resultName = regex.name.test(valInput);
                showMessage(resultName,'msg-name');
            
            break;
        case 'phone':
                let resultPhone = regex.phone.test(valInput);
                showMessage(resultPhone,'msg-phone');
                
            break;
        case 'email':
                let resultEmail = regex.email.test(valInput);
                showMessage(resultEmail,'msg-email');
            break;
        case 'subject':
                let resultSubject = regex.subject.test(valInput);
                showMessage(resultSubject,'msg-subject');
            break;
        case 'description':
                let resultDescription = regex.description.test(valInput);
                showMessage(resultDescription,'msg-description');
            break;
        default:
            console.log('joder')
            break;
    }
}


const myForm = document.querySelector('.card-form')
myForm.addEventListener('keydown',(e)=>{
    let typeInput= e.target.name;
    let valueInput = e.target.value;
    inputValition(typeInput,valueInput);
})
myForm.addEventListener('keyup',(e)=>{
    let typeInput= e.target.name;
    let valueInput = e.target.value;
    inputValition(typeInput,valueInput);
})