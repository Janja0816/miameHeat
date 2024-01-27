console.log("ok");

window.onload=function(){

menuFun();

var links=[
    {
        id:"1",
        icon:"fa-brands fa-square-facebook",
        href:"#"
    },
    {
        id:"2",
        icon:"fa-brands fa-instagram",
        href:"#"
    },
    {
        id:"3",
        icon:"fa-brands fa-twitter",
        href:"#"
    },
    {
        id:"4",
        icon:"fa-solid fa-square-rss",
        href:"rss.xml"
    },
    {
        id:"5",
        icon:"fa-solid fa-sitemap",
        href:"sitemap.xml"
    }

]
var linksPrint=`
<div class="lineUl">
    <ul class="lineUl">`;
   for(let l of links)
   {
    if(l.id>0 && l.id<4){
        linksPrint+=`<li><a href="${l.href}"><i class="${l.icon}"></i></a></li>`
    }
   }
   linksPrint+=` </ul>
   </div>
   <div class="lineUl">
       <ul class="lineUl">`;
   for(let l of links)
   {
 
        if(l.id>3 && l.id<6)
        {
            linksPrint+=`<li><a href="${l.href}"><i class="${l.icon}"></i></a></li>`;
            console.log(l);
        }
   }
   linksPrint+=`</ul>
   </div>`;
document.getElementById("line").innerHTML=linksPrint;
  

function menuFun()
{
    var menu=[
        {
            id:"1",
            href:"index.html",
            name:"home"
        },
        {
            id:"2",
            href:"#news",
            name:"news"
           
        },
        {
            id:"3",
            href:"#team",
            name:"team"
        },
        {
            id:"4",
            href:"#forma",
            name:"contact"
        },
        {
            id:"5",
            href:"#author",
            name:"author"
        }
    ]

    var menuPrint=`<div id="logo">
    <img src="assets/img/team-logo.png" alt="team-logo">
</div>
<button id="responsive"><img src="assets/img/hamburger.png"/></button>
<div id="listMenu">
    <ul>`;
    for(var m in menu){
        menuPrint+=` <li><a href="${menu[m].href}">${menu[m].name}</a></li>`;
    }
    menuPrint+=`</div>`;
    document.getElementById("menu").innerHTML=menuPrint;
    
    var buttonResponsive=document.getElementById("responsive");
    $(buttonResponsive).click(menuResponsive);
    function menuResponsive(){
        var menuResp=document.getElementById("menuResp");
        
        var menuRespPrint=`<ul>`
       
        for(var r in menu)
        {
           menuRespPrint+=`<li><a href="${menu[r].href}">${menu[r].name}</a></li>`;
            // console.log(menuView);
        }
        
      
        menuResp.innerHTML=menuRespPrint;

        // $(buttonResponsive).fadeIn(500);
        buttonResponsive.onclick=function()
        {
            $(menuResp).toggle(500);
        }
       
       $(window).on('resize', function(event){
        var windowWidth = $(window).width();
            if(windowWidth > 1000){
               $(menuResp).hide(500);
            }
       })
    }

}

var countDownDate = new Date("Dec 22, 2022 19:50:00").getTime();
var interval = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("gameTimer").innerHTML = ` <div class="container">
    <div class="row">
        <div class=" col-lg-2 col-sm-3 card mb-3 pt-1">${days} <br/> <span class="date"> days </span></div>
        <div class=" col-lg-2 col-sm-3 card mb-3 pt-1">${hours} <br/> <span class="date"> hours </span></div>
        <div class=" col-lg-2 col-sm-3  card mb-3 pt-1">${minutes} <br/><span class="date"> minutes </span></div>
    </div>
</div>`
    if (distance < 0) {
    clearInterval(interval);
    document.getElementById("gameTimer").innerHTML = "EXPIRED";
  }
}, 200);

