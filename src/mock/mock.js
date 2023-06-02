// 引入Mock模块
import mockjs, {mock} from 'mockjs';
// 创建数据对象
const Mock={
	// 声明一个方法：返回所有订单的数据
	getOrder(type){
		let arr=[];
		// Mock.Rondom() 随机方法;数字随机Mock.Random.integer(min , max) 在min-max随机生成一个数字
		for(let i=0; i<mockjs.Random.integer(5,15) ; i++){
			// 将每次循环的数据存入数组内
			arr.push( mockjs.mock({
				'name' : type == 0 ? '普通商品 ' : '秒杀商品'+i,
				'price' : mockjs.Random.integer(10,500)+'元',
				'buyer' : mockjs.Random.cname(),
				'buytime':mockjs.Random.datetime('yyy-mm-dd hh:mm:ss'),
				'role':mockjs.Random.boolean(),
				'state':mockjs.Random.boolean(),
				'payType':mockjs.Random.boolean(),
				'source':mockjs.Random.url(),
				'phone':mockjs.mock(/\d(11)/),
			}) )
		}
		return arr;
	},
	
}
export default Mock;