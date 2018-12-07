<template>
	<div :class="['select', {down: isdown}]" @click="click">
		<div class="select-value">{{text}}</div>
		<span class="select-icon">
		  <i></i>
		</span>
		<ul>
		  <li v-for="(item, i) in options" @click="selected(i)" :class="{checked: index == i}">{{item.text}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				index: 0,
				isdown: false
			}
		},
		computed: {
			text () {
				return this.options[this.index] ? this.options[this.index].text : ''
			}
		},
		props: {
			options: {
				type: Array,
				default () {
					return []
				}
			},
			checked: {
				type: Number,
				default: 0
			}
		},
		methods: {
			click () {
				this.isdown = !this.isdown
			},
			selected (index) {
				this.index = index
				this.$emit('selected', this.options[this.index])
			}
		},
		created () {
			this.index = this.checked
			document.addEventListener('click', (e) => {
				if ($(e.target).parents('.select')[0] !== this.$el) {
					this.isdown = false
				}
			})
		}
	}
</script>
<style lang="less" scoped>

	.gradient(@angle:top,@start:#000,@stop:#ff050e){

	  background: -webkit-linear-gradient(@angle,@start,@stop);
	  background: -moz-linear-gradient(@angle,@start,@stop);
	  background: -o-linear-gradient(@angle,@start,@stop);
	  background: linear-gradient(@angle,@start,@stop);
	  
	}
	.select {
	  min-width: 100px;
	  height: 30px;
	  line-height: 30px;
	  border: 1px solid #e2e2e2;
	  position: relative;

	  .select-value {
	    width: 100%;
	    height: 100%;
	    text-indent: 10px;
	  }

	  .select-icon {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 20px;
	    height: 100%;
	    border-left: 1px solid #e2e2e2;

	    .gradient(top, #fff, #516b94);

	    i {
	      position: absolute;
	      top: 50%;
	      left: 50%;
	      transform: translate(-50%, -50%);
	      border-top: 6px solid #333;
	      border-left: 3px solid transparent;
	      border-right: 3px solid transparent;
	    }
	  }

	  ul {
	    display: none;
	    position: absolute;
	    top: 100%;
	    left: -1px;
	    right: -1px;
	    max-height: 200px;
	    overflow-y: scroll;
	    border: 1px solid #e2e2e2;
	    z-index: 1000;
	  }

	  &.down {
	    ul {
	      display: block;
	      background-color: #fff;

	      li {
	        text-indent: 10px;

	        &:hover {
	        	background-color: #e2e2e2;
	        };

	        &.checked {
	        	background-color: blue;
	        	color: #fff;
	        }
	      }
	    }
	  }
	  &:hover, &.down {
	  	border-color: #999;

	  	.select-icon {
	  		border-color: #999;
	  		
	  		.gradient(top, #fff, #fff0ac)
	  	}
	  }
	}
</style>