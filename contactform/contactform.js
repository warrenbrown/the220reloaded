$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var name = $("#name").val(),
        email = $("#email").val(),
        city = $("#city").val();
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/messages',
      contentType: 'application/json',
      data: JSON.stringify({
          'name': name,
          'email': email,
          'city': city
      }),
      success: function(res){
        console.log("Your message was sent")
          $('#myAlert').text('Form has been submitted');
          $('#message-form')[0].reset();
      },
      error: function(){
          $('#form-response').text('Error.');
      }
    });
  })
});