<template>
	<div id="login" class="main-w3ls">
		<div class="left-content">
			<div class="w3ls-content">
				<h2>UNNC </br>
					Li Dak Sum </br>
					INCUBATOR
				</h2>

			</div>
		</div>
		<div class="right-form-agile">
			<div class="sub-main-w3">
				<img src="../assets/logo.png" height="80" />
				<br />
				<br />


				<h3>Li Dak Sum INCUBATOR</h3>
				<p></p>
				<br />
				<br />
				<form action="Default.aspx?action=login" class="layui-form" method="post">
					<div class="form-style-agile">
						<input name="posid" type="hidden" id="posid" value="0" />
						<label>Your Account</label>
						<div class="pom-agile">
							<input class="layui-input" type="text" name="uid" id="uid" placeholder="Please enter account">
						</div>
					</div>
					<div class="form-style-agile">
						<label>Password</label>
						<div class="pom-agile">
							<input class="layui-input" type="password" name="pwd" id="pwd" placeholder="Please enter password">
						</div>
					</div>
					<div class="fm-item">
						<p id="msgtip" style="margin-bottom: 0px; color: #f00; font-size: 14px;"></p>
					</div>
					<button class="subBtn" type="button" lay-filter="LoginSubmit" lay-submit="" id="subBtn">Login</button>
					<p></p>
					<button class="subBtn" type="button" lay-filter="LoginSubmit" lay-submit="" id="subBtn">Tenancy
						Application</button>

				</form>



				<div class="copyright">
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<h6>IT Services</h6><br />
					<h6>T. +86(0)574 8818 0009 </h6><br />
					<h6>E. itservicedesk@nottingham.edu.cn</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
