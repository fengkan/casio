  document.querySelector('#btn_get_prize').onclick = function () {
$('#overlay').show();
  };
  document.querySelector('#btn_close').onclick = function () {
$('#overlay').hide();
  };
  document.querySelector('#btn_send').onclick = function () {
name = $('#name').attr("value");
phone = $('#phone').attr("value");
url = 'http://101.132.146.155/users/gttddki?name='+name+'&phone='+phone;
            $.ajax({
            type:"get",
                url: url,
                error: function(a,b){
                  var  toast;
                  toast = $('#toast-info').ZPopup('toast');
                  toast.showToast('请稍后重试');
                },
                success: function(a){
                  $('#input_form').hide();
                  $('#byebyemsg').show();
                },
                timeout: 3000
            });
            return false;
  };
