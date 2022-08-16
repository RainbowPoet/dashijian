$(function () {
	// 登录 注册
	$("#link_reg").on("click", function () {
		$(".reg_box").show();
		$(".login_box").hide();
	});
	$("#link_login").on("click", function () {
		$(".reg_box").hide();
		$(".login_box").show();
	});
	// 获取表单
	var form = layui.form;
	form.verify({
		pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
		repwd: function (value) {
			var pwd = $("#form_reg [name=password]").val();
			if (pwd !== value) {
				return "两次密码不一致";
			}
		},
	});
	// 绑定提交事件 
	$("#form_reg").on('submit', function (e) {
		// 阻止默认跳转
	    e.preventDefault()
	    data = {
				username: $("#form_reg [name=username]").val(),
				password: $("#form_reg [name=password]").val(),
				};
	    $.post("http://ajax.frontend.itheima.net/api/reguser", data, function (res) {
            if (res.status !== 0) {
                    return layer.msg(res.message);
            }
			layer.msg(res.message);
			$("#link_login").click();
	    });
	});
	// 监听登录表单
	$("#form_login").submit(function (e) {
		e.preventDefault()
		var data = $(this).serialize();
		// console.log(data);
		$.ajax({
			url: "http://ajax.frontend.itheima.net/api/login",
			method: 'POST',
			data: $(this).serialize(),
			success: function (res) {
				if (res.status !== 0) {
					return layer.msg(res.message);
				}
				layer.msg('登陆成功')
				location.href = 'index.html'
			}
		});
	});

});
