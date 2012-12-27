$(document).ready(function(){
    setTimeout(function(){
        $('#hero h2').addClass("magic");}, 500);

    $('#berry').click(function(e) {
      $('#berryexpand').lightbox_me({
        centered: true
        });
    e.preventDefault();
});

});
