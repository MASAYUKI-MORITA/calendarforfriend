var december = document.querySelector("#december");

var week = "";
var weekName = ["SUN 日", "MON 月", "TUE 火", "WED 水", "THU 木", "FRI 金", "SAT 土"];
week += "<tr>";
for(var i = 1; i <= 7; i++){
    switch(i % 7){
        case 1:
        week += '<th class="sun">' + weekName[i - 1] + '</th>';
        break;
        case 0:
        week += '<th class="sat">' + weekName[i - 1] + '</th>';
        break;
        default:
        week += "<th>" + weekName[i - 1] + "</th>";
        break;
    }
}
week += "</tr>"

var days = "";
days += "<tr><td></td><td></td>";
for(var i = 1; i <= 31; i++){
    switch(i % 7){
        case 5:
        days += '<td class="sat">' + i + '</td></tr>';
        break;
        case 6:
        days += '<tr><td class="sun">' + i + '</td>';
        break;
        default:
        days += "<td>" + i + "</td>";
    }
}
days += "<td></td><td></td></tr>";

december.innerHTML = week + days;