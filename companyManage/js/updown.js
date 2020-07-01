  var list=$(".list");
  $('.list').click(according);
  function according(e){
   e.stopPropagation();
   if($(this).hasClass("active")){
    $(this).removeClass("active");
  }
  else{
    console.log($(this).parent().parent());
    if($(this).parent().parent().hasClass("active")){
     $(this).addClass("active");
   }
   else{
     $.each(list,function(index,obj){
      $(obj).removeClass("active");
    });
     $(this).addClass("active");
   }
 }
}