var matches=[
    {
        home:"assets/img/logo.png",
        homeName:"Miami Heat",
        result:"99-90",
        guests:"assets/img/teamBlue.jpg",
        guestName:"Blue"
    },
    {
        home:"assets/img/logo.png",
        homeName:"Miami Heat",
        result:"87-69",
        guests:"assets/img/teamKings.jpg",
        guestName:"Kings "
    },
    {
        home:"assets/img/logo.png",
        homeName:"Miami Heat",
        result:"97-84",
        guests:"assets/img/teamNBA.png",
        guestName:"NBA team"
    },
    {
        home:"assets/img/logo.png",
        homeName:"Miami Heat",
        result:"71-54",
        guests:"assets/img/teamToronto.jpg",
        guestName:"Toronto"
    },
]

var matchPrint=`<h3 class="text-center mt-5 mb-5">Latest matches</h3>

<div class="row ">
    `;
    for(match of matches){
       matchPrint+=`<div class="col-lg-12 col-md-12 d-flex justify-content-between mt-3 ">
        <div class="col-lg-3 col-md-3 kartica "><img src="${match.home}" alt="${match.homeName}"><figcaption >${match.homeName}</figcaption>  </div>
       <div class="col-lg-3 col-md-3  result">${match.result}</div>
       <div class="col-lg-3 col-md-3 kartica  "><img src="${match.guests}" alt="${match.guestName}"><figcaption>${match.guestName}</figcaption> </div>
       </div>`
    }
    matchPrint+=`</div>`;
    document.getElementById("matches").innerHTML=matchPrint;


    var players=[
        {
            id:"1",
            name:"BAM ADEBAYO",
            height:"6'9",
            wight:"255LBS",
            dob:"7/18/1997",
            pts:9,
            ats:19,
            fc:28,
            img:"assets/img/bam.png",
            dataimagehd:"assets/img/bam.png",
            number:"13"
        },
        {
            id:"2",
            name:"JIMMY BUTLER",
            height:"6'7",
            wight:"230LBS",
            dob:"09/14/1989",
            pts:9,
            ats:12,
            fc:24,
            img:"assets/img/jimmy.png",
            dataimagehd:"assets/img/jimmy.png",
            number:"22"
           
        },
        {
            id:"3",
            name:"JAMAL CAIN",
            height:"6'7",
            wight:"191LBS",
            dob:"3/20/1990",
            pts:7,
            ats:13,
            fc:21,
            img:"assets/img/jamal.png",
            dataimagehd:"assets/img/jamal.png",
            number:"8"
        },
        {
            id:"4",
            name:"DEWAYNE DEDMON",
            height:"7'0",
            wight:"245LBS",
            dob:"8/12/1989",
            pts:4,
            ats:11,
            fc:8,
            img:"assets/img/devayne.png",
            dataimagehd:"assets/img/devayne.png",
            number:"21"
        },
        {
            id:"5",
            name:"UDONIS HASLEM",
            height:"6'8",
            wight:"235LBS",
            dob:"7/18/1997",
            pts:4,
            ats:23,
            fc:18,
            img:"assets/img/udonisHaslem.png",
            dataimagehd:"assets/img/udonisHaslem.png",
            number:"40"
        },
        {
            id:"6",
            name:"TYLER HERRO",
            height:"6'5",
            wight:"195LBS",
            dob:"01/20/2000",
            pts:3,
            ats:7,
            fc:16,
            img:"assets/img/tayler.png",
            dataimagehd:"assets/img/tayler.png",
            number:"14"
        },
        {
            id:"7",
            name:"CALEB MARTIN",
            height:"6'5",
            wight:"205LBS",
            dob:"09/28/1995",
            pts:10,
            ats:11,
            fc:13,
            img:"assets/img/caleb.png",
            dataimagehd:"assets/img/caleb.png",
            number:"16"
        },
        {
            id:"8",
            name:"HAYWOOD HIGHSMITH",
            height:"6'4",
            wight:"220LBS",
            dob:"12/09/1996",
            pts:10,
            ats:12,
            fc:30,
            img:"assets/img/haywood.png",
            dataimagehd:"assets/img/haywood.png",
            number:"24"
        },
        {
            id:"9",
            name:"VICTOR OLADIPO",
            height:"6'4",
            wight:"243LBS",
            dob:"05/04/1992",
            pts:5,
            ats:9,
            fc:12,
            img:"assets/img/victor.png",
            dataimagehd:"assets/img/victor.png",
            number:"4"
        }
    ]

    console.log(players[0].number);
    playersPrint=`
    <h5 class="pt-3">Top 4 players</h5>
    <div class="container">`;
    for(var player of players){
        if(player.id <= 4)
        {
            var score=player.pts+player.ats+player.fc;
            console.log(score);
            playersPrint+=`<div class="buttonPlayers" class="row d-flex justify-content-between mt-5">
            <button class="col-lg-12 row d-flex justify-content-between mt-2 buttPlay" data-pimg=${player.img} data-name=${player.name}  data-id=${player.id} 
            data-pts=${player.pts} data-ats=${player.ats} data-fc=${player.fc} data-number=${player.number}>
            <img class="col-lg-4 col-md-2" src="${player.img}" alt="${player.name} ">
               <figcaption class="col-lg-4 col-md-2"  >${player.name}</figcaption>
                <p class="col-lg-4 col-md-2">${score }</p> </button>
            </div>`;
            console.log(player.id)
        }
      
    }
    playersPrint+=`</div>
    </div>`;

    document.getElementById("bestPlayers").innerHTML=playersPrint;

    $(".buttPlay").click(function(){
       var id=this.dataset.id;
       var name=this.dataset.name;
       var pimg=this.dataset.pimg;
     var ppts=this.dataset.pts;
       var ats=this.dataset.ats;
       var fc =this.dataset.fc;
       var number=this.dataset.number;
   
        switch(id){
            case "1":
                {
                    var bestPlayerView=`
                    <div class="container">
                    <div class="row d-flex justify-content-around mt-5">
                        <div class="col-6"> 
                            <div class="row d-flex flex-column">
                                <span class="number colg-lg-12">${number}</span>
                                <p class="mt-3">${name}</p>
                                <div class="row">
                                <p class="col-lg-6 mt-3">PTS</p>
                                <p class="col-lg-6 mt-3">${ppts}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">ATS</p>
                                <p class="col-lg-6 mt-3">${ats}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">FC</p>
                                <p class="col-lg-6 mt-3">${fc}</p>
                            </div>

                            </div>
                    </div>
                    <img class="col-6" src="${pimg}" alt="${name}">
                </div>
            </div>`

            document.getElementById("pl").innerHTML=bestPlayerView;
                }
                case "2":{
                    var bestPlayerView=`
                    <div class="container">
                    <div class="row d-flex justify-content-around mt-5">
                        <div class="col-6"> 
                            <div class="row d-flex flex-column">
                                <span class="number colg-lg-12">${number}</span>
                                <p class="mt-3">${name}</p>
                                <div class="row">
                                <p class="col-lg-6 mt-3">PTS</p>
                                <p class="col-lg-6 mt-3">${ppts}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">ATS</p>
                                <p class="col-lg-6 mt-3">${ats}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">FC</p>
                                <p class="col-lg-6 mt-3">${fc}</p>
                            </div>

                            </div>
                    </div>
                    <img class="col-6" src="${pimg}" alt="${name}">
                </div>
            </div>`

            document.getElementById("pl").innerHTML=bestPlayerView;
                }
                case "3":{
                    var bestPlayerView=`
                    <div class="container">
                    <div class="row d-flex justify-content-around mt-5">
                        <div class="col-6"> 
                            <div class="row d-flex flex-column">
                                <span class="number colg-lg-12">${number}</span>
                                <p class="mt-3">${name}</p>
                                <div class="row">
                                <p class="col-lg-6 mt-3">PTS</p>
                                <p class="col-lg-6 mt-3">${ppts}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">ATS</p>
                                <p class="col-lg-6 mt-3">${ats}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">FC</p>
                                <p class="col-lg-6 mt-3">${fc}</p>
                            </div>

                            </div>
                    </div>
                    <img class="col-6 " src="${pimg}" alt="${name}">
                </div>
            </div>`

            document.getElementById("pl").innerHTML=bestPlayerView;
                }
                case"4":{
                    var bestPlayerView=`
                    <div class="container">
                    <div class="row d-flex justify-content-around mt-5">
                        <div class="col-6"> 
                            <div class="row d-flex flex-column">
                                <span class="number colg-lg-12">${number}</span>
                                <p class="mt-3">${name}</p>
                                <div class="row">
                                <p class="col-lg-6 mt-3">PTS</p>
                                <p class="col-lg-6 mt-3">${ppts}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">ATS</p>
                                <p class="col-lg-6 mt-3">${ats}</p>
                            </div>
                            <div class="row">
                                <p class="col-lg-6 mt-3">FC</p>
                                <p class="col-lg-6 mt-3">${fc}</p>
                            </div>

                            </div>
                    </div>
                    <img class="col-6" src="${pimg}" alt="${name}">
                </div>
            </div>`

            document.getElementById("pl").innerHTML=bestPlayerView;
                }
        }
    });

    var print=`<div class="container">
    <div class="row d-flex justify-content-around mt-5">
        <div class="col-6"> 
            <div class="row d-flex flex-column">
                <span class="number colg-lg-12">${players[0].number}</span>
                <p class="mt-3">${players[0].name}</p>
                <div class="row">
                <p class="col-lg-6 mt-3">PTS</p>
                <p class="col-lg-6 mt-3">${players[0].pts}</p>
            </div>
            <div class="row">
                <p class="col-lg-6 mt-3">ATS</p>
                <p class="col-lg-6 mt-3">${players[0].ats}</p>
            </div>
            <div class="row">
                <p class="col-lg-6 mt-3">FC</p>
                <p class="col-lg-6 mt-3">${players[0].fc}</p>
            </div>

            </div>
    </div>
    <img class="col-6" src="${players[0].img}" alt="${players[0].name}">
</div>
</div>`;

