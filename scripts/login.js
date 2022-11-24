async function loginRequest(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    //console.log(`Credentials: email=${email}, pass=${pass}`)
    let login_request = await fetchWrap('/login', 'POST' ,{email:email, pass:pass});
    
    if(login_request.success){
        //console.log(login_request.data);
        localStorage.setItem('foodseek-jwt',login_request.data.jwt);
        localStorage.setItem('foodseek-type',login_request.data.vendor);
        localStorage.setItem('foodseek-email',email);

        return setTimeout(() => {
            location.href = './pages/home.html';
        }, 250 )
        
    }
    else{
        document.getElementById('loginIssues').style.display = "inherit";
        document.getElementById('issuespan').innerHTML = JSON.stringify(login_request.issues);
        return;
    }

}

function checkForJWT(){
    let jwt = localStorage.getItem('foodseek-jwt');
    if(jwt){
        location.href = './pages/home.html';
    }
    else{
        return;
    }
}