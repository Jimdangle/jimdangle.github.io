// Perform validation on the password
function validatePass(){
    let pass = document.getElementById('pass');
    let rePass = document.getElementById('rePass');
    //console.log(rePass.value);
    if ( pass.value === rePass.value ){
        document.getElementById('badPasswordMatch').style.display = "none";
        document.getElementById('pass').style.borderColor = "green";
        document.getElementById('rePass').style.borderColor = "green";
        return true;
    }
    else{
        document.getElementById('badPasswordMatch').style.display = "inherit";
        document.getElementById('pass').style.borderColor = "red";
        document.getElementById('rePass').style.borderColor = "red";
        return false;
    }
}

// Perform the signup request 
async function signupRequest(){
    if(validatePass()){
        let email = document.getElementById('email').value;
        let pass  = document.getElementById('pass').value;
        let vendor = document.getElementById('userTypeList').value;
        vendor = (vendor === "Vendor") ? 1 : 0;
        console.log(vendor);

        let creds = {email:email,pass:pass,vendor:vendor};
        

        let signup_request = await fetchWrap('/signup','POST', creds);
        console.log(signup_request);
        if(signup_request.success){
            setTimeout( () => {
                location.href = '../index.html';
                return;
            }, 500)
        }
        else{
            document.getElementById('signupIssues').style.display = "inherit";
            document.getElementById('issuespan').innerHTML = JSON.stringify(signup_request.issues);
            return;
        }
    }

}