

  // LINK TO TABS
$(document).ready(() => {
    var url = window.location.href;
    if (url.indexOf("#") > 0){
    var activeTab = url.substring(url.indexOf("#") + 1);
      $('.nav[role="tablist"] a[href="#'+activeTab+'"]').tab('show');
    }
  
    $('a[role="tab"]').on("click", function() {
      var newUrl;
      const hash = $(this).attr("href");
        newUrl = url.split("#")[0] + hash;
      history.replaceState(null, null, newUrl);
    });
  });



const ari = "Arithmancy<br><div class='location'> (Museum)</div>";
const alc = "Alchemy<br><div class='location'> (Alchemy Cellar)</div>";
const md = "Magical Defence<br><div class='location'> (Gazebo)</div>";
const herb = "Herbology<br><div class='location'> (Marble Hall)</div>";
const invo = "Invocation<br><div class='location'> (Inner Courtyard)</div>";
const run = "Runic Magic<br><div class='location'> (Museum)</div>";
const cs = "Conflux Studies<br><div class='location'> (Library)</div>";
const beast = "Beastology<br><div class='location'> (Dungeon)</div>";
const mm = "Mind Magic<br><div class='location'> (Auditorium)</div>";
const mt = "Magical Theory<br><div class='location'> (Library)</div>";
const rm = "Ritual Magic<br><div class='location'> (Marble Hall)</div>";
const tech = "Technomancy<br><div class='location'> (Auditorium)</div>";

//function to show #classResult. Couldn't figure out how to make a conditional to make it appear once year and path are chosen, so injecting it manually to very timetable conditional instead  

   

function show() {
    document.querySelector("#intro").style.display = "none";
    document.querySelector("#classResult").style.visibility = "visible";
}

$(document).ready(function () {
    $('input[type="radio"]').on("change", function () {
        //making chosen radio options to variables
        const $year = $('input[name="year"]:checked');
        const $path = $('input[name="path"]:checked');


        //updating html in #classResult
        //JUNIOR
        if ($year.val() == "junior" && $path.val() == "artificer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(md);
            $("#lesson2").html(ari);
            $("#lesson3").html(mt);
            $("#lesson4").html(tech);
            $("#lesson5").html(run);
            $("#lesson6").html(cs);

        } else if ($year.val() == "junior" && $path.val() == "cursebreaker") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(invo);
            $("#lesson2").html(ari);
            $("#lesson3").html(mt);
            $("#lesson4").html(rm);
            $("#lesson5").html(run);
            $("#lesson6").html(cs);

        } else if ($year.val() == "junior" && $path.val() == "crypto") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(invo);
            $("#lesson2").html(beast);
            $("#lesson3").html(herb);
            $("#lesson4").html(rm);
            $("#lesson5").html(mm);
            $("#lesson6").html(alc);

        } else if ($year.val() == "junior" && $path.val() == "healer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(md);
            $("#lesson2").html(beast);
            $("#lesson3").html(herb);
            $("#lesson4").html(rm);
            $("#lesson5").html(mm);
            $("#lesson6").html(alc);

        } else if ($year.val() == "junior" && $path.val() == "guardian") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(md);
            $("#lesson2").html(beast);
            $("#lesson3").html(mt);
            $("#lesson4").html(tech);
            $("#lesson5").html(mm);
            $("#lesson6").html(cs);


            //SOPHOMORE
        } else if ($year.val() == "sophomore" && $path.val() == "artificer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(run);
            $("#lesson2").html(cs);
            $("#lesson3").html(md);
            $("#lesson4").html(ari);
            $("#lesson5").html(mt);
            $("#lesson6").html(tech);

        } else if ($year.val() == "sophomore" && $path.val() == "cursebreaker") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(run);
            $("#lesson2").html(cs);
            $("#lesson3").html(invo);
            $("#lesson4").html(ari);
            $("#lesson5").html(mt);
            $("#lesson6").html(rm);

        } else if ($year.val() == "sophomore" && $path.val() == "crypto") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mm);
            $("#lesson2").html(alc);
            $("#lesson3").html(invo);
            $("#lesson4").html(beast);
            $("#lesson5").html(herb);
            $("#lesson6").html(rm);

        } else if ($year.val() == "sophomore" && $path.val() == "healer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mm);
            $("#lesson2").html(alc);
            $("#lesson3").html(md);
            $("#lesson4").html(beast);
            $("#lesson5").html(herb);
            $("#lesson6").html(rm);

        } else if ($year.val() == "sophomore" && $path.val() == "guardian") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mm);
            $("#lesson2").html(cs);
            $("#lesson3").html(md);
            $("#lesson4").html(beast);
            $("#lesson5").html(mt);
            $("#lesson6").html(tech);


            //SENIOR
        } else if ($year.val() == "senior" && $path.val() == "artificer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mt);
            $("#lesson2").html(tech);
            $("#lesson3").html(run);
            $("#lesson4").html(cs);
            $("#lesson5").html(md);
            $("#lesson6").html(ari);

        } else if ($year.val() == "senior" && $path.val() == "cursebreaker") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mt);
            $("#lesson2").html(rm);
            $("#lesson3").html(run);
            $("#lesson4").html(cs);
            $("#lesson5").html(invo);
            $("#lesson6").html(ari);

        } else if ($year.val() == "senior" && $path.val() == "crypto") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(herb);
            $("#lesson2").html(rm);
            $("#lesson3").html(mm);
            $("#lesson4").html(alc);
            $("#lesson5").html(invo);
            $("#lesson6").html(beast);

        } else if ($year.val() == "senior" && $path.val() == "healer") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(herb);
            $("#lesson2").html(rm);
            $("#lesson3").html(mm);
            $("#lesson4").html(alc);
            $("#lesson5").html(md);
            $("#lesson6").html(beast);

        } else if ($year.val() == "senior" && $path.val() == "guardian") {
            show(); //displaying the hidden "classResult"
            $("#lesson1").html(mt);
            $("#lesson2").html(tech);
            $("#lesson3").html(mm);
            $("#lesson4").html(cs);
            $("#lesson5").html(md);
            $("#lesson6").html(beast);

        }

    });
});

