//for updating information=======================================================================================================================================
//to be updated:

//new-arrivals
//information accordions
              
$(function() {
//	新着情報========================================================
//	テーマ========================================================
	var newArrivalTitles = [
		'トラビズスマホサイト公開', 
		'04.19（金）グループワークに参加しよう',
		'04.26（金）午後から連想ゲームを楽しもう',
		'5月末までのイベント予定が掲載された'
	];
	
//	内容=========================================================
	var newArrivalTxt = [
		'トラビズスマホサイト公開しました！開所日やイベントの確認やトラビズに連絡などに活用しましょう！', 
		'今回のテーマは「挨拶について」',
		'20回の質問で答えを当てるゲームです！楽しいですよ！参加しましょう！（午後騒がしくなることが予想されますので、通常作業の方はご了承下さい）',
		'5月末までのイベント予定が施設内に掲載されていますので、各自確認しましょう！沢山の参加をお待ちしております！'
	];
	var $newArrivalItems = $('.new-arrivals-item');
	var $newArrivalContainer = $('.new-arrivals .container');
//	新着情報終わり===========================================================================================================================================
	
//	職員予定====================================================
	var dayOffs = {
		4: [
//			'04.00（水）: ~', 
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
			'05.27'
		]};
	var $salaryAccord = $('.salary-item');
	
//	イベント=======================================================
	var events = {
		4: [
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
	for (var i = 0; i < newArrivalTitles.length; i++) {
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