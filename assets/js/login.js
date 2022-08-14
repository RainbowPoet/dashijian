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
	//
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

	$("#form_reg").on('submit', function (e) {
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
	    });
	});
});
