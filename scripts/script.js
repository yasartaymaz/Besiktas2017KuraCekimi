$(document).ready(function(){
    var Torba1=Array('Real Madrid','Bayern München','Chelsea','Juventus','Benfica','AS Monaco','Spartak Moscow','Shakhtar Donetsk');
    var Torba2=Array('Barcelona','Atletico Madrid','Paris Saint-Germain','Borussia Dortmund','Sevilla','Manchester City','Porto','Manchester United');
    var Torba4=Array('Celtic','CSKA Moskow','FC Kopenhag','Sporting Lisbon','Apoel','Feyenoord','Maribor','Leipzig');
    var Sonuc='';
    Sonuc+='<tr style="background-color: #ccc"><td>Sıra</td><td>1. Torba</td><td>2. Torba</td><td>4. Torba</td><td>Kocanız ( veya babanız, cinsiyetçiliğe karşıyım. )</td></tr>';
    for(i=0;i<100;i++)
    {
        var Bg=0;
        Bg=Math.floor((i%2));
        var BgValue='';
        if(Bg==0){BgValue='eee';}else{BgValue='fff';}
        Sonuc+='<tr style="background-color: #'+BgValue+'"><td>'+(i+1)+'</td><td>'+Torba1[(Math.floor(Math.random() * 8))]+'</td><td>'+Torba2[(Math.floor(Math.random() * 8))]+'</td><td>'+Torba4[(Math.floor(Math.random() * 8))]+'</td><td><strong>BEŞİKTAŞ</strong></td></tr>';
    }
    $('table').html(Sonuc);
});