document.getElementById("pl").innerHTML=print;

var news=[
    {
        id:"1",
        src:"assets/img/newsMyVote.jpg",
        caption:"My Future. My Voice. My Vote Event Recap",
        content:"The Miami HEAT teamed up with Miami-Dade County Public Schools and Miami Dade College, North Campus for 'My Future. My Voice. My Vote.'inspiring young people to become active participants in the democratic process through the school district’s existing Voter Registration Program.",
        date:"12/03/2022",
        captionMore:`The Miami HEAT teamed up with Miami-Dade County Public Schools and Miami Dade College, North Campus for 'My Future. My Voice. My Vote.' inspiring young people to become active participants in the democratic process through the school district’s existing Voter Registration Program. To support this effort, the HEAT transported up to 500 registered students to a Miami-Dade County Elections Department Early Voting location so they could cast their ballots, which, in many cases, was their first ever ballots casted. Additionally, the HEAT hosted a rally to build excitement around civic engagement and provided Papa John’s Pizza boxes and Aquafina water bottles to the students for lunch.`
    },
    {
        id:"2",
        src:"assets/img/newsAthlete.jpg",
        caption:"Coup’s Takeaways: Pistons Ride 38-23 Fourth Quarter To Victory Over HEAT As Herro Scores 34  ",
        content:"Following a similar script to the one that played out in losses to the shorthanded Grizzlies and the Pistons, the HEAT were allowing a less-talented team to hang around for multiple quarters as they struggled to contain each area of the court on the defensive end. The Spurs, for their part, weren’t content to stay within arm’s reach.",
        date:"10/29/2022",
        captionMore:"They were ahead almost more often than they trailed, up 59-57 at the break, getting plenty of work done in the paint. It looked like the HEAT were going to start pulling away in the third after Tyler Herro hit four consecutive threes to re-take the lead, but the Spurs responded punch-for-punch and as they kept driving – helped along by some offensive rebounds – they led, once again, 86-84 after three. Then 103-98 with just under five minutes to play. And 107-103 with three and a half left. Every HEAT action was met with an equal and opposite reaction from the Spurs, looking like a far more veteran group than their youth would indicate. Keldon Johnson (21 points on 15 shots) kept the Spurs moving while it was Devin Vassell (18 points), coming off the bench, who hit the tough jumpers to keep his team out in front."
    },
    {
        id:"3",
        src:"assets/img/newsJimmy.png",
        caption:"Coup’s Takeaways: Jimmy Butler Keeps Window Open But HEAT Drop Clutch Game To Spurs",
        content:"This one went in the direction of last night in Memphis. Miami got off to a great start, leading by as much as 11 in the early stages, as they looked like the far more organized, coherent team on both ends of the floor.  But then Bam Adebayo picked up his second foul – with Miami missing a number of rotation players including Jimmy Butler ",
        date:"8/15/2022",
       captionMore:" This one went in the direction of last night in Memphis. Miami got off to a great start, leading by as much as 11 in the early stages, as they looked like the far more organized, coherent team on both ends of the floor. But then Bam Adebayo picked up his second foul – with Miami missing a number of rotation players including Jimmy Butler – and the Pistons started to make their move as the HEAT couldn’t put their opponent away. The difference in this one was Memphis made their second-quarter push with paint scoring while Detroit, who led 43-38 with a few minutes to play in the second, did it by making nine of their first 18 attempts from the arc. That hot shooting – granted, they were getting plenty of open looks as Miami dipped their toes back into Zone Lake, before the off-dribble shots started pouring in – continued throughout, particularly in the form of Bojan Bogdanovic (28 points, 6-of-8 from three, Detroit’s only starter in double digits), as Detroit re-took a five-point going into the fourth."
    }
]

