var task1head = document.createElement('h1');
task1head.innerText = "Task1";
task1head.setAttribute('class','text-center');


var ts11 = document.createElement('h3');
ts11.setAttribute('class','text-center');
ts11.innerHTML = "1. Design a Unique Eight digit Random number generator in DOM";

var span1 = document.createElement('span');
span1.setAttribute('class','d-grid gap-2 col-6 mx-auto');

var span2 = document.createElement('span');
span2.setAttribute('class','d-grid gap-2 col-6 mx-auto');

var change = document.createElement('input');
change.setAttribute('type','button');
change.setAttribute('class','btn btn-primary text-center');
change.setAttribute('value','generate');
change.setAttribute('id','change');
change.setAttribute('onClick','digitGenerater()');

var ans1 = document.createElement('input');
ans1.setAttribute('type','button');
ans1.setAttribute('class','btn btn-danger text-center');
ans1.setAttribute('value','output');
ans1.setAttribute('id','ans');

function digitGenerater(){
    var digit = Math.floor(Math.random()*10000000000);
    var ele = Array.from(String(digit),Number);
    random(ele);
    clear(digit);
}
function random(e){
    for(var i=0;i<10;i++)
    {
        for(var j = 0;j<10;j++)
        {
            if(i!=j && e[i]==e[j])
            {
                digitGenerater();
            }
        }
    }
}
function clear(e){
    var temp = Array.from(String(e),Number);
    var vel = "";
    for(i=0; i<8;i++)
    {
        vel = vel+""+temp[i];
    }
    document.getElementById('ans').value = vel;
}

var task2head = document.createElement('h1');
task2head.innerText = "Task2";
task2head.setAttribute('class','text-center');

var ts12 = document.createElement('h3');
ts12.setAttribute('class','text-center');
ts12.innerHTML = "2. Date Manipulation in DOM";

var span3 = document.createElement('span');
span3.setAttribute('class','d-grid gap-2 col-6 mx-auto');

var div1 = document.createElement('div');
div1.setAttribute('class','input-group input-group-lg');

var div2 = document.createElement('div');
div2.setAttribute('class','input-group input-group-lg');

var change2 = document.createElement('input');
change2.setAttribute('type','button');
change2.setAttribute('class','btn btn-primary');
change2.setAttribute('value','generate');
change2.setAttribute('onClick','date()');

var txt = document.createElement('input');
txt.setAttribute('type','date');
txt.setAttribute('value','1998-07-03');
txt.setAttribute('class','form-control');
txt.setAttribute('aria-label','Sizing example input');
txt.setAttribute('aria-describedby','inputGroup-sizing-lg');
txt.setAttribute('id','datevalue');

function date(){
    var x = document.getElementById('datevalue').value;
    var d = new Date();
    var totdate = x.split('-');
    var year = totdate[0];
    var month = totdate[1];
    var day = totdate[2];
    var yearcount;
    //console.log(d.getFullYear());
    if((d.getMonth()+1) > month)
    {
         yearcount = (d.getFullYear() - year);
        //  console.log(yearcount)
    }
    else
    {
        yearcount = (d.getFullYear()-year)-1;
        // console.log(yearcount);
    }
    var monthcount;
    if((d.getMonth()+1) <month)
    {
        var temp1 = (yearcount+1)*12;
        var val1 = month - d.getMonth();
        val1 = temp1+val1-10;
        monthcount = val1;
        // console.log(val1);
    }
    else
    {
        var temp2 = yearcount*12;
        var val2 = d.getMonth() - month;
        temp2 = temp2 + val2;
        if(day >= d.getDay())
        {
            monthcount = temp2;
            // console.log(temp2);
        }
        else
        {
            temp2 = temp2+1;
            // console.log(temp2);
            monthcount = temp2;   
        }
    }
    var leap = parseInt(yearcount/4);
    var tot = d.getFullYear() - year - 1;
    var daycount = (tot*365) + leap;
    var seccount = daycount*86400;
    var milseccount = seccount*1000;


     document.getElementById('date').innerHTML = "Year count: " + yearcount +"<br> "+ "Month count: " + monthcount +"<br> "+ "Day count: " + daycount +"<br>"+ "Seconds count: " + seccount +"<br>"+ "milliSeconds count: " + milseccount ;
}

var dateop = document.createElement('h3');
dateop.setAttribute('id','date');

div2.append(dateop);

div1.append(txt);
span1.append(change);
span2.appendChild(ans1);
span3.append(change2,div1,div2);
document.body.append(task1head, ts11, span1, span2,task2head,ts12,span3);