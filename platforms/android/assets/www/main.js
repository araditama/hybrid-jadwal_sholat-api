$(document).ready(function() {

var kota;

$("#tampilDataHarian").click(function(){
    kota = $('#kota').val();

    $.ajax({
        type: "GET",
        url: "http://muslimsalat.com/"+ kota +"/weekly.json?key=6101c430b0484d7ec2d575f2b15738d3",
        dataType: "jsonp",
        success: function(result){
            if(result.status_valid == '1'){
                 $("#hasilHarian").empty();
                 $("#popupMap").empty();
                 $("#bukaKompas").html("");

                 var tanggal = convertTanggal(result.items[0].date_for);
                 var apiMap = 'http://maps.google.com/maps/api/' + result.map_image.substring(32);
                 var kompas = 'http://muslimsalat.com/qibla_compass/200/' + result.qibla_direction + '.png';

                 // inisialisasi variabel yang akan mengisi div id hasilHarian
                 var htmlText = 
                 '<center><h3>Jadwal Sholat</h3></center>' +
                 '<div id="jadwal" style="margin-top: 5px; border: 1px solid grey; border-radius: 8px; padding: 2px;">' +

                 '<center>'+ result.query +', ' + result.state +'</center>' +
                 '<center>'+ tanggal +'</center><hr style="margin: 5px; background-color: grey; height: 0.1px;">'+
                 '<table style="width: 100%; margin:2px; margin-top: 5px;">' +
                 '<thead class="ui-bar-d">' +
                 '<th>Subuh</th>' +
                 '<th>Dzuhur</th>' +
                 '<th>Ashar</th>' +
                 '<th>Magrib</th>' +
                 '<th>Isya</th>' +
                 '</thead>' +
                 '<tbody>' +
                 '<td>' + result.items[0].fajr + '&emsp;</td><td>' 
                 + result.items[0].dhuhr + '&emsp;</td><td>' 
                 + result.items[0].asr + '&emsp;</td><td>' 
                 + result.items[0].maghrib + '&emsp;</td><td>' 
                 + result.items[0].isha + '</td></tbody></table>' +
                 '</div>';

                 // inisialisasi variabel yang akan mengisi div id popupMap
                 var htmlText1 = '<img src="' + apiMap + '" style="width: 100%;">' +
                 '<img src="' + kompas + '" style="position: absolute; top: 50%; width: 50%; left: 0%">';

                    
                    $('#hasilHarian').append(htmlText);
                    $("#popupMap").append(htmlText1);
                    $("#bukaKompas").html("<button id='btMap'><p>Kompas Kiblat (*)</p></button>");           

            }else{
                 $("#hasilHarian").empty();
                 $("#popupMap").empty();
                 $("#bukaKompas").html("");
                
                var htmlText = 
                 '<center><h3>Kota Tidak Ditemukan!</h3></center>';
                 $('#hasilHarian').append(htmlText);
            }

        }

    });
});

function convertTanggal(tanggal){
    var hasil;
        var bulan = tanggal.substring(5,7);

        if( bulan == 01){
            bulan = 'Januari';
        }else if(bulan == 02){
            bulan = 'Februari';
        }else if(bulan == 03){
            bulan = 'Maret';
        }else if(bulan == 04){
            bulan = 'April';
        }else if(bulan == 05){
            bulan = 'Mei';
        }else if(bulan == 06){
            bulan = 'Juni';
        }else if(bulan == 07){
            bulan = 'Juli';
        }else if(bulan == 08){
            bulan = 'Agustus';
            }else if(bulan == 09){
            bulan = 'September';
        }else if(bulan == 10){
            bulan = 'Oktober';
        }else if(bulan == 11){
            bulan = 'November';
        }else{
            bulan = 'Desember';
        }
                 
        hasil = tanggal.substring(8,10) + '-' + bulan + '-' + tanggal.substring(0,4);

        return hasil;
}

$("#tampilDataMingguan").click(function(){
    kota = $('#kota2').val();

    $.ajax({
        type: "GET",
        url: "http://muslimsalat.com/"+ kota +"/weekly.json?key=6101c430b0484d7ec2d575f2b15738d3",
        dataType: "jsonp",
        success: function(result){
            if(result.status_valid == '1'){
                var htmlText = '';
                for (i = 0; i < result.items.length; i++) { 
                htmlText += '<div id="informasi"  align="center" style="margin-top: 30px"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-b"><th>' + result.query +', ' + result.state + '</th></thead><tbody><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;' + result.items[i].date_for + '</td></tbody></table></div><div id="jadwal" align="center" style="margin-top: 5px;"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-d"><th>Subuh</th><th>Dzuhur</th><th>Ashar</th><th>Magrib</th><th>Isya</th></thead><tbody><td>' + result.items[i].fajr + '&emsp;</td><td>' + result.items[i].dhuhr + '&emsp;</td><td>' + result.items[i].asr + '&emsp;</td><td>' + result.items[i].maghrib + '&emsp;</td><td>' + result.items[i].isha + '</td></tbody></table></div> <div align="right">';
               
               }
                $('#hasilMingguan').append(htmlText);              

            }

        }
    });
});

$("#tampilDataBulanan").click(function(){ 
    kota3 = $('#kota3').val(); 

    $.ajax({ 
        type: "GET", 
        url: "http://muslimsalat.com/"+ kota3 +"/monthly.json?key=6101c430b0484d7ec2d575f2b15738d3", 
        dataType: "jsonp", 
        success: function(result){ 
         if(result.status_valid == '1'){ 
          var htmlText = ''; 
            for (i = 0; i < result.items.length; i++) {  
          htmlText += '<div id="informasi" style="margin-top: 40px"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-b"><th>' + result.query +', ' + result.state + '</th></thead><tbody><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;' + result.items[i].date_for +  '</td></tbody></table></div><div id="jadwal" style="margin-top: 6px;"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-b"><th>Subuh</th><th>Dzuhur</th><th>Ashar</th><th>Magrib</th><th>Isya</th></thead><tbody><td>' + result.items[i].fajr + '&emsp;</td><td>' + result.items[i].dhuhr + '&emsp;</td><td>' + result.items[i].asr + '&emsp;</td><td>' + result.items[i].maghrib + '&emsp;</td><td>' + result.items[i].isha + '</td></tbody></table></div>'; 
             } 
             $('#hasilBulanan').append(htmlText);               

         } 

        } 
    }); 
});

$("#tampilDataTahunan").click(function(){
    kota = $('#kota4').val();

    $.ajax({
        type: "GET",
        url: "http://muslimsalat.com/"+ kota +"/yearly.json?key=6101c430b0484d7ec2d575f2b15738d3",
        dataType: "jsonp",
        success: function(result){
            if(result.status_valid == '1'){
                var htmlText = '';
                for (var key in result.items) {
                      htmlText += '<div id="informasi" style="margin-top: 30px"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-a"><th>' + result.query +', ' + result.state + '</th></thead><tbody><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;' + result.items[key].date_for + '</td></tbody></table></div><div id="jadwal" style="margin-top: 5px;"><table class="ui-body-d ui-shadow table-stripe ui-responsive" id="table-custom-2" data-role="table"><thead class="ui-bar-d"><th>Subuh</th><th>Dzuhur</th><th>Ashar</th><th>Magrib</th><th>Isya</th></thead><tbody><td>' + result.items[0].fajr + '&emsp;</td><td>' + result.items[0].dhuhr + '&emsp;</td><td>' + result.items[0].asr + '&emsp;</td><td>' + result.items[0].maghrib + '&emsp;</td><td>' + result.items[0].isha + '</td></tbody></table></div>';
                 } 
               
                $('#hasilTahunan').append(htmlText);              

            }
        }
    });
});

});