gsap.to( "#nav",{
        backgroundColor:"black",
        height:"80px",
        duration:"0.5",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10% ",
        end: "top -11%  ",
        scrub:2
    }
    
    }
)
gsap.to("#main",{

    backgroundColor:"black",
    duration:"0.5",
    scrollTrigger:{
trigger:"#main",
scroll:"body",
scrub:2,
start:"top -20%",
end:"top -100%"
    }
}
)

// mouse move

var blur=document.querySelector("#cursorblur")
var cursor=document.querySelector("#cursor")

document.addEventListener("mousemove",function(a){
    
    cursor.style.left=a.x + "px";
    cursor.style.top=a.y + "px";
blur.style.left=a.x-150 + "px";
    blur.style.top=a.y- 150 + "px";
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(a){
    a.addEventListener("mouseenter",function(){
     cursor.style.scale="3";
     cursor.style.border="1px solid #fff";
     cursor.style.backgroundColor="transparent";
        
    })
    a.addEventListener("mouseleave",function(){
      
        cursor.style.scale="1.5";
        cursor.style.border="0px solid transparent";
        cursor.style.backgroundColor="#95c11e";
           
       })
})



gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity : 0, 
    duration :2,
//    stagger : 0.4,
  scrollTrigger:{
    trigger:"#about-us",
   scroll:"body",
//    markers:true,
   start:"top 60%",
   end:"top 50%",
   scrub:3,
  }

}
)
gsap.from(".card",{
    scale:0.1,
    opacity : 0, 
    duration :0.5,
//    stagger : 0.4,
  scrollTrigger:{
    trigger:".card",
   scroll:"body",
//    markers:true,
   start:"top 70%",
   end:"top 65%",
   scrub:3,
  }

}
)

gsap.from("#icon1",{

y:70,
x:10,
opacity:0,
duration:3,
scrollTrigger:{
    trigger:"#icon1 ",
    scroll:"body",
    start:"top 70%",
    end :"top 5%",
    scrub:2,
    // markers:true
}

})

gsap.from("#icon2",{

    y:70,
    x:10,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#icon1 ",
        scroll:"body",
        start:"top 30%",
        end :"top 50%",
        scrub:2,
        // markers:true
    }
    
    })

    gsap.from("#page4 h1",{

        y:50,
       scrollTrigger:{
trigger:"#page4 h1",
scroll:"body",
// markers:true,
start:"top 75%",
end:"top 70%",
scrub:2,
       }
       




    })