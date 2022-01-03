$(document).ready(function () {
    get_rate();
});

function get_rate() {
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/rate",
        data: {},
        success: function (response) {
            let now_rate = response['rate'];
            $('#now-rate').text(now_rate);
        }
    })
}

function order() {
    alert('주문이 완료되었습니다!');
}
