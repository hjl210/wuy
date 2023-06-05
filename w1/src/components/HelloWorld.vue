<template>
  <div>
	<button @click="fun()"></button>
	{{list}}
  </div>
</template>
<script>
export default {
  data(){
	return {
		list:[]
	}  
  },
  methods:{
	fun(){
		if(this.list==''){
			this.$axios.get('/shu/cats/lv2/statistics').then((res)=>{
			if(res.status==200){
			this.list=res.data;
			}
			}).catch((error)=>{
			console.log(error);
			})
		}else{
			this.list==[]
		}  
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
