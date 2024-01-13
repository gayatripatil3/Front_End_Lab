$(document).ready(function () {
$('#second').click(function(){
    document.getElementById("fourth").innerHTML="HIIII2"
})
$('#fourth').click(function(){
    document.getElementById('fourth').innerHTML="HIIIII4"
})
$(".odd").mouseenter(function(){
    console.log("Odd number line");
})
$('h2').click(function(){
    var text="1. Mouse Events : click, dbclick, mouseenter, mouseleave";
    var text1=" 2. Keyboard events : keypress, keydown, MediaKeyStatusMap";
    document.getElementById('show').innerHTML=text;
    document.getElementById('show1').innerHTML=text1;
})
// $('.show_hide').hide(5000)
// $('.show_hide').show(5000);
$('#but1').click(function(){
    $('.show_hide').toggle(5000);
})
// $('#but1').click(function(){
//     $('.show_hide').fadeIn(5000);
// })
// $('#but1').click(function(){
//     $('.show_hide').fadeOut(5000);
// })
// $('#but1').click(function(){
//     $('.show_hide').fadeTo(5000);
// })
// $('#but1').click(function(){
//     $('.show_hide').fadeToggle(5000);
// })




$('.multiple').on(
    {
        click:function(){
            console.log("Clicked");
        // document.getElementById("mul1").innerHTML="Double Clicked";
              }
    },
    {
        mouseenter:function(){
            console.log("Mouse Enter");
            // document.getElementById("mul2").innerHTML=" Clicked";
        }
    },
    {
        dbclick:function(){
            document.getElementById('mul1').innerHTML="Mouse Entered"+(i++)
        }
    },
    {
        mouseleave:function(){
            document.getElementById('mul1').innerHTML="Mouse left"+(i++)
        }
    },
    {
        keyup:function(){
            document.getElementById('mul1').innerHTML="KeyUp"+(this) 
        }
    }
    
    )



// There are three types of selectos,
//   1.Id selector - $(#id).action() 
//   2. Class selector$(.class).action()
//   3. element selector$('element').action()

     
         console.log($);

//    $('selector').action()

//          $('h1').click(function () {
//             $(this).hide()
//         })
     })