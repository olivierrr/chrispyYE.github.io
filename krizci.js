preverjanje_zmage = function()
{
    var wins = [14,112,896,546,584,292,146,168];
    console.log(igralec1[0]);
    var sum1 = 0; var sum2 = 0;
    //racunanje vsote igralca1
    for(var i=0; i<igralec1.length; i++)
    {
      sum1 += igralec1[i];
    }
    //racunanje vsote igralca2
     for(var i=0; i<igralec2.length; i++)
    {
      sum2 += igralec2[i];
    }
    console.log("igralec2:" + sum2);
    console.log("igralec1:" + sum1);
    for(var i=0;i<wins.length;i++)
    {
      if((sum1 & wins[i]) === wins[i]){
        $('p.zmaga_tekst').text('RUMENI');
        $("#konec_igre").show();
        //NE DELA!$('.konc_tekst').text('ZMAGAL JE RUMENI');
        skrij_polje();
      }
      if((sum2 & wins[i]) === wins[i]){
        $('p.zmaga_tekst').text('RDECI');
        $("#konec_igre").show();
        //NE DELA!!! $('.konc_tekst').text('ZMAGAL JE RDECI');
        skrij_polje();
      }
    }
}

/*racunanje_zmage = function()
{
    var wins = [14,112,896,546,584,292,146,168];
    var sum= 0;
    var sum_arr=[];
    for(i=0;i<igralec1.length)
    {
      sum=sum+igralec1[i];
      if(i==2)
      {
        sum_arr.push(sum);
        sum=0;
        i=1;
      }
      if(i==4)
      {
        sum_arr.push(sum);
        sum=0;
        i=2;
      }
    }


}*/

reset_polja = function()
{
    $("#block1").removeClass('block_click2');
    $("#block1").removeClass('block_click1');
    $("#block2").removeClass('block_click2');
    $("#block2").removeClass('block_click1');
    $("#block3").removeClass('block_click2');
    $("#block3").removeClass('block_click1');
    $("#block4").removeClass('block_click2');
    $("#block4").removeClass('block_click1');
    $("#block5").removeClass('block_click2');
    $("#block5").removeClass('block_click1');
    $("#block6").removeClass('block_click2');
    $("#block6").removeClass('block_click1');
    $("#block7").removeClass('block_click2');
    $("#block7").removeClass('block_click1');
    $("#block8").removeClass('block_click2');
    $("#block8").removeClass('block_click1');
    $("#block9").removeClass('block_click2');
    $("#block9").removeClass('block_click1');

}

skrij_polje = function()
{
    $("#igralno").hide('500', function() {
      
    });

}

$(document).ready(function() {
	 var stevec=0;
    igralec1 = [];
    igralec2 = [];
    $("#konec_igre").hide();

  $("#reset").click(function() {
    stevec=0;
    igralec1 = [];
    igralec2 = [];
    reset_polja();
    $('p.zmaga_tekst').text('REZULTAT');
    $("#konec_igre").hide();
    $("#igralno").show('500', function() {

      
    });
  });

  $("#block1").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(2);
      preverjanje_zmage();
		}
	else{
		  stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(2);
      preverjanje_zmage();
		}
	});

  $("#block2").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(4);
      preverjanje_zmage();
		}
	else{
		  stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(4);
      preverjanje_zmage();
		}
	});

  $("#block3").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(8);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(8);
      preverjanje_zmage();
		}
	});

  $("#block4").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(16);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(16);
      preverjanje_zmage();
		}
	});

  $("#block5").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(32);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(32);
      preverjanje_zmage();
		}
	});

  $("#block6").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(64);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(64);
      preverjanje_zmage();
		}
	});

  $("#block7").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(128);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(128);
      preverjanje_zmage();
		}
	});

  $("#block8").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(256);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(256);
      preverjanje_zmage();
		}
	});

  $("#block9").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
      igralec1.push(512);
      preverjanje_zmage();
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
      igralec2.push(512);
      preverjanje_zmage();
		}
	});


});