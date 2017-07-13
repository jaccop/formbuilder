<template>

    <div class="form-body" style="margin-right:2em;">
		<div class="form-group">
			<h4>Gebruik de layout van een ander formulier</h4>
			<p style="color:#909090; font-size:0.8em; margin-bottom:1em; margin-top:0em;">Je kan op elk moment de layout wijzigen van het formulier waar je mee bezig bent.</p>
			<select class="form-control" v-model="template">
				<option v-for="f in formTemplates" :value="f">{{f.name}}</option>
			</select>
			<button class="btn blue-madison" @click="reuseForm" style="margin-top:0.5em;">Toepassen</button>
        </div>
<!--
		<p v-if="issu"><button class="btn btn-warn" @click="savePreset">Bewaar nieuw preset</button><br/>{{presetsaved}}</p>
-->
		<h4 style="margin-top:2em;">Of gebruik &eacute;&eacute;n van de onderstaande voorbeelden</h4>
		<p style="color:#909090; font-size:0.8em; margin-bottom:1em; margin-top:0em;">Je kan op elk moment de layout wijzigen van het formulier waar je mee bezig bent.</p>
	    <div class="template-item" v-for="t in realTemplates" v-bind:title="t.name">
			<img v-bind:src="t.image" width="200"/><br/>
			<button class="btn btn-sm blue-madison" @click="reusePreset(t)" style="margin-top:0.5em;">Toepassen</button>
		</div>

    </div>

</template>

<script>

    import Vue from 'vue';
	import Commons from 'common/commons.js';

    export default Vue.component('TemplateTab', {
		props: {
			formdef: Object,
			fields: Array,
			issu: String
		},
		computed: {
			formTemplates: function() {
				return this.templates.filter(function(t) {
					return t.formId > 0;
				});
			},
			realTemplates: function() {
				return this.templates.filter(function(t) {
					return t.formId == 0;
				});
			}
		},
		data() {
			return {
				presetsaved: '',
				templates: [],		// all templates and forms
				template: Object,	// selected template
			}
		},
		methods: {
			savePreset: function() {
				let me = this;
				let p = JSON.parse(JSON.stringify(this.formdef));
				p.fields = JSON.parse(JSON.stringify(this.fields));
				$.ajax({
					url: Commons.api() + '/ajax/vue/presets',
					type: 'POST',
					cache: false,
					timeout: 60000,
					contentType: 'application/json; charset=utf-8',
					dataType: 'json',
					data: JSON.stringify(p),
					success: function(data, textStatus, xhr) {
						me.presetsaved = 'Preset is bewaard met ID ' + data.id + '. Maak een screenshot (200x200) met naam \'forms5_ID.jpg\'';
					}
				});
			},
			reuseForm: function() {
				if (this.template.template) {
					this.$emit('switchTemplate', this.template.template);
				}
				else {
					// template contents not loaded yet, do it now
					let me = this;
					$.ajax({
						url: Commons.api() + '/ajax/vue/forms/' + me.template.formId + '/content',
						type: 'GET',
						success: function(data, textStatus, xhr) {
							me.template.template = JSON.parse(data.templates[0].template);
							me.$emit('switchTemplate', me.template.template);
						}
					});
				}
			},
			reusePreset: function(t) {
				if (t.template) {
					this.$emit('switchTemplate', t.template);
				}
				else {
					// template contents not loaded yet, do it now
					let me = this;
					$.ajax({
						url: Commons.api() + '/ajax/vue/templates/' + t.templateId + '/content',
						type: 'GET',
						success: function(data, textStatus, xhr) {
							me.template.template = JSON.parse(data.templates[0].template);
							me.$emit('switchTemplate', me.template.template);
						}
					});
				}
			}
  		},
		created: function() {
			// get all templates
			let me = this;
			$.ajax({
				url: Commons.api() + '/ajax/vue/templates/' + Commons.reqpar('aid'),
				type: 'GET',
				success: function(data, textStatus, xhr) {
					me.templates = data.templates;
				}
			});
		}
    });     

</script>

<style>
.template-item {
	text-align: center;
	border: solid 0px #e0e0e0;
	background-color: #f0f0f0;
	padding:10px;
	margin: 5px;
	width: 140px;
	float: left;
}
.template-item img {
	width: 100px;
	height: 100px;
}
</style>