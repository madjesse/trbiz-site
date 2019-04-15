//for updating information=======================================================================================================================================
//to be updated:

//new-arrivals
//information accordions
              
$(function() {
//	新着情報========================================================
//	prepare the data
	var dates = [
		'2019.04.11', 
		'2019.04.11'
	];
	
//	テーマ========================================================
	var newArrivalTitles = [
		'04.13（土）牛丼を皆で食べよう', 
		'04.19（金）のグループワークに参加しよう'
	];
	
//	内容=========================================================
	var newArrivalTxt = [
		'松屋の牛丼を食べましょう！', 
		'今回のテーマは「挨拶について」'
	];
	var $newArrivalItems = $('.new-arrivals-item');
	var $newArrivalContainer = $('.new-arrivals .container');
	
//	職員予定====================================================
	var dayOffs = {
		4: [
			'04.10（水）: ウェイお休み', 
		], 
		5: [
			
		]};
	var $employeeAccord = $(".employee-item");
	
//	土曜日開所予定======================================================
	var saturdays = {
		4: [
			'201904.jpg'
		], 
		5: [
			'201905.jpg'
		]};
	var $saturdayAccord = $('.saturday-item');
	
//	工賃支給日=======================================================
	var salaryDays = {
		4: [
			'04.25'
		], 
		5: [
			'05.25'
		]};
	var $salaryAccord = $('.salary-item');
	
//	イベント=======================================================
	var events = {
		4: [
			'04.13（土）：松屋の牛丼を食べよう',
			'04.19（金）：グループワーク：挨拶について',
			'04.26（金）：レク：「20の扉」連想ゲーム'
		], 
		5: [
			'05.03（金）：レク：ビュッフェ風のランチタイムを楽しもう',
			'05.04（土）：レク：ビュッフェ風のランチタイムを楽しもう',
			'05.07（土）：桜餅・大福をプレゼント'
		]};
	var $eventAccord = $('.event-item');
	
//	長期連休のお知らせ================================================
	var holidays = {
		4: [
			'04.27（土）～05.06（月）ゴールデンウィーク',
			'期間中05.03（金）、05.04（土）開所'
		],
		5: [
			'04.27（土）～05.06（月）ゴールデンウィーク',
			'期間中05.03（金）、05.04（土）開所'
		]
	}
	var $holidayAccord = $('.holiday-item');

	
		
//これ以下は編集しないでください============================================================================================================================================
	
//	新着情報==========================================================
	for (var i = 0; i < dates.length; i++) {
		var $newItem = $('<dl class="new-arrivals-item"><dt class="new-arrivals-title"><time class="new-arrivals-date"></time><p class="new-arrivals-title-txt"></p></dt><dd><p class="new-arrivals-txt"></p></dd></dl>');
		$newArrivalContainer.append($newItem);
	}
	
	$('.new-arrivals-title-txt').each(function(index) {
		$(this).text(newArrivalTitles[index]);
	});
	$('.new-arrivals-txt').each(function(index) {
		$(this).text(newArrivalTxt[index]);
	});
	
//	職員予定============================================================
	for (var key in dayOffs) {
		var $newHeadingItem = $('<li><h3><span class="month"></span>月職員予定：</h3></li>');
		$newHeadingItem.find(".month").text(key);
		$employeeAccord.append($newHeadingItem);
		for (var j = 0; j < dayOffs[key].length; j++) {
			var $newItem = $('<li class="info_cont_tex"></li>');
			$newItem.text(dayOffs[key][j])
			$employeeAccord.append($newItem);
		}
	}
//	土曜開所予定==========================================================
	for (var key in saturdays) {
		var $newHeadingItem = $('<li><h3><span class="month"></span>月土曜日開所予定：</h3></li>');
		$newHeadingItem.find(".month").text(key);
		$saturdayAccord.append($newHeadingItem);
		for (var j = 0; j < saturdays[key].length; j++) {
			var $newItem = $('<li class="info_cont_tex"></li>');
			var srcString = 'img/calendars/' + saturdays[key][j];
			$newItem.append('<img src="' + srcString + '">');
			$saturdayAccord.append($newItem);
		}
	}
	
//	工賃支給日======================================================
	for (var key in salaryDays) {
		var $newHeadingItem = $('<li><h3><span class="month"></span>月工賃日：</h3></li>');
		$newHeadingItem.find(".month").text(key);
		$salaryAccord.append($newHeadingItem);
		for (var j = 0; j < salaryDays[key].length; j++) {
			var $newItem = $('<li class="info_cont_tex"></li>');
			$newItem.text(salaryDays[key][j])
			$salaryAccord.append($newItem);
		}
	}
	
//	イベント=========================================================
	for (var key in events) {
		var $newHeadingItem = $('<li><h3><span class="month"></span>月イベント：</h3></li>');
		$newHeadingItem.find(".month").text(key);
		$eventAccord.append($newHeadingItem);
		for (var j = 0; j < events[key].length; j++) {
			var $newItem = $('<li class="info_cont_tex"></li>');
			$newItem.text(events[key][j])
			$eventAccord.append($newItem);
		}
	}
	
//	長期連休のお知らせ=================================================
	for (var key in holidays) {
		var $newHeadingItem = $('<li><h3><span class="month"></span>月長期連休：</h3></li>');
		$newHeadingItem.find(".month").text(key);
		$holidayAccord.append($newHeadingItem);
		for (var j = 0; j < holidays[key].length; j++) {
			var $newItem = $('<li class="info_cont_tex"></li>');
			$newItem.text(holidays[key][j])
			$holidayAccord.append($newItem);
		}
	}
	
});