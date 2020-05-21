$("#signup").click(function(event){
  let name = $("#name").val();
  let email = $("#email").val();
  let password = $("#pass").val();
  console.log(name+" "+email+" "+pass);


$.ajax({
    url: "/user",
    type:     "POST",
    dataType: "json",
    data: {name:name,email:email,password:password},
    success: function(data) { //Данные отправлены успешно
         console.log(data.name)
        $('#result').text(data);
    },
    error: function(data) { // Данные не отправлены
        $('#result').text('Error data is not sent');
    }
  });
  $.ajax({
      type:"get",
      url:"/user",
      data:"html",
      success:function(response){
          alert("All it`s good")
      },
      error: function(response){
          alert("Someting wrong")
      }
  });
 });
