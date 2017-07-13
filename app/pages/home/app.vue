<template>

	<div id="app" class="page-content" style="width:100%">
		<div class="page-content-inner">
			<div class="row" style="margin:0px">
				<div class="col-md-5 col-sm-6 col-lg-5" style="min-height:400px;">
					<div class="tabbable-line">
						<ul class="nav nav-tabs ">
						    <li>
						        <a href="#tab_15_1" data-toggle="tab"> Templates </a>
						    </li>
						    <li class="active">
						        <a href="#tab_15_2" data-toggle="tab"> Formulier </a>
						    </li>
						    <li>
						        <a href="#tab_15_3" data-toggle="tab"> Velden </a>
						    </li>
						    <li>
						        <a href="#tab_15_4" data-toggle="tab"> Website </a>
						    </li>
						</ul>
						<div class="tab-content" style="background-color:#fbfbfb; padding:15px 0px; border:1px solid #f0f0f0; height:560px; padding-left:1em; overflow-x: hidden; overflow-y: scroll;">
							<div class="tab-pane" id="tab_15_1">
								<template-tab @switchTemplate="handleTemplateSelect" :issu="su" :formdef="formconfig" :fields="formfields"/>
							</div>
							<div class="tab-pane active" id="tab_15_2">
								<form-editor :current-config="formconfig" @updateForm="renderForm" @save="saveAndConfirm"/>
							</div>
							<div class="tab-pane" id="tab_15_3">
								<div v-show="!showFieldEditor">
									<div style="color:#404040; padding-top:0.5em; line-height:30px; font-size:1.2em;">Gebruikte velden in het formulier</div>
									<div class="formfieldscontainer">
										<div id="selectedFormFields">
								            <div v-for="f in formfields" v-bind:id="f.id" class="fielditem">
										        <div class="fieldcolumn" style="width:45%"> {{ f.label }} </div>
										        <div class="fieldcolumn" style="width:10%; margin-left:1em;">
										        	<button v-show="f.id != 'captcha' && f.id != 'readerimg'" @click.prevent="editField(f)" class="btn btn-xs blue-madison">wijzig</button>
										        </div>
										        <div class="fieldcolumn" style="width:35%; margin-left:1em;">
										        	<button @click.prevent="confirmdel = f" v-show="confirmdel == null" class="btn btn-xs red-pink">verwijder</button>
										        	<button @click.prevent="removeField(f)" v-show="confirmdel == f" class="btn btn-xs red">Zeker weten?</button>
										        	<button @click.prevent="confirmdel = null" v-show="confirmdel == f" class="btn btn-xs">Annuleren</button>
										        	<button class="btn btn-xs" style="background-color:white;" @click.prevent="fieldUp(f)" v-show="f.order > 1" title="omhoog"><img :src="imgup"/></button>
										        	<button class="btn btn-xs" style="background-color:white;" @click.prevent="fieldDown(f)" v-show="f.order < formfields.length" title="omlaag"><img :src="imgdown"/></button>
										        </div>
										        <div style="clear:left"/>
											</div>
										</div>
									</div>

									<div v-show="!creatingField" class="input-group" style="width:98%; margin-top:3em;">
										<span class="input-group-addon input-circle-left" style="color:#303030; font-size:1.2em;"> Veld toevoegen:</span>
										<input type="text" v-model="fieldfilter" @keyup="filter" class="form-control" placeholder="Filter op naam">
										<span class="input-group-addon input-circle-right" @click="newField" style="cursor:pointer; color: #3f74a3;" title="Nieuw vrij veld aanmaken">nieuw...</span>
									</div>
									<div v-show="creatingField" style="background-color:white; margin:1em; margin-left:0px; padding:0.5em; border: dashed 1px #d0d0d0; border-radius: 8px;">
										<h4>Nieuw veld aanmaken</h4>
										<form class="form-horizontal" role="form">
											<div class="form-body">
										        <div class="form-group">
										            <label class="col-md-3 control-label">Titel</label>
										            <div class="col-md-9">
									                    <input type="text" v-model="newFieldName" class="form-control">
										            </div>
										        </div>
										        <div class="form-group">
										            <label class="col-md-3 control-label">Type</label>
										            <div class="col-md-9">
														<select class="form-control input-small" v-model="newFieldType">
															<option value="string">tekst</option>
															<option value="boolean">ja/nee veld</option>
															<option value="list">lijst</option>
														</select>
										            </div>
										        </div>
										        <div class="form-group">
										            <div class="col-md-offset-3 col-md-9">
														<button @click.prevent="creatingField = false" class="btn">Annuleren</button> &nbsp;
														<button @click.prevent="saveNewField" v-show="newFieldName.trim().length > 0" class="btn blue-madison">Bewaren</button>
										            </div>
										        </div>
											</div>
										</form>
									</div>
									<div v-show="!creatingField">
							            <div v-show="f.visible" v-for="f in fields" v-bind:id="f.id" class="fielditem" style="cursor:auto;">
									        <div class="fieldcolumn" style="width:35%"> {{ f.label }} </div>
									        <div class="fieldcolumn" style="padding-right:3em;" v-show="f.type === 'other'"> &nbsp; </div>
									        <div class="fieldcolumn" style="padding-right:3em;" v-show="f.type != 'other'"> {{ f.type }}</div>
									        <div class="fieldcolumn text-info" style="width:20%">{{ f.category }}</div>
									        <div class="fieldcolumn" style="width:15%; margin-left:1em;"><button @click.prevent="addField(f)" class="btn btn-xs blue-madison">Toevoegen</button></div>
									        <div style="clear:left"/>
									    </div>
									</div>
								</div>
								<field-editor v-show="showFieldEditor" @updateField="renderForm" @close="closeFieldEditor" :aid="aid" :field="targetfield"/>
							</div>
							<div class="tab-pane" id="tab_15_4">
								<exportpanel ref="vueExport" :htmlexport="htmlexport" :htmlminimal="htmlminimal" :issu="su" :triggercode="triggerCode" :adminid="aid" :definition="formconfig" @save="saveAndConfirm"/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-7 col-sm-6 col-lg-7" style="padding:4px; padding-top:3em;">
					<div id="formpreviewdiv"></div>
					<p><button type="button" @click="saveAndConfirm" class="btn blue-madison">Bewaar wijzigingen</button></p>
					<!-- 
					<p v-show="formfields.length > 0" style="max-width:600px; margin-top:10px; font-family:courier; font-size:0.9em; border: 1px solid #d0d0d0">{{ formfields }}</p>
					<p style="display:none; max-width:600px; margin-top:50px; font-family:courier; font-size:0.8em; border: 1px solid #d0d0d0">{{ definition }}</p>
					{{formconfig}}
					-->
				</div>
			</div>
		</div>

		<confirm title="Formuliereditor" text="Het formulier is bewaard!" confirm-button="Sluiten" v-if="showModal" @confirm="showModal = false"></confirm>

	</div>

 </template>

