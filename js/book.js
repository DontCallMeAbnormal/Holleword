$(function(){
	var pageNum = 0;

	for (var i = 0; i < $('.runPage').length; i++) {
		$('.runPage').eq(i).css('z-index',11-2*i);
		$('.runPage').eq(i).children('div').css('z-index',11-2*i);
		$('.runPage').eq(i).children('img').css('z-index',10-2*i);
	};

	
	
	$('.nextBtn').bind('click',function(){
			if ( pageNum <= 4 ) {
				runNext(pageNum);
				pageNum++;
			};
			
	});

	function runNext(index){
		if(index==0){$('.renwu').removeClass('wuxia01');$('.renwu').addClass('wuxia02');}
		else if(index==1){$('.renwu').removeClass('wuxia02');$('.renwu').addClass('wuxia03');}
		else if(index==2){$('.renwu').removeClass('wuxia03');$('.renwu').addClass('wuxia04');}
		else if(index==3){$('.renwu').removeClass('wuxia04');$('.renwu').addClass('wuxia05');}
		else {$('.renwu').removeClass('wuxia05');$('.renwu').addClass('wuxia06');}
		
		$('.runPage').eq(index).addClass('runClass');
		zIndexNext(index,$('.runPage').eq(index));
	}

	function zIndexNext(index,element){
		
		element.css('z-index',3+2*index);
		setTimeout(function(){
			element.children('div').css('z-index',2+2*index);
			element.children('img').css('z-index',3+2*index);	
		},1000);
	}

	$('.lastBtn').bind('click',function(){
			if ( pageNum >= 1 ) {				
			pageNum--;
			runLast(pageNum);
			};
			console.log(pageNum);				
	});

	function runLast(index){
		
		if(index==4){$('.renwu').removeClass('wuxia06');$('.renwu').addClass('wuxia05');}
		else if(index==3){$('.renwu').removeClass('wuxia05');$('.renwu').addClass('wuxia04');}
		else if(index==2){$('.renwu').removeClass('wuxia04');$('.renwu').addClass('wuxia03');}
		else if(index==1){$('.renwu').removeClass('wuxia03');$('.renwu').addClass('wuxia02');}
		else {$('.renwu').removeClass('wuxia02');$('.renwu').addClass('wuxia01');}
		
		
		
		zIndexLast(index,$('.runPage').eq(index));
		$('.runPage').eq(index).removeClass('runClass');
	}

	function zIndexLast(index,element){

		element.css('z-index',11-2*index);
		setTimeout(function(){
			element.children('div').css('z-index',11-2*index);
			element.children('img').css('z-index',10-2*index);
		},1000);
		
	}
});