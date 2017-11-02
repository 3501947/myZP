(function (window) {

	var zmUpload = $(".zm_upload")
	//点击页面色块
	zmUpload.click(function () {
		$(this).css("background-image", "none")
	})
	//调取取色器
	zmUpload.colpick({
		colorScheme: '#ffffff',
		livePreview: 0,
		color: "#ffffff",
		onSubmit: function (hsb, hex, rgb, el) {
			$(el).css('background-color', '#' + hex);
			$(el).colpickHide();
		}
	});

	//经典色块点击加边框以及换色效果
	$("#zm-frequentlyColorSpan li").on("click", function () {
		$(this).css({
			"width": "17px",
			"height": "18px",
			"border": "1px #ffffff solid"
		}).siblings().css({
			"width": "19px",
			"height": "20px",
			"border": "none"
		})
		var backColor = $(this).css("background-color")
		$(".colpick_new_color").css("background-color", backColor)
		//xxxxxxx
		var inputColor = $(".colpick_hex_field input")
		var oxColor = backColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		delete(oxColor[0]);
		for (var n = 1; n <= 3; ++n) {
			oxColor[n] = parseInt(oxColor[n]).toString(16);
			if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
		}
		var str = oxColor.join('');
		inputColor.val(str);
		//ppppppp
		$(".colpick_submit").on("click", function () {
			var backColorn = $(".colpick_new_color").css("background-color")
			$(".zm_upload").css("background-color", backColorn)
		})
	})
	zmUpload.on("click", function () {
		var backColorp = zmUpload.css("background-color")
		$(".colpick_current_color").css("background-color", backColorp)
	})
	//添加到我喜欢
	$(".mysvg").on("click", function () {
		var _this = $(this)
		var strs = $(".zm-colorbox").length
		var zmcolorBox = $(".zm-colorbox")
		var backColorn = $(".colpick_new_color").css("background-color")
		//xxxxxxx
		var inputColor = $(".colpick_hex_field input")
		var oxColor = backColorn.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		delete(oxColor[0]);
		for (var n = 1; n <= 3; ++n) {
			oxColor[n] = parseInt(oxColor[n]).toString(16);
			if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
		}
		var str = oxColor.join('');
		inputColor.val(str);
		//ppppppp

		//获取喜欢颜色十六进制
		var strArray = [];
		zmcolorBox.each(function (index, ele) {
			var eachColor = $(this).css("background-color")
			//xxxxxxx
			var oxColor = eachColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			delete(oxColor[0]);
			for (var n = 1; n <= 3; ++n) {
				oxColor[n] = parseInt(oxColor[n]).toString(16);
				if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
			}
			var str = oxColor.join('');
			strArray.push(str)
		})

		if ($.inArray(str, strArray) == -1) {
			$(".zm-addcolorbox").prepend('<div class="zm-colorbox" style="background-color: ' + backColorn + '; border: none;"></div>')
		}
		//判断喜欢的颜色盒子个数
		if (strs > 17) {
			$(".zm-addcolorbox div:last").remove()
		}
	});
	//点击我喜欢的颜色
	$(".zm-addcolorbox").on("click", ".zm-colorbox", function () {
		var backColor = $(this).css("background-color")
		$(".colpick_new_color").css("background-color", backColor)
		//xxxxxxx
		var inputColor = $(".colpick_hex_field input")
		var oxColor = backColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		delete(oxColor[0]);
		for (var n = 1; n <= 3; ++n) {
			oxColor[n] = parseInt(oxColor[n]).toString(16);
			if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
		}
		var str = oxColor.join('');
		inputColor.val(str);
		//ppppppp
		$(".colpick_submit").on("click", function () {
			var backColorn = $(".colpick_new_color").css("background-color")
			$(".zm_upload").css("background-color", backColorn)
		})
	})
	//点击新颜色&&当前色
	$(".colpick_new_color").on("click", function () {
		return false;
	})

























})();