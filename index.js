$( document ).ready(function() {
    $("select").change(function(){
    	 $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="color"){
                $(".section").hide();
                $(".color").show();
            }
            else if($(this).attr("value")=="distance"){
                $(".section").hide();
                $(".distance").show();
            }
            
         });
	}).change();
    $(".time").click(function(){
        var time = $('#time').val();
        var speed = $('#speed').val();
        var s = speed*(5/18)
        var t = time*60
        var d = (s*t/1000).toFixed(2)
        if($('.dist').length <= 0){
            if (time != '' && speed != '' ) {
                var addDiv = $('<div class="dist">'+ d +"Km"+'</div>');
                $('#Right-block').append(addDiv);
            }
        }
    });
    $( "#time , #speed" ).keyup(function() {
        $('.dist').remove();
    });

     $('.color').click(function(){
        var r = $('#red').val()+",";
        var g = $('#green').val()+",";
        var b = $('#blue').val();
        var rgb = "rgb"+"("+r+g+b+")";
         $("#Right-block").css("background-color", rgb);
      })
});
function changevalue(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 255) input.value = 255;
  }