var printNews=`  <div class="container">
<h6>Team news</h6>
<div class="row">`;
for(var n in news){
    printNews+=`<div class="col col-lg-4 col-12">
    <button class="newsButton" data-id=${news[n].id}> <img class="col-12" src="${news[n].src}" alt="${news[n].caption}"></button>
      <figcaption class="col-12">${news[n].caption}</figcaption>
      <p class="col-12">${news[n].content}</p>
  </div>`
}
printNews+=` </div>

</div>`;
document.getElementById("news").innerHTML=printNews;


$(".newsButton").click(function(){
    var id=this.dataset.id;
   var modal=document.getElementById("modalNews");
   var divModal=document.getElementById("modalDiv");
 

   for(var newsModal of news){
    if(newsModal.id==id) divModal.innerHTML=`<div><p class="modalText">${newsModal.captionMore}</p> <br/> <p class="modalText">${newsModal.date}</p> </div>`
   }

   $(modal).fadeIn(500);

   var closeButt=document.getElementById("close");
   $(closeButt).click(function()
   {
       $(modal).fadeOut(500);
   })
})

let galleryPrint=
`
<div class="container">
    <div class="row">
`
for( var p of players)
{
  galleryPrint+=`<div class="col col-lg-4 col-12"><img class="col-12 mt-5"  src="${p.img}" data-image-hd="${p.dataimagehd}" alt="${p.name}" /> <figcaption class="col-lg-4 col-md-2" >${p.name}</figcaption></div>`

}

