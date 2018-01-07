window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '1441700655878038', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src="https://connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
export function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
        let imageUrl = 'https://graph.facebook.com/10213765329917758/picture?type=normal';
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("fbLink").style.display = "none";
        document.getElementById("fbLinkLogout").style.display = "block";
        document.getElementById('status').innerHTML = '<h1>Thanks for logging in, ' + response.first_name + '!</h1>';
        document.getElementById('userData').innerHTML = '<div class="fb-userinfo"><p class="profile-photo"><img src="'+imageUrl+'"/></p><p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">Visit your profile!</a></p></div>';
    });
}

// Logout from facebook
export function fbLogout() {
    FB.logout(function() {
        document.getElementById("fbLink").style.display = "block";
        document.getElementById("fbLinkLogout").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById('statusLogout').innerHTML = 'You have successfully logged out of Facebook.';
    });
}

export default fbLogin;