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

function fetchCoupon() {
  window.location = "http://coupon.m.jd.com/coupons/show.action?key=c9400b2e688843119613987a5d4ed962&roleId=8697713&to=http://sale.jd.com/m/act/BoSnJdIValMH.html"
}

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};

function setUserId() {
      var LS = window.localStorage;
      if (LS.getItem('casio_user_id') === null) {
        uuid = generateUUID();
        LS.setItem('casio_user_id', uuid);
      } else {
        uuid = LS.getItem('casio_user_id');
      }
      return uuid;
}

function getUserId() {
      var LS = window.localStorage;
      uuid = LS.getItem('casio_user_id');
      return uuid;
}
