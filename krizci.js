$(document).ready(function() {
	var stevec=0;

  $("#reset").click(function() {
    var stevec=0;
    $("#block1").removeClass('block_click2');
    $("#block2").removeClass('block_click2');
    $("#block2").removeClass('block_click1');
    $("#block3").removeClass('block_click2');
    $("#block3").removeClass('block_click1');
    $("#block4").removeClass('block_click2');
    $("#block4").removeClass('block_click1');
    $("#block1").removeClass('block_click1');
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
  });

  $("#block1").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block2").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block3").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block4").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block5").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block6").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block7").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block8").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});

  $("#block9").click(function() {
  	if(stevec%2==0){
  		stevec++;
      $(this).removeClass('block_click2')
    	$(this).addClass("block_click1");
		}
	else{
		stevec++;
      $(this).removeClass('block_click1')
    	$(this).addClass("block_click2");
		}
	});


});