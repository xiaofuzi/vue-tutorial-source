// 定义名为 hello-world 的新组件
Vue.component('hello-world', {
  template: '<h2>{{text}}</h2>',
  data: function () {
  	return {
  		text: 'hello world!'
  	}
  }
})