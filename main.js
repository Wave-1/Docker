function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password=="admin"){
        alert("Đăng nhập thành công")
        return false;
    }else{
        alert("Đăng nhập thất bại")
    }
}