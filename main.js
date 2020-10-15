name2=[];
function submit(){
    var Display=[];

    for(var j=1; j<=4;j++){
        var name1=document.getElementById("name_of_the_student_"+j).value;
        console.log(name1);
        name2.push(name1);
    }
    console.log(name2);

    var L=name2.length;
    console.log(L);

    for(var K=0;K<L;K++){
        Display.push("<h4> Name - "+name2[K]+"</h4>");
        console.log(Display);

    }
    document.getElementById("display_name_with_commas").innerHTML=Display;

    var r=Display.join(" ");
    console.log(r);
    document.getElementById("display_name_without_commas").innerHTML=r;

    document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block";

}
function sorting(){
    name2.sort();
    console.log(name2);
    var display_1=[];

    var L=name2.length;
    console.log(L);

    for(var K=0;K<L;K++){
        display_1.push("<h4> Name - "+name2[K]+"</h4>");
        console.log(display_1);

    }
    document.getElementById("display_name_with_commas").innerHTML=display_1;

    var r1=display_1.join(" ");
    console.log(r1);
    document.getElementById("display_name_without_commas").innerHTML=r1;

}