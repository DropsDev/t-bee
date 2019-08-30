

$(document).ready(function () {
    $('.table.payment').on('click', 'td:not(last-child)', function (e) {
        location.href = "payment-detail.html"
    });
    $('.table.transaction').on('click', 'td:not(last-child)', function (e) {
        location.href = "transaction-detail.html"
    });
})
    function jsToggle(element) {
        $(element).slideToggle();
    }