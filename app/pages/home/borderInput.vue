<template>
	<div>
		<div v-show="viewmode" @click="viewmode = false" class="borderInputDisplay">
			dikte: {{value.size}}, radius: {{value.radius}}, kleur: <span :style="{ color: activeColor}">{{ value.color }}</span>
		</div>
		<div v-show="!viewmode" class="input-group">
			<div class="input-group-btn">
			    <button type="button" class="btn blue dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> {{ value.size }}</button>
			    <ul class="dropdown-menu">
			    	<li><a @click="updateSize($event)" data-size="0">0</a></li>
			    	<li><a @click="updateSize($event)" data-size="1">1</a></li>
			    	<li><a @click="updateSize($event)" data-size="2">2</a></li>
			    	<li><a @click="updateSize($event)" data-size="3">3</a></li>
			    	<li><a @click="updateSize($event)" data-size="4">4</a></li>
			    	<li><a @click="updateSize($event)" data-size="6">6</a></li>
			    	<li><a @click="updateSize($event)" data-size="6">8</a></li>
			    </ul>
			</div>
			<div class="input-group-btn">
			    <button type="button" class="btn blue dropdown-toggle" data-toggle="dropdown" aria-expanded="false">r {{ value.radius }} </button>
			    <ul class="dropdown-menu">
			    	<li><a @click="updateRadius($event)" data-radius="0">0</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="2">2</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="4">4</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="8">8</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="16">16</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="22">22</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="28">28</a></li>
			    	<li><a @click="updateRadius($event)" data-radius="36">36</a></li>
			    </ul>
			</div>
			<input v-show="!colordef" type="color" name="color" class="form-control" ref="colorinput" :value="value.color" @input="updateColor($event.target.value)" maxlength="10"/>
			<input v-show="colordef" type="text" ref="colorinputtext" :value="value.color" @input="updateColorValue($event.target.value)" class="form-control"/>
		    <div class="input-group-btn">
				<button type="button" class="btn blue" tabindex="-1" @click="colordef = !colordef" title="geef een kleurcode op">#</button>
		    </div>
		    <div class="input-group-btn">
		        <!-- <button type="button" class="btn blue" tabindex="-1" @click="undo" title="undo" v-show="changed"><i class="fa fa-check-square font-white"></i></button> -->
		        <button type="button" class="btn blue" tabindex="-1" @click="save" title="save">ok</button>
		    </div>
		</div>
	</div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('borderInput', {
		props: {
		    value: {
		      border: Object
		    }
	    },
        methods: {
		    updateColor: function (value) {
		      this.$refs.colorinput.value = value;
		      this.value.color = value;
		      this.$emit('borderupdate', {
		      	color: value,
		      	size: this.value.size,
		      	radius: this.value.radius
		      });
		      this.changed = true;
		    },
		    updateColorValue: function (value) {
		      this.$refs.colorinputtext.value = value;
		      this.value.color = value;
		      this.$emit('borderupdate', {
		      	color: value,
		      	size: this.value.size,
		      	radius: this.value.radius
		      });
		      this.changed = true;
		    },
		    updateSize: function (event) {
		      this.value.size = event.target.dataset.size;
		      this.$emit('borderupdate', {
		      	color: this.value.color,
		      	size: this.value.size,
		      	radius: this.value.radius
		      });
		      this.changed = true;
		    },
		    updateRadius: function (event) {
		      this.value.radius = event.target.dataset.radius;
		      this.$emit('borderupdate', {
		      	color: this.value.color,
		      	size: this.value.size,
		      	radius: this.value.radius
		      });
		      this.changed = true;
		    },
		    undo: function() {
		      this.$refs.colorinput.value = this.backup.color;
		      this.$emit('borderupdate', {
		      	color: this.backup.color,
		      	size: this.backup.size,
		      	radius: this.backup.radius
		      });
		      this.viewmode = true;
		      this.changed = false;
		    },
		    save: function() {
		      this.value.color = this.$refs.colorinput.value;
		      this.$emit('borderupdate', {
		      	color: this.value.color,
		      	size: this.value.size,
		      	radius: this.value.radius
		      });
		      this.viewmode = true;
		      this.changed = false;
		    }
        },
		data() {
			return {
				backup: {},
				viewmode: true,
				changed: false,
				colordef: false
			}
		},
        computed: {
			activeColor() {
				let color = (this.value) ? this.value.color : '#a0a0a0';
				if (color === '#ffffff') color = '#d0d0d0';
				return color;
			}
        },
		created: function() {
		},
		mounted: function() {
			this.backup = JSON.parse(JSON.stringify(this.value));
		}
    })
</script>

<style>
.borderInputDisplay {
	padding: 1px;
	margin-top:8px;
	border: dashed 2px #e0e0e0;
}
.borderInputDisplay:hover {
	margin-top:8px;
	padding: 1px;
	border-radius: 6px;
	padding-right: 1em;
	margin-left: -0.5em;
	padding-left: 0.5em;
	background-color: #acb5c3;
	color: white;
	cursor: pointer;
}
</style>