<script>
    import Vue from 'vue';
	import Commons from 'common/commons.js';
	import FieldEditor from './fieldeditor.vue';
	import FormEditor from './formeditor.vue';
	import Exportpanel from './exportpanel.vue';
	import TemplateTab from './templates.vue';
	import {renderer} from './renderer.js';
	import Confirm from './modal.vue';

    export default Vue.component('app', {
		mixins: [renderer],
		components: {
			Confirm
		},
		data() {
			return {
				pid: Commons.reqpar('pid'),		// product
				lmid: Commons.reqpar('lmid'),	// listmanager
				aid: Commons.reqpar('aid'),		// admin
				wid: Commons.reqpar('wid'),		// workflow,
				formid: Commons.reqpar('id'),	// form
				su: Commons.reqpar('su'),		// superuser true or false
				fields: [],
				formfields: [],
				fieldfilter: '',
				targetfield: {config:{}},
				showFieldEditor: false,
				confirmdel: null,
				showcode: false,
				showModal: false,
				creatingField: false,
				newFieldName: '',
				fieldheight: '0',
				newFieldType: 'list',
				templateid: '',
				popup: false,
				popuptime: 5,
				popupentry: '',
				popupbg: 'rgba(0,0,0,0.2)',
				formconfigCopy: null,
				formfieldsCopy: null,
				formconfig: {
					bgcolor: '#ffffee',
					labels: {
						color: '#303030',
						size: '14',
						lineheight: '20',
						bold: false,
						family: 'Open Sans',
						italic: false,
						align: 'left',
						unit: 'px'
					},
					help: {
						color: '#a0a0a0',
						size: '12',
						lineheight: '16',
						bold: false,
						family: 'Open Sans',
						italic: false,
						align: 'left',
						unit: 'px'
					},
					footer: {
						color: '#a0a0a0',
						size: '12',
						lineheight: '16',
						bold: false,
						family: 'Open Sans',
						italic: false,
						align: 'left',
						unit: 'px'
					},
					button: {
						bgcolor: '#eeeeee',
						font: {
							color: '#303030',
							size: '20',
							lineheight: '24',
							bold: true,
							family: 'Open Sans',
							italic: false,
							align: 'left',
							unit: 'px'
						},
						padding: '10',
						border: {
							size: '1',
							color: '#a0a0a0',
							radius: '8'
						},
						align: 'left'
					},
					title: {
						text: '',
						width: '100',
						font: {
							color: '#303030',
							size: '20',
							lineheight: '24',
							bold: true,
							family: 'Open Sans',
							italic: false,
							align: 'left'
						},
						align: 'left',
						enabled: true
					},
					usedFor: 'lm',
					extraCss: '',
					usedForId: 0,
					largeinputs: false,
					newwindow: false,
					shadow: false,
					fieldpadding: '10',
					width: '500',
					widthunit: 'px',
					affiliateCode: '',
					triggerCode: '',
					columns: '2-10', // 1-11, 3-9, 4-8, 5-7, 6-6
					hidelabels: false,
					layout: 'normal', // horiz/inline/normal
					image: {
						url: 'http://media.vector4free.com/normal/hills-landscape-preview.jpg',
						pos: 'cover', // center-block, cover, contain, see also http://stackoverflow.com/questions/11757537/css-image-size-how-to-fill-not-stretch
						width: '0', // responsive, height adusts
						top: '0',
						left: '0',
						opacity: '0' // { opacity: 0.5; filter: alpha(opacity=50) }
					},
					border: {
						size: '3',
						color: '#ffffff',
						radius: '1'
					}
				}
			}
		},
		methods: {
			addField: function(field) {
				let i = this.fields.indexOf(field);
				this.fields.splice(i, 1);
				if (field.config.widget === 'button') {
					field.order = this.formfields.length + 1;
					this.formfields.push(field);
				}
				else {
					if (this.formfields.length > 0) {
						let found = false;
						let me = this;
						this.formfields.forEach(function (f, idx) {
							if (f.config.widget === 'button' && !found) {
								found = true;
								field.order = idx + 1;
								me.formfields.splice(idx, 0, field);
								f.order = f.order + 1;
							}
							if (found) {
								f.order = f.order + 1;
							}
						});
						if (!found) {
							field.order = this.formfields.length + 1;
							this.formfields.push(field);
						}
					}
					else {
						field.order = this.formfields.length + 1;
						this.formfields.push(field);
					}
				}
				this.reorder();
			},
			editField: function(field) {
				this.targetfield = field;
				this.showFieldEditor = true;
			},
			newField: function(field) {
				this.creatingField = true;
			},
			saveNewField: function(field) {
				let f = {};
				let me = this;
				let thefont = { size: '12', family: 'Open Sans', color: '#303030', align: 'left', bold: false, italic: false, lineheight: '18', unit: 'px'};
				this.newFieldName = this.newFieldName.replace('"', '');
				if (this.newFieldName.trim().length > 0) {
					if ('list' === this.newFieldType) {
						f = { id: this.aid + '_FF' + Date.now(), order:0, label: this.newFieldName, type: 'opties', category: 'vrij veld', visible:true, config: {label: this.newFieldName, help: '', placeholder: '', hidden: false, required: false, widget: 'select', defaultvalue: '', width: 'medium', options: [], fieldtype: 'select', font: thefont }};
					}
					else if ('boolean' === this.newFieldType) {
						f = { id: this.aid + '_FF' + Date.now(), order:0, label: this.newFieldName, type: 'ja/nee', category: 'vrij veld', visible:true, config: {label: this.newFieldName, help: '', placeholder: '', hidden: false, required: false, widget: 'check', defaultvalue: '', width: 'medium', options: [], fieldtype: 'check', font: thefont}};
					}
					else {
						f = { id: this.aid + '_FF' + Date.now(), order:0, label: this.newFieldName, type: 'tekst', category: 'vrij veld', visible:true, config: {label: this.newFieldName, help: '', placeholder: '', hidden: false, required: false, widget: 'input', defaultvalue: '', width: 'medium', options: [], fieldtype: 'input', font: thefont}};
					}
					$.ajax({
						url: Commons.api() + '/ajax/vue/' + me.aid + '/field',
						type: 'POST',
						cache: false,
						timeout: 60000,
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						data: JSON.stringify(f),
						success: function(data, textStatus, xhr) {
							//console.log(data);
							me.creatingField = false;
							me.fields.push(f);
							me.addField(f);
						}
					});
				}
			},
			fieldUp: function(field) {
				let other = this.formfields[field.order-2];
				this.formfields[field.order-2] = field;
				this.formfields[field.order-1] = other;
				other.order = field.order-1;
				field.order = field.order-2;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
			fieldDown: function(field) {
				let other = this.formfields[field.order];
				this.formfields[field.order] = field;
				this.formfields[field.order-1] = other;
				other.order = other.order-1;
				field.order = field.order+1;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
			removeField: function(field) {
				field.order = 0;
				let i = this.formfields.indexOf(field);
				this.formfields.splice(i, 1);
				this.fields.push(field);
				this.confirmdel = null;
				let me = this;
				Vue.nextTick(function () {
					me.reorder();
				});
			},
			reorder: function() {
				if ($('#selectedFormFields').children().length > 1) {
					let me = this;
					$('#selectedFormFields').children().each(function (childIndex, child) {
						me.formfields.forEach(function (field, index) {
							if (child.id === field.id) {
								field.order = childIndex + 1;
							}
						});
					});
				}
				this.renderForm();
			},
			handleTemplateSelect: function(template) {
				// make backup
				this.formconfigCopy = JSON.parse(JSON.stringify(this.formconfig));
				this.formfieldsCopy = JSON.parse(JSON.stringify(this.formfields));
				// use template
				this.switchTemplate(this.formconfig, this.formfields, template);
				this.renderForm();
			},
			filter: function() {
				let ff = this.fieldfilter.toLowerCase();
				this.fields.forEach(function (item, index, array) {
					let label = (item.label) ? item.label : '';
					let category = (item.category) ? item.category : '';
					let type = (item.type) ? item.type : '';
					item.visible = label.toLowerCase().indexOf(ff) > -1 || category.toLowerCase().indexOf(ff) > -1 || type.toLowerCase().indexOf(ff) > -1;
				});
			},
			closeFieldEditor: function() {
				this.showFieldEditor = false;
				let me = this;
				if (this.targetfield.category == 'vrij veld') {
					let tf = this.targetfield;
					this.formfields.forEach(function (item) {
						if (item.id === tf.id) item.label = tf.config.label;
					});
					Vue.nextTick(function () {
						me.fieldfilter = '';
					});
				}
			},
			saveAndConfirm: function() {
				this.saveForm(true);
			},
			saveForm: function(showConfirmation) {
				let me = this;
				let payload = {};
				if (!me.formconfig.popuptime) me.formconfig.popuptime = 30;
				me.formconfig.fields = me.formfields;
				payload.form = me.formconfig;
				payload.html = me.htmlexport;
				$.ajax({
					url: Commons.api() + '/ajax/vue/' + me.aid + '/forms/' + me.formid,
					type: 'POST',
					cache: false,
					timeout: 60000,
					contentType: 'application/json; charset=utf-8',
					dataType: 'json',
					data: JSON.stringify(payload),
					success: function(data, textStatus, xhr) {
						if (showConfirmation) me.showModal = true;
					}
				});
			},
			saveTemplate: function() {
				let me = this;
				if (!me.formconfig.popuptime) me.formconfig.popuptime = 0;
				if (this.templateid.length > 0) {
					me.formconfig.fields = me.formfields;
					$.ajax({
						url: Commons.api() + '/ajax/vue/template/' + me.templateid,
						type: 'POST',
						cache: false,
						timeout: 60000,
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						data: JSON.stringify(me.formconfig),
						success: function(data, textStatus, xhr) {
							//console.log(data);
						}
					});
				}
			}
  		},
		computed: {
			imgup: function() {
				return Commons.host() + '/admin/images/icons/up.png';
			},
			imgdown: function() {
				return Commons.host() + '/admin/images/icons/down.png';
			},
			definition: function() {
				let s = '';
				this.formfields.forEach(function(f) {
					s += JSON.stringify(f) + '\n';
				});
				return s;
			},
			triggerCode: function() {
				if (this.formconfig.triggerCode && this.formconfig.triggerCode.trim().length > 0) {
					return this.formconfig.triggerCode.trim();
				}
				else return '';
			}
		},
		created: function() {
			// get form and all fields in one call
			if (!this.aid || this.aid === '0') this.aid = 1;
			let me = this;
			$.ajax({
				url: Commons.api() + '/ajax/vue/' + me.aid + '/forms/' + me.formid,
				type: 'GET',
				success: function(data, textStatus, xhr) {
					me.fields = data.fields;
					// copy attributes to keep bindings
					for (let attr in data.form) {
						if (data.form.hasOwnProperty(attr)) me.formconfig[attr] = data.form[attr];
					}
					me.formfields = data.form.fields;
					Vue.nextTick(function() {
						if (me.formfields.length > 0) me.renderForm();
					});
				}
			});

			// listen to Save event from parent window
			window.addEventListener('message', function(event) {
				if (event.data === 'save_form') {
					me.saveAndConfirm();
					console.log('saved v5 form from within vue');
				}
			}, false);

		}
    });

</script>

<style>
.formfieldscontainer {
	background-color:#e0e0e0;
	padding: 10px;
	border-radius: 5px;
	border: solid 1px #909090;
}
.fielditem {
	background-color:white;
	margin: 8px;
	margin-left:0px;
	padding: 4px;
	border: solid 1px #e0e0e0;
	border-radius: 3px;
	box-shadow: 5px 5px 5px #888888;
}
.fieldcolumn {
	width:10%;
	float: left;
	margin: 2px;
}
</style>