<template>
	<div>
		<div v-show="viewmode" @click="viewmode = false" class="fontInputDisplay">
			<span :style="selectedStyle">Abcdefghijklm 123</span>
		</div>
		<div v-show="!viewmode" class="fontInputEditBox">

			<div style="padding-left:16px;">
				<div class="form-group">
			        <div class="input-group">
						<span class="input-group-addon fontEditInputLabel">grootte</span>
						<input type="number" ref="sizeinput" :value="value.size" @input="updateValue('size', $event.target.value)" class="form-control input-small"/>
					</div>
				</div>
				<div class="form-group">
			        <div class="input-group">
						<span class="input-group-addon fontEditInputLabel">regelhoogte</span>
						<input type="number" ref="lhinput" :value="value.lineheight" @input="updateValue('lh', $event.target.value)" class="form-control input-small"/>
					</div>
				</div>
				<div class="form-group">
			        <div class="input-group">
						<span class="input-group-addon fontEditInputLabel">Unit</span>
						<select class="form-control input-small" :value="value.unit" @input="updateSelect" @change="updateSelect" id="font_unit_select">
							<option value="px">px</option>
							<option value="em">em</option>
						</select>
					</div>
				</div>
				<div class="form-group">
			        <div class="input-group">
						<span class="input-group-addon fontInputLabel fontEditInputLabel">kleur</span>
						<input v-show="!colordef" type="color" ref="colorinput" :value="value.color" @input="updateValue('color', $event.target.value)" class="form-control input-small"/>
						<input v-show="colordef" type="text" ref="colorinputtext" :value="value.color" @input="updateValue('colordef', $event.target.value)" class="form-control input-small"/>
				        <button type="button" class="btn blue" tabindex="-1" @click="colordef = !colordef" title="geef een kleurcode op">#</button>
					</div>
				</div>
				<div class="form-group">
			        <div class="input-group">
						<span class="input-group-addon fontEditInputLabel">Font</span>
						<select class="form-control input-small" :value="value.family" @input="updateSelect" @change="updateSelect" id="font_family_select">
							<option value="Open Sans">Open Sans</option>
							<option value="Roboto">Roboto</option>
							<option value="Lato">Lato</option>
							<option value="Oswald">Oswald</option>
							<option value="Raleway">Raleway</option>
							<option value="Lora">Lora</option>
							<option value="Ubuntu">Ubuntu</option>
							<option value="Lobster">Lobster</option>
							<option value="Playfair Display">Playfair Display</option>
							<option value="Fauna One">Fauna One</option>
							<option value="Droid Serif">Droid Serif</option>
							<option value="Barrio">Barrio</option>
							<option value="Source Sans Pro">Source Sans Pro</option>
							<option value="Poppins">Poppins</option>
							<option value="Indie Flower">Indie Flower</option>
							<option value="Dosis">Dosis</option>
							<option value="Libre Baskerville">Libre Baskerville</option>
							<option value="Asap">Asap</option>
							<option value="Exo 2">Exo 2</option>
							<option value="Shadows Into Light">Shadows Into Light</option>
							<option value="Verdana">Verdana</option>
							<option value="Arial">Arial</option>
							<option value="Courier">Courier</option>
							<option value="Times">Times</option>
							<!--
							<option value="Trebuchet MS">Trebuchet MS</option>
							<option value="Comic Sans MS">Comic Sans MS</option>
							<option value="Lucida Console">Lucida Console</option>
							<option value="Tahoma">Tahoma</option>
							-->
						</select>
					</div>
				</div>
				<div class="form-group">
					<div class="mt-checkbox-list">
						<br/>
						<toggle-button id="toggleBold" :sync="true" :width="130" :value="value.bold" :labels="{checked: 'VETGEDRUKT', unchecked: 'niet-vet'}" @change="handleToggle"/>
						<br/><br/>
						<toggle-button id="toggleItalic" :sync="true" :width="130" :value="value.italic" :labels="{checked: 'CURSIEF', unchecked: 'recht'}" @change="handleToggle"/>
					</div>
				</div>
			</div>

			<div class="form-actions">
		        <button type="button" class="btn btn-sm" tabindex="-1" @click="close">sluit font-instellingen</button>
			</div>
		</div>
	</div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('fontInput', {
		props: {
		    value: {
		      font: Object
		    }
	    },
        methods: {
	        handleToggle: function(val) {
		    	let newvalue = this.value;
				if (val.srcEvent.target.parentElement.id === 'toggleBold') {
					newvalue.bold = val.value;
				}
				else if (val.srcEvent.target.parentElement.id === 'toggleItalic') {
					newvalue.italic = val.value;
				}
				this.changed = true;
				this.$emit('fontupdate', newvalue);
	        },
        	updateSelect: function(event) {
		    	let newvalue = this.value;
		    	if (event.target.id === 'font_family_select') {
					newvalue.family = event.target.value;
					console.log(newvalue.family);
				}
		    	else if (event.target.id === 'font_align_select') {
					newvalue.align = event.target.value;
				}
		    	else if (event.target.id === 'font_unit_select') {
					newvalue.unit = event.target.value;
					if (newvalue.unit === 'em') {
						// if px is changed to em, make sure the size and lineheight have a reasonable value
						let lh = (newvalue.lineheight) ? parseInt(newvalue.lineheight.trim(), 10) : 1;
						let size = (newvalue.size) ? parseInt(newvalue.size.trim(), 10) : 1;
						if (lh >= 2 || size >= 2) {
							newvalue.lineheight = '1.5';
							newvalue.size = '1.5';
						}
					}
					else if (newvalue.unit === 'px') {
						// if em is changed to px, make sure the size and lineheight have a reasonable value
						let lh = (newvalue.lineheight) ? parseInt(newvalue.lineheight.trim(), 10) : 18;
						let size = (newvalue.size) ? parseInt(newvalue.size.trim(), 10) : 14;
						if (lh <= 10 || size <= 10) {
							newvalue.lineheight = '18';
							newvalue.size = '14';
						}
					}
				}
				this.changed = true;
				this.$emit('fontupdate', newvalue);
        	},
		    updateValue: function(field, val) {
		    	let newvalue = this.value;
		    	if (field === 'color') {
					this.$refs.colorinput.value = val;
					newvalue.color = val.trim();
				}
		    	else if (field === 'colordef') {
					this.$refs.colorinputtext.value = val;
					newvalue.color = val.trim();
				}
		    	else if (field === 'lh') {
					this.$refs.lhinput.value = val;
					newvalue.lineheight = val.trim();
				}
		    	else if (field === 'size') {
					this.$refs.sizeinput.value = val;
					newvalue.size = val.trim();
				}
				this.changed = true;
				this.$emit('fontupdate', newvalue);
		    },
		    close: function() {
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
			selectedStyle: function () {
				return {
					'font-family': this.value.family,
					'font-weight': (this.value.bold) ? 'bold': 'normal',
					'font-size': this.value.size + this.value.unit,
					'font-style': (this.value.italic) ? 'italic': '',
					'color': this.value.color
				}
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
.fontInputEditBox {
	border: dashed 1px #d0d0d0;
	padding: 1em;
	radius: 8px;
}
.fontEditInputLabel {
	width:100px;
	text-align:right;
}
.fontInputDisplay {
	padding: 1px;
	margin-top:8px;
	border: dashed 2px #e0e0e0;
}
.fontInputDisplay:hover {
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