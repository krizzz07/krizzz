function validate() {
    var text1=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
      if(text1== "krizzz" && text2 == "koiloth")
    {
          alert ("Login success");
          location.href="true.html";
      } else {
                alert("Login failed, Invalid credentials");
            }
}