galleryPrint+=`</div>
</div> </div>`
document.getElementById("team").innerHTML=galleryPrint;


function footerPrint(){
    var getFooter=document.getElementById("footerContent");
    var divFirst=document.createElement("div");
    var pFirst=document.createElement("p");
    pFirst.innerHTML="	&#169; Predrag Stijović 258/22";
    divFirst.append(pFirst);
    getFooter.append(divFirst);
    var divSecond=document.createElement("div");
    var documentation=document.createElement("a");
    documentation.href="documenation.png";
    documentation.innerHTML="Documentation"
    divSecond.append(documentation);
    getFooter.append(divSecond)
  }
footerPrint();
jQuery(function() {
	initGallery();
});

function initGallery() {
	jQuery('.gallery').cycleGallery({
		mask: '.mask',
		slideset: '.slideset',
		btnPrev: 'a.btn-prev',
		btnNext: 'a.btn-next',
		activeClass: 'active',
		switchTime: 5000,
		slides: '.slide'
	});
}
$(function(){
    $('.gallery-img img').hide();
    $('#img-1').show();
    
    $('.thumb-img a').click(function(){
      $('.gallery-img img').hide();
      $id = $(this).attr('id');
      $('#img-' +$id).show();
    });
  });

//form 

var regEmail = /^[a-z]((\.|-|_)?[a-z0-9]){2,}@[a-z]((\.|-|_)?[a-z0-9]+){2,}\.[a-z]{2,6}$/i;
var regNameLast =/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
// var errorsArray=new Array;
var errorName=document.getElementById("nameError");
var errorEmail=document.getElementById("emailNameError");
var counter=0;
var arr=new Array;

