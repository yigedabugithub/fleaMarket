/**
 * @description 引入功能函数 
 * import {setStoraged} from '../../utils/local.js';
 * let data = getStoraged('data');
	  if (data[0]) {
		 dataArr = JSON.parse(getStoraged('data'));
	   }
	removeStoraged('data');
 */ 
//存储数据
function setStoraged(data1, data2) {
	uni.setStorage({
		key: data1,
		data: JSON.stringify(data2),
	})
}
//获取数据
function getStoraged(data1) {
	const data = uni.getStorageSync(data1);
	if (data) {
		return data;
	} else {
		return [];
	}

}
//删除数据
function removeStoraged(data1) {
	uni.removeStorageSync(data1);
}
export {
	setStoraged,
	getStoraged,
	removeStoraged
}
