<template>

	<form class="form-horizontal" role="form" style="margin-right:2em" v-if="field">
	    <div class="form-body">
	        <div class="form-group">
	            <label class="col-md-3 control-label" v-show="field.id === 'formheader' || field.id === 'formfooter'">Tekst</label>
	            <label class="col-md-3 control-label" v-show="field.id != 'formheader' && field.id != 'formfooter' && field.id != 'image'">Label</label>
	            <div class="col-md-9">
	            	<textarea v-show="field.id === 'formheader' || field.id === 'formfooter'" class="form-control" v-model="field.config.label" @keyup="update" cols="80" rows="5"></textarea>
                    <input v-show="field.id != 'formheader' && field.id != 'formfooter' && field.id != 'image'" type="text" v-model="field.config.label" @keyup="update" class="form-control" placeholder="">
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'input'">
	            <label class="col-md-3 control-label">Placeholder</label>
	            <div class="col-md-9">
                    <input type="text" v-model="field.config.placeholder" @keyup="update" class="form-control" placeholder="">
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'button'">
	            <label class="col-md-3 control-label">Hover tekst</label>
	            <div class="col-md-9">
                    <input type="text" v-model="field.config.hover" @keyup="update" class="form-control" placeholder="">
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'input' || this.field.config.widget === 'check' || this.field.config.widget === 'select'">
	            <label class="col-md-3 control-label">Helpregel</label>
	            <div class="col-md-9">
                    <input type="text" v-model="field.config.help" @keyup="update" class="form-control" placeholder="">
					<span class="help-inline"> Deze optie werkt niet voor 'inline' formulieren</span>
	            </div>
	        </div>
	        <div class="form-group" v-show="field.type === 'ja/nee'">
	            <label class="col-md-3 control-label" style="margin-top:-5px;">Toon als</label>
	            <div class="col-md-9">
	            	<toggle-button id="toggleBoolean" :sync="true" :width="130" :value="booleanAsSelect" :labels="{checked: 'LIJST MET OPTIES', unchecked: 'CHECKBOX'}" @change="handleToggle"/>
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'input' || this.field.config.widget === 'select'">
	            <label class="col-md-3 control-label">Veldbreedte</label>
	            <div class="col-md-9">
					<select class="form-control input-small" v-model="field.config.width" @change="update">
						<option value="small">40%</option>
						<option value="medium">70%</option>
						<option value="large">100%</option>
					</select>
					<span class="help-inline"> Deze optie werkt niet voor 'inline' formulieren</span>
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'input'">
	            <label class="col-md-3 control-label">Soort veld</label>
	            <div class="col-md-9">
					<select class="form-control input-small" v-model="field.config.fieldtype" @change="update">
						<option value="input">invulveld</option>
						<option value="text">tekstveld</option>
					</select>
					<span class="help-inline"> Deze optie werkt niet voor 'inline' formulieren</span>
	            </div>
	        </div>
			<div class="form-group" v-if="field.config.widget === 'title'">
	            <label class="col-md-3 control-label">Font</label>
	            <div class="col-md-9">
		            <font-input v-model="field.config.font" @fontupdate="update"></font-input>
	            </div>
	        </div>
			<div class="form-group" v-if="field.config.widget === 'image'">
	            <label class="col-md-3 control-label">URL plaatje</label>
	            <div class="col-md-9">
                    <input type="text" v-model="field.config.label" @keyup="update" class="form-control" placeholder="http://"/>
	            </div>
	        </div>
			<div class="form-group" v-if="field.config.widget === 'image'">
	            <label class="col-md-3 control-label">Positie</label>
	            <div class="col-md-9">
	                <select class="form-control input-medium" v-model="field.config.align" @change="update">
	                    <option value="left">links</option>
	                    <option value="center">gecentreerd</option>
	                    <option value="right">rechts</option>
	                </select>
	            </div>
	        </div>
			<div class="form-group" v-if="field.config.widget === 'image'">
	            <label class="col-md-3 control-label">Grootte</label>
	            <div class="col-md-9">
                    <input type="number" v-model="field.config.defaultvalue" @keyup="update" class="form-control input-small" placeholder="percentage"/>
                    <span class="help-inline"> Laat leeg of geef een percentage op</span>
	            </div>
	        </div>
	        <div class="form-group" v-show="field.config.widget === 'image'">
	            <label class="col-md-3 control-label">Locatie</label>
	            <div class="col-md-9">
	            	<toggle-button style="margin-top:8px;" id="toggleImageOnTop" :sync="true" :width="130" :value="field.config.hidden" :labels="{checked: 'ALTIJD BOVENAAN', unchecked: 'Tussen velden'}" @change="handleToggle"/>
	            </div>
	        </div>
	        <div class="form-group" v-show="field.type === 'tekst'">
	            <label class="col-md-3 control-label">&nbsp;</label>
	            <div class="col-md-9">
	            	<toggle-button id="toggleRequired" :sync="true" :width="130" :value="field.config.required" :labels="{checked: 'VERPLICHT VELD', unchecked: 'NIET VERPLICHT'}" @change="handleToggle"/>
	            </div>
	        </div>
	        <div class="form-group" v-show="this.field.config.widget === 'select' && this.field.type != 'ja/nee'">
	            <label class="col-md-3 control-label">Opties</label>
	            <div class="col-md-9">
	            	<div style="margin-top:8px;" v-show="field.config.options && field.config.options.length == 0">Geen opties gedefinieerd...</div>
					<div id="fieldOptions">
			            <div v-for="f in field.config.options" v-bind:id="valuetoid(f)" class="fielditem">
					        <div v-show="editedfield == null" class="fieldcolumn" style="width:40%"> {{ f.label }} </div>
					        <div v-show="editedfield != null && editedfield === f" class="fieldcolumn" style="width:90%">
					        	Waarde: <input type="text" class="form-control" placeholder="geef een waarde" v-model="optionvalue"/>
					        	<p>
						        	<button @click.prevent="cancelEditOption" class="btn btn-xs">annuleren</button> &nbsp;
						        	<button @click.prevent="saveEditOption" class="btn btn-xs blue-madison">bewaren</button>
					        	</p>
							</div>
					        <div class="fieldcolumn" style="width:10%; margin-left:1em;" v-show="editedfield == null && field.id != 'relation_funnelState'">
					        	<button @click.prevent="editOption(f)" class="btn btn-xs blue-madison">wijzig</button>
					        </div>
					        <div class="fieldcolumn" style="width:35%; margin-left:1em;" v-show="editedfield == null">
					        	<button @click.prevent="confirmdel = f" v-show="confirmdel == null && field.id != 'relation_funnelState'" class="btn btn-xs red-pink">verwijder</button>
					        	<button @click.prevent="removeOption(f)" v-show="confirmdel == f" class="btn btn-xs red">Zeker weten?</button>
					        	<button @click.prevent="confirmdel = null" v-show="confirmdel == f" class="btn btn-xs">Annuleren</button>
					        	<button class="btn btn-xs" style="background-color:white;" @click.prevent="fieldUp(f)" v-show="f.order > 1" title="omhoog"><img :src="imgup"/></button>
								<button class="btn btn-xs" style="background-color:white;" @click.prevent="fieldDown(f)" v-show="f.order < field.config.options.length" title="omlaag"><img :src="imgdown"/></button>
					        </div>
					        <div style="clear:left"/>
						</div>
					</div>
					<button @click.prevent="addOption" v-show="field.id != 'relation_funnelState'" style="margin-top: 0.5em;" class="btn btn-sm">optie toevoegen</button>					
	            </div>
	        </div>
	        <div class="form-group" v-show="field.type != 'other'">
	            <label class="col-md-3 control-label">&nbsp;</label>
	            <div class="col-md-9">
	            	<p><toggle-button id="toggleHidden" :sync="true" :width="130" :value="field.config.hidden" :labels="{checked: 'ONZICHTBAAR VELD', unchecked: 'ZICHTBAAR'}" @change="handleToggle"/></p>
                    <div v-show="((field.type == 'ja/nee' && field.config.widget === 'select') || (field.type != 'ja/nee' && (field.config.hidden || !field.config.hidden)))">Vooringevulde waarde: 
	                    <input type="text" v-if="field.type === 'tekst'" v-model="field.config.defaultvalue" @keyup="update" class="form-control" placeholder="Vooringevulde waarde..."/>
	                </div>
                    <select v-if="field.config.options && field.config.options.length > 0" @change="handleChangedDefault" v-model="field.config.defaultvalue" class="form-control">
			            <option v-for="o in field.config.options" :value="o.value">{{o.label}}</option>
					</select>
	            </div>
	        </div>
	        <div class="form-group">
	            <div class="col-md-offset-3 col-md-9">
					<button @click.prevent="close" class="btn blue-madison" v-show="field.category != 'vrij veld'">Sluiten</button>
					<button @click.prevent="close" class="btn" v-show="field.category === 'vrij veld'">Sluiten</button>
					<button @click.prevent="close" class="btn blue-madison" style="margin-left:1em;" v-show="field.category === 'vrij veld'">Bewaren</button>
					<span v-show="field.category === 'vrij veld'" style="color:#a0a0a0"><br/>Bewaar gemaakte wijzigingen in dit vrije veld</span>
	            	<span style="color:red" v-show="errors">&nbsp; {{errors}}</span>
	            </div>
	        </div>
		</div>
	</form>