$("#name").blur(function(){
    if(this.value==""){
        this.style.borderColor="#ff073a";
        // errorsArray.push("Empty field for first and last name");
        errorName.innerHTML="The first and last name field must not be empty.";
        counter++;
        arr.push("prazno ime");
     
    }
    else if(!regNameLast.test(this.value)){
        this.style.borderColor="#ff073a";
        // errorsArray.push("Incorrect first and last name entry");
        errorName.innerHTML="Enter the first and last name with a capital letter (e.g. Predrag Stijović)";
        counter--;
        counter++;
        arr.push("neispravno ime");
    }
    else{
        this.style.borderColor="#228B22";
        // errorsArray.shift(errorsArray[0]);
        // errorsArray.shift(errorsArray[0]);
        // console.log(errorsArray);

    }
})
$("#email").blur(function(){
    if(this.value==""){
        this.style.borderColor="#ff073a";
        // errorsArray.push("Empty field for email");
        errorEmail.innerHTML="The email field must not be empty.";
        counter--;
        counter++;
        arr.push("mejl prazan")
     
    }
    else if(!regEmail.test(this.value)){
        this.style.borderColor="#ff073a";
        // errorsArray.push("Incorrect first and last name entry");
        errorEmail.innerHTML="Enter an email in the correct format (e.g. predragstijović@gmail.com";
        counter++;
        arr.push("neisp mejl")
 
    }
    else{
        this.style.borderColor="#228B22";
        // errorsArray.shift(errorsArray[1]);
        // console.log(errorsArray);

    }
})

const rBs = document.querySelectorAll('input[name="gender"]');
        for(const rB of rBs){
            rB.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                
            }
            else{
                counter++;
            }
        }
var conf=document.getElementById("confirm");
    conf.onchange=function(){


if(conf.checked)
{
    var lblConf=document.getElementById("labelConf");
    var confText=document.createElement("div");
    confText.setAttribute("id","confTextForm");
    var textForm=document.createElement("p");
    textForm.innerHTML="Thank you for wanting to receive news from us.";
    confText.appendChild(textForm);
    console.log(confText);
    lblConf.after(confText);
}
   if(!conf.checked)
   {
    var divConf=document.getElementById("confTextForm");
    divConf.style.display="none";
    counter++;
    arr.push("conf")
   }
}

var topThree=document.createElement("select");
topThree.setAttribute("id","topThree");
var optFirst =  document.createElement("option");
optFirst.text = `Choose`;
        optFirst.value=`0`;
        topThree.append(optFirst);
for(var tt of players)
{
    if(tt.id<=4)
    {
        var opt =  document.createElement("option");
        opt.text = `${tt.name}`;
        opt.value=`${tt.id}`
        topThree.appendChild(opt);
        console.log(opt)
    }
}

var ttlbl=document.getElementById("lblPlayers");
ttlbl.after(topThree);


var spanSelect=document.getElementById("selectError");
console.log(spanSelect)
topThree.onchange=function(){
 
    if(this.value=="0"){
      
        spanSelect.innerHTML="Please select a player.";
        spanSelect.classList.add("badSelect");
        console.log(this.value)
      
        counter++;
        arr.push("igrac")
    }
    else if(this.value=="1" || this.value=="2"  || this.value=="3"  || this.value=="4"  )
    {
        spanSelect.innerHTML="Thank you.";
        spanSelect.classList.add("goodSelect");

    }
}


$("#submitButton").click(function(){
    var nameBtn=document.getElementById("name");
    var mailBtn=document.getElementById("email");
    var successDiv = document.getElementById("success");
    var errorDiv = document.getElementById("error");

    counter = 0;

    successDiv.style.display = "none";
    errorDiv.style.display = "none";

    if(nameBtn.value==""){
        counter++;
    }
    if(mailBtn.value==""){
        counter++;
     
    }

if(!conf.checked)
{
 counter++;
}
if(topThree.value=="0"){
      console.log(topThree.value);
    counter++;
}



if(counter>0)
{
    errorDiv.style.display = "block";
}
else{
    successDiv.style.display = "block";
}

console.log(counter)
})
}













