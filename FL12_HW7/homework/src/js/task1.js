// Your code goes here
let userDataBase = {
    'admin@gmail.com': 'AdminPass',
    'user@gmail.com': 'UserPass'
}
let a = prompt('Enter your Email','');
if(!a){
    alert('Canceled.');
}else if(a.length < 5){
    alert('I don\'t know any emails having name length less than 5 symbols');
}else if(Object.keys(userDataBase).includes(a)){
    let b = prompt('Enter your password','');
    if(!b){
        alert('Canceled.');
    }else{
        if(b === userDataBase[a]){
            let c = confirm('Do you want to change your password?');
            if(!c){
                alert('You have failed the change.');
            }else{
                let d = prompt('Enter your old password','');
                if(d===""){
                    alert('Canceled');
                }else if(d === userDataBase[a]){
                    let e = prompt('Enter your new password','');
                    if(e < 6){
                        alert('It’s too short password. Sorry.');
                    }else{
                        let f = prompt('Enter it again please');
                        if(e === f){
                            userDataBase[a] = e; 
                            alert('You have successfully changed your password.');
                        }else{
                            alert('You wrote the wrong password.');
                        }
                    }
                }else{
                    alert('You wrote the wrong password.');
                }
            }
        }else{
            alert('Wrong password');
        }
    }
}else{
    alert('I don’t know you');
}