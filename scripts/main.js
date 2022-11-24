// endpoint we are targetting
const endpoint = 'http://ec2-54-193-142-247.us-west-1.compute.amazonaws.com:3000';


function doThing(str){
    alert(`hello ${str}`);
}

function nurl(tar){
    return `${endpoint}${tar}`;
}

/**
 * Funciton to wrap fetch requests
 * @param {string} tar : path to resource (default /test)
 * @param {string} method: method to apply (default GET)
 * @param {object} payload: to deliver to resource (default {})
 */
async function fetchWrap(tar="/test", method="GET", payload=null){
    let url = nurl(tar); // get the url

    let ftc = await fetch(url, 
        {
            mode: 'cors',
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(payload)
    })
    .catch( (err) => {
        console.log(err);
        return err;
    })

    let response = await ftc.json();
    //console.log(response);
    return response;

}


function logout(){
    localStorage.removeItem('foodseek-jwt');
    localStorage.removeItem('foodseek-type');
    localStorage.removeItem('foodseek-email');
    setTimeout(()=> {
        location.href = '../index.html';
    }, 3500
    )
}

function jwtCheck(index_location){
    if(localStorage.getItem('foodseek-jwt')){
        console.log("jwt found")
        return true;
    }
    else{
        console.log(`no jwt ${index_location}`);
        setTimeout(() => {
            location.href = index_location;
            return;
        }, 500);
    }
}

function vendorCheck(){
    if(localStorage.getItem('foodseek-type') === '1'){
        return true;
    }
    else{
        return false;
    }
}