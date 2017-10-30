  document.querySelector('#btn_send').onclick = function () {
name = $('#name').attr("value");
phone = $('#phone').attr("value");
url = 'http://casio.maxantad.com/users/gttddki?name='+name+'&phone='+phone;
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

function getPrizeURL() {
    var prize;
    $.getJSON('http://casio.maxantad.com/users/gttddki/prize', function(data){
    })
    prize = 4;
    
    if (prize == 4) {
      url = "p5.html"
    } else {
      url = "p6.html?p=" + prize
    }
    return url;
}

