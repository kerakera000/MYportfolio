//ナビバー
$(document).ready(function() {
    $('.drawer').drawer();
});

//ドロップダウンメニュー
new Vue({
    el: '#app',
    data:{
        isActive1:false,
        isActive2:false,
    },
})

new Vue({
    el: '#app2',
    data:{
        isActive3:false,
        isActive4:false,
    },
})
