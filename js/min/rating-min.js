$(document).ready(function(){$(".star-rating-input").css({cursor:"pointer"}),$(".star-rating-input").hover(function(){},function(){$(this).data("chosen")!==!0&&($(this).find("input").val()>0||($(this).find(".star-rating-star").removeClass("choosing"),$(this).find(".star-rating-star").removeClass("active-choosing"),$(this).find(".star-rating-star").addClass("disabled-choosing")))}),$(".star-rating-input").mousemove(function(s){if($(this).data()||$(this).data("chosen",!1),$(this).data("chosen")!==!0&&!($(this).find("input").val()>0)){var a=5,i=$(this).offset(),t=i.left,n=i.top,o=$(this).find(".glyphicon").width(),r=6*o,e=s.pageX-t,c=e/r,d=c*a;if(1>=c){$(this).data("current_score",c.toFixed(2)),$(this).find(".active").css({width:6*c+"em"});var h=0;$(this).find(".star-rating-star").each(function(s,a){d>h?($(a).addClass("choosing"),$(a).removeClass("disabled-choosing"),$(a).removeClass("active-choosing")):($(a).addClass("disabled-choosing"),$(a).removeClass("choosing"),$(a).removeClass("active-choosing")),h++})}}}),$(".star-rating-input .star-rating-star").click(function(s){console.log("1");var a=$(this).parents(".star-rating-input");$(a).data("chosen",!0),$(a).find(".active-choosing").removeClass("choosing");var i=5,t=parseInt($(this).attr("id").replace("rating-star-",""));$(a).data("current_score",t/i);var n=0;$(a).find(".star-rating-star").each(function(s,a){t>n?($(a).addClass("active-choosing"),$(a).removeClass("disabled-choosing"),$(a).removeClass("choosing")):($(a).addClass("disabled-choosing"),$(a).removeClass("choosing"),$(a).removeClass("active-choosing")),n++}),$(a).find("input").val($(a).data("current_score"))}),$(".star-rating-input .disabled").click(function(s){})});