<template>

<form class="form-horizontal" role="form" style="margin-right:2em">
    <div class="form-body">

        <h2 style="margin-bottom:1em;">Formulierinstellingen</h2>

        <div class="form-group">
            <label class="col-md-3 control-label">Breedte</label>
            <div class="col-md-9">
				<div class="input-group" style="width:190px">
					<input type="number" class="form-control" min="0" step="10" maxlength="3" v-model="config.width" @keyup="update" @change="update"/>
					<div class="input-group-btn">
					    <button type="button" class="btn blue dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> {{ config.widthunit }}</button>
					    <ul class="dropdown-menu">
					    	<li><a @click="updateWidthUnit($event)" data-widthunit="px">px</a></li>
					    	<li><a @click="updateWidthUnit($event)" data-widthunit="%">%</a></li>
					    </ul>
					</div>
				</div>
				<span class="fieldhelp">TIP: gebruik een percentage (bijvoorbeeld 100%) voor responsive formulieren</span>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-3 control-label">Linker marge</label>
            <div class="col-md-9">
                <input type="number" min="0" maxlength="3" v-model="config.fieldpadding" @keyup="update" @change="update" class="form-control input-small" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Formulierkleur</label>
			<div class="col-md-9">
            	<div class="input-group input-medium">
	                <input v-show="!colordef" type="color" v-model="config.bgcolor" @change="update" class="form-control" style="cursor:pointer;">
					<input v-show="colordef" type="text" v-model="config.bgcolor" @change="update" class="form-control"/>
	            	<div class="input-group-btn">
						<button type="button" class="btn blue" tabindex="-1" @click="colordef = !colordef" title="geef een kleurcode op">#</button>
					</div>
            	</div>
	        </div>
		</div>
        <div class="form-group">
            <label class="col-md-3 control-label">Plaatje</label>
            <div class="col-md-9">
            	<div class="imgToggle" v-show="editImage == false" @click="editImage = true"><u>Aanpassen</u></div>
            	<div v-show="editImage" style="border: dashed 1px #d0d0d0; padding:10px; background-color:white">
	                URL achtergrondplaatje: <input type="url" v-model="config.image.url" ref="urlinput" @keyup="updateImage" class="form-control" placeholder="url">
	                <br/>Layout: <select class="form-control input-medium" v-model="config.image.pos" @change="changeImagePos">
	                    <option value="cover">bedekt</option>
	                    <option value="contain">passend</option>
	                    <option value="perc">zelf instellen</option>
	                </select>
	                <span style="font-size:0.85em; color:#808080;">{{imagePosDesc}}<br/></span>
	                <div v-show="config.image.pos === 'perc'">
		                <br/>Percentage: <input type="number" v-model="config.image.width" @keyup="updateImage" class="form-control input-small">
		                <br/>Left: <input type="number" v-model="config.image.left" @keyup="updateImage" class="form-control input-small">
		                <br/>Top: <input type="number" v-model="config.image.top" @keyup="updateImage" class="form-control input-small">
	                </div>
		            <br/><button @click.prevent="editImage = false" class="btn blue-madison btn-sm">sluiten</button>
	            </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Kader</label>
            <div class="col-md-9">
	            <border-input v-model="config.border" @borderupdate="update"></border-input>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Labels</label>
            <div class="col-md-9">
                <select class="form-control input-medium" v-model="config.layout" @change="update">
                    <option value="horiz">naast velden</option>
                    <option value="normal">boven velden</option>
                    <option value="inline">alles naast elkaar</option>
                </select>
            </div>
        </div>
        <div class="form-group" v-show="config.layout === 'horiz'">
            <label class="col-md-3 control-label">Marge labels</label>
            <div class="col-md-9">
                <select class="form-control input-small" v-model="config.columns" @change="update">
                    <option value="2-10">17%</option>
                    <option value="3-9">25%</option>
                    <option value="4-8">33%</option>
                    <option value="5-7">40%</option>
                    <option value="6-6">50%</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Ruimte tussen velden</label>
            <div class="col-md-9">
                <input type="number" min="0" maxlength="2" v-model="config.fieldheight" @change="update" @keyup="update" class="form-control input-small" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Verberg labels</label>
            <div class="col-md-9">
				<toggle-button id="toggleHidelabels" class="artoggle" :sync="true" :width="60" :value="this.currentConfig.hidelabels" :labels="{checked: 'JA', unchecked: 'NEE'}" @change="handleToggle"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Grote tekstvelden</label>
            <div class="col-md-9">
				<toggle-button id="toggleLargeinputs" class="artoggle" :sync="true" :width="60" :value="this.currentConfig.largeinputs" :labels="{checked: 'JA', unchecked: 'NEE'}" @change="handleToggle"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Toon schaduw</label>
            <div class="col-md-9">
				<toggle-button id="toggleShadow" class="artoggle" :sync="true" :width="60" :value="this.currentConfig.shadow" :labels="{checked: 'JA', unchecked: 'NEE'}" @change="handleToggle"/>
            </div>
        </div>
		<div class="form-group">
            <label class="col-md-3 control-label">Label-font</label>
            <div class="col-md-9">
	            <font-input v-model="config.labels" @fontupdate="update"></font-input>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Helpregel-font</label>
            <div class="col-md-9">
	            <font-input v-model="config.help" @fontupdate="update"></font-input>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Footer-font</label>
            <div class="col-md-9">
	            <font-input v-model="config.footer" @fontupdate="update"></font-input>
            </div>
        </div>

        <h2 style="margin-bottom:1em;">Titel instellingen</h2>

        <div class="form-group">
            <label class="col-md-3 control-label">Toon titel</label>
            <div class="col-md-9">
				<toggle-button id="toggleTitle" class="artoggle" :sync="true" :width="60" :value="this.currentConfig.title.enabled" :labels="{checked: 'JA', unchecked: 'NEE'}" @change="handleToggle"/>
            </div>
        </div>
        <div class="form-group" v-show="hasTitle">
            <label class="col-md-3 control-label">Tekst</label>
            <div class="col-md-9">
				<textarea class="form-control" v-model="config.title.text" @keyup="update" cols="80" rows="5" style="height:50px;"></textarea>
            </div>
        </div>
        <div class="form-group" v-show="hasTitle">
            <label class="col-md-3 control-label">Font</label>
            <div class="col-md-9">
	            <font-input v-model="config.title.font" @fontupdate="update"></font-input>
            </div>
        </div>
        <div class="form-group" v-show="hasTitle">
            <label class="col-md-3 control-label">Positie</label>
            <div class="col-md-9">
				<select class="form-control input-small" v-model="config.title.align" @change="update">
					<option value="left">Links</option>
					<option value="right">Rechts</option>
					<option value="center">Gecentreerd</option>
				</select>
            </div>
        </div>

        <h2 style="margin-bottom:1em;">Verzendknop instellingen</h2>

        <div class="form-group">
            <label class="col-md-3 control-label">Kleur</label>
            <div class="col-md-9">
                <input type="color" v-model="config.button.bgcolor" @change="update" class="form-control input-medium" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Kader</label>
            <div class="col-md-9">
	            <border-input v-model="config.button.border" @borderupdate="update"></border-input>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Font</label>
            <div class="col-md-9">
	            <font-input v-model="config.button.font" @fontupdate="update"></font-input>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Grootte</label>
            <div class="col-md-9">
                <input type="number" min="0" maxlength="2" v-model="config.button.padding" @change="update" class="form-control input-small" placeholder="">
            </div>
        </div>
        <div class="form-group" v-show="config.layout != 'inline'">
            <label class="col-md-3 control-label">Positie</label>
            <div class="col-md-9">
				<select class="form-control input-small" v-model="config.button.align" @change="update">
					<option value="left">Links</option>
					<option value="right">Rechts</option>
					<option value="center" v-if="config.layout != 'horiz'">Gecentreerd</option>
				</select>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">Breedte</label>
            <div class="col-md-9">
				<select class="form-control input-small" v-model="config.button.width" @change="update">
					<option value="0">n.v.t.</option>
					<option value="40%">40%</option>
					<option value="70%">70%</option>
					<option value="100%">100%</option>
				</select>
            </div>
        </div>

        <h2 style="margin-bottom:1em;">Toon als popup</h2>

        <div class="form-group">
            <label class="col-md-3 control-label">Actief</label>
            <div class="col-md-9">
				<toggle-button id="togglePopup" class="artoggle" :sync="true" :width="60" :value="this.currentConfig.popup" :labels="{checked: 'JA', unchecked: 'NEE'}" @change="handleToggle"/>
                <br/><span class="fieldhelp">Toon het formulier in een popup</span>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-3 control-label">Wachttijd</label>
            <div class="col-md-9">
                <input type="number" min="0" maxlength="2" v-model="config.popuptime" @change="updatePopupTime" class="form-control input-small" placeholder="">
                <span class="fieldhelp">Wachttijd in seconden voordat de popup verschijnt</span>
            </div>
        </div>
