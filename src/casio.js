  document.querySelector('#btn_get_prize').onclick = function () {
$('#overlay').show();
  };
  document.querySelector('#btn_close').onclick = function () {
$('#overlay').hide();
  };
  document.querySelector('#btn_send').onclick = function () {
name = $('#name').attr("value");
phone = $('#phone').attr("value");

            $.ajax({
            type:"post",
                url: 'http://101.132.146.155/users/gttddki',
                data: {
                    r: new Date().getTime()
                },
 dataType: "jsonp", crossDomain: true,
 jsonpCallback: "sucCallback",
                error: function(a,b){
                    console.log(a,b, 'error');
                },
                success: function(a){
                    console.log(a, 'success');
                },
                complete: function(a){
                    console.log(a, 'complete');
                },
                timeout: 3000
            });   
  };
