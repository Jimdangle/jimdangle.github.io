function badUserKickout(jwt){
    if(!jwt){
        location.href = '../index.html';
    }
    else{
        return;
    }
}


function loadHome(){
    let jwt = localStorage.getItem('foodseek-jwt');
    let user_type = localStorage.getItem('foodseek-type');
    let email = localStorage.getItem('foodseek-email');

    console.log(`user data : email:${email}, type: ${user_type}, jwt${jwt}`);

    if(jwtCheck('../index.html')){

        if(user_type === '1'){
            console.log('Vendor');
            location.href='./vendor/home.html';
        }
        else if(user_type === '0'){
            console.log('User');
            location.href = './user/home.html';
        }
        else{
            console.log('neither');
            location.href ='../../index.html';
        }
    }

}