<!--
        <div class="form-group">
            <label class="col-md-3 control-label">Activatie</label>
            <div class="col-md-9">
				<select class="form-control input-small" v-model="config.popupentry" @change="update">
					<option value="display">Centraal</option>
					<option value="left">Vanaf links</option>
					<option value="top">Vanaf bovenkant</option>
					<option value="right">Vanaf rechts</option>
					<option value="bottom">Vanaf onderkant</option>
				</select>
                <span class="fieldhelp">Geef aan hoe de popup verschijnt</span>
            </div>
        </div>
-->
        <h2 style="margin-bottom:1em;">Extra stijl-instellingen</h2>

        <div class="form-group">
            <label class="col-md-3 control-label">CSS definities</label>
            <div class="col-md-9">
                <textarea v-model="config.extraCss" @change="update" class="form-control" placeholder="" rows="4" cols="80"></textarea>
            </div>
        </div>

<!--
	    <button type="button" @click="save" class="btn blue-madison">Bewaar wijzigingen</button>
-->

    </div>
</form>

</template>

<script>

    import Vue from 'vue';
	import Commons from 'common/commons.js';
	import borderInput from './borderInput.vue';
	import fontInput from './fontInput.vue';

    export default Vue.component('FormEditor', {
		components: {
			borderInput, fontInput
		},
		data() {
			return {
				config: this.currentConfig,
				editImage: false,
				imagePosDesc: '',
				colordef: false,
				imgUsed: (this.currentConfig.image.url && this.currentConfig.image.url.length > 0)
			}
		},
		props: {
			currentConfig: Object
		},
		methods: {
			save: function() {
				this.$emit('save');
			},
			handleToggle: function(val) {
				if (val.srcEvent.target.parentElement.id === 'toggleShadow')
					this.currentConfig.shadow = val.value;
				else if (val.srcEvent.target.parentElement.id === 'toggleTitle')
					this.currentConfig.title.enabled = val.value;
				else if (val.srcEvent.target.parentElement.id === 'toggleHidelabels')
					this.currentConfig.hidelabels = val.value;
				else if (val.srcEvent.target.parentElement.id === 'toggleLargeinputs')
					this.currentConfig.largeinputs = val.value;
				else if (val.srcEvent.target.parentElement.id === 'togglePopup') {
					this.currentConfig.popup = val.value;
					if (val.value && this.currentConfig.popuptime == 0) {
						let me = this;
						Vue.nextTick(function () {
							me.currentConfig.popuptime = 20;
						});
					}
				}
				this.update();
			},
			changeImagePos: function(e) {
				if (this.config.image.pos === 'cover') {
					this.imagePosDesc = 'Plaatje wordt aangepast zodat het formulier geheel bedekt is';
				}
				else if (this.config.image.pos === 'contain') {
					this.imagePosDesc = 'Plaatje wordt aangepast maar binnen de grenzen van het formulier.';
				}
				else if (this.config.image.pos === 'perc') {
					this.imagePosDesc = 'Je kunt zelf de grootte en positie van het plaatje instellen';
					if (this.config.image.width === '0') this.config.image.width = '100';
				}
				this.update();
			},
			update: function(e) {
				if (this.config.button.align === 'center' && this.config.layout === 'horiz') {
					this.config.button.align = 'left';
				}
				this.$emit('updateForm', this.config);
			},
            updateImage: function() {
				this.config.image.url = this.$refs.urlinput.value;
				this.$emit('updateForm', this.config);
            },
			updateWidthUnit: function (e) {
				this.config.widthunit = e.target.dataset.widthunit;
				this.update(e);
		    },
			updatePopupTime: function(e) {
				if (this.config.popuptime < 0) this.config.popuptime = 0;
				this.update(e);
			},
			doreset: function() {
				this.config = this.currentConfig;
			}
  		},
		computed: {
			showPopuptime() {
				return this.currentConfig.popup;
			},
            hasImage() {
                return (this.config.image.url) && this.config.image.url.trim().length > 0;
            },
            hasTitle() {
            	return (this.config.title) && this.config.title.enabled;
            }
		},
		mounted: function () {
		},
		created: function() {
		}
    });     

</script>

<style>
.imgToggle {
	padding-top: 8px;
	margin-bottom: 10px;
	cursor: pointer;
}
.imgToggle:hover {
	color:#43607a;
}
.artoggle {
	margin-top: 0.5em;
	height: 30px!important;
}
.fieldhelp {
	font-size:0.85em;
	color:#909090;
}
</style>