</template>

<script>

    import Vue from 'vue';
	import Commons from 'common/commons.js';
	import fontInput from './fontInput.vue';
	import draggable from 'vuedraggable'; // https://github.com/SortableJS/Vue.Draggable

    export default Vue.component('FieldEditor', {
		components: {
			fontInput, draggable
		},
		props: {
			field: Object,
			aid: String
		},
		computed: {
			imgup: function() {
				return Commons.host() + '/admin/images/icons/up.png';
			},
			imgdown: function() {
				return Commons.host() + '/admin/images/icons/down.png';
			},
			booleanAsSelect: function() {
				return this.field.config.widget != 'check';
			}
		},
		methods: {
			handleChangedDefault: function() {
				//console.log(this.field.config.defaultvalue);
				this.update();
			},
			valuetoid: function (f) {
				return btoa(f.value);
			},
			fieldUp: function(option) {
				//console.log('current order = ' + option.order);
				let other = this.field.config.options[option.order-2];
				this.field.config.options[option.order-2] = option;
				this.field.config.options[option.order-1] = other;
				other.order = option.order-1;
				option.order = option.order-2;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
			fieldDown: function(option) {
				//console.log('current order = ' + option.order);
				let other = this.field.config.options[option.order];
				this.field.config.options[option.order] = option;
				this.field.config.options[option.order-1] = other;
				other.order = other.order-1;
				option.order = option.order+1;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
			reorder: function() {
				if ($('#fieldOptions').children().length > 1) {
					let me = this;
					$('#fieldOptions').children().each(function (childIndex, child) {
						me.field.config.options.forEach(function (option, index) {
							if (child.id === me.valuetoid(option)) {
								option.order = childIndex + 1;
							}
						});
					});
					me.field.config.options.sort(function(a, b) {
						return a.order - b.order;
					});
					// also set the default to the first option
					this.field.config.defaultvalue = me.field.config.options[0].value;
				}
				this.$emit('updateField');
			},
			addOption: function() {
				this.field.config.options.push({value: 'nieuwe optie', label: 'nieuwe optie', order: this.field.config.options.length+1 });
				this.$emit('updateField');
			},
			editOption: function(f) {
				this.editedfield = f;
				this.optionvalue = f.value;
			},
			cancelEditOption: function() {
				this.editedfield = null;
			},
			saveEditOption: function() {
				this.optionvalue = this.optionvalue.replace('"', '');
				this.optionvalue = this.optionvalue.replace(',', '');
				if (this.optionvalue.trim().length > 0) {
					this.editedfield.value = this.optionvalue.trim();
					this.editedfield.label = this.optionvalue.trim();
					this.$emit('updateField');
				}
				this.editedfield = null;
			},
			removeOption: function(field) {
				let valueToRemove = field.value;
				field.order = 0;
				let i = this.field.config.options.indexOf(field);
				this.field.config.options.splice(i, 1);
				if (this.field.config.defaultvalue === valueToRemove) {
					if (this.field.config.options.length > 0) {
						this.field.config.defaultvalue = this.field.config.options[0].value;
					}
					else {
						this.field.config.defaultvalue = '';
					}
				}
				this.confirmdel = null;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
	        handleToggle: function(val) {
				if (val.srcEvent.target.parentElement.id === 'toggleRequired') {
					this.field.config.required = val.value;
				}
				else if (val.srcEvent.target.parentElement.id === 'toggleBoolean') {
					if (val.value) {
						this.field.config.widget = 'select';
						this.field.config.options = [{"value":"true","label":"Ja","order":1},{"value":"false","label":"Nee","order":2}];
					}
					else {
						this.field.config.widget = 'check';
						this.field.config.options = [];
					}
				}
				else if (val.srcEvent.target.parentElement.id === 'toggleHidden') {
					this.field.config.hidden = val.value;
				}
				else if (val.srcEvent.target.parentElement.id === 'toggleImageOnTop') {
					this.field.config.hidden = val.value;
				}
				this.errors = null;
				this.$emit('updateField');
			},
			update: function() {
				this.errors = null;
				this.$emit('updateField');
			},
			validate: function() {
				if (this.field.config.hidden && this.field.config.defaultvalue === '') {
					this.errors = 'Geef een vooringevulde waarde op!';
					return false;
				}
				else {
					return true;
				}
			},
			close: function() {
				if (this.validate()) {
					this.errors = null;
					let me = this;
					if (this.field.category === 'vrij veld') {
						$.ajax({
							url: Commons.api() + '/ajax/vue/' + me.aid + '/updatefield',
							type: 'POST',
							cache: false,
							timeout: 60000,
							contentType: 'application/json; charset=utf-8',
							dataType: 'json',
							data: JSON.stringify(me.field),
							success: function(data, textStatus, xhr) {
								//console.log(data);
								me.$emit('close');
							}
						});
					}
					else {
						this.$emit('close');
					}
				}
			},
  		},
		data: function() {
			return {
				confirmdel: null,
				errors: null,
				editedfield: null,
				optionvalue: ''
			}
		},
		mounted: function () {
		},
		created: function() {
		}
    });

</script>

<style>
</style>