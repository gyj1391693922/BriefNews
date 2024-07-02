export default{
	// 首页时间转换
	dateTime(ed){
		let old = new Date(ed);
		let now = new Date();
		// 获取old具体时间
		let o_d = old.getTime();
		let o_h = old.getHours();
		let o_m = old.getMinutes();
		let o_Y = old.getFullYear();
		let o_M = old.getMonth();
		let o_D = old.getDate();
		// 获取new具体时间
		let n_d = now.getTime();
		let n_h = now.getHours();
		let n_m = now.getMinutes();
		let n_Y = now.getFullYear();
		let n_M = now.getMonth();
		let n_D = now.getDate();
		
		// 当天时间
		if(o_D === n_D && o_Y === n_Y && o_M === n_M){
			if(o_h < 10){
				o_h = '0' + o_h;
			}
			if(o_m < 10){
				o_m = '0' + o_m;
			}
			return o_h + ':' + o_m;
		}
		
		// 昨天
		if(o_D + 1 === n_D && o_Y === n_Y && o_M === n_M){
			if(o_h < 10){
				o_h = '0' + o_h;
			}
			if(o_m < 10){
				o_m = '0' + o_m;
			}
			return '昨天 ' + o_h + ':' + o_m;
		}
		
		// 昨天之前
		if(o_D + 2 === n_D && o_Y === n_Y && o_M === n_M){
			return o_Y + '-' + o_M + '-' + o_D;
		}
	}
}