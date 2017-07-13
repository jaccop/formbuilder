<template>
	<div>
	<!--
		Wijzigingen gemaakt? Klik eerst op <button class="btn blue-madison" @click="saveForm">Bewaren</button>
		<hr/>
	-->
		<div class="row">
	        <div class="col-md-4 col-sm-4 col-xs-4">
	            <ul class="nav nav-tabs tabs-left">
	                <li class="active">
	                    <a href="#tab_6_1" data-toggle="tab" aria-expanded="true"> Hoe nu verder? </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_2" data-toggle="tab" aria-expanded="false"> Opgemaakte code </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_3" data-toggle="tab" aria-expanded="false"> Kale code </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_6" data-toggle="tab" aria-expanded="false"> Autorespond pagina </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_4" data-toggle="tab" aria-expanded="false"> Wordpress </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_5" data-toggle="tab" aria-expanded="false"> Joomla </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_7" data-toggle="tab" aria-expanded="false"> Extern pakket </a>
	                </li>
	                <li class="">
	                    <a href="#tab_6_8" data-toggle="tab" aria-expanded="false"> Facebook </a>
	                </li>
	                <li class="" v-if="issu">
	                    <a href="#tab_6_9" data-toggle="tab" aria-expanded="false"> Definitie </a>
	                </li>
	            </ul>
	        </div>
	        <div class="col-md-8 col-sm-8 col-xs-8">
	            <div class="tab-content">
	                <div class="tab-pane active in" id="tab_6_1" style="line-height:1.6em;">
	                	<h4 style="padding-bottom:1em;">Hoe plaats je het formulier op je website?</h4>
                		<h5>html code kopieren</h5>
						<span class="details">Je kunt de opgemaakte formuliercode of de kale formuliercode hier kopieren en plakken in je webpagina.
						De kale code bevat geen layout en opmaak. Normaliter gebruik je de opgemaakte code. Klik links op het betreffende item.
						</span> 
                		<h5>autorespond pagina</h5>
                		<span class="details">Gebruik een Autorespond pagina als je eerst wil testen of zelf geen website hebt.
                		Deze pagina heeft een eigen URL en staaat niet op jouw website.
                		</span>
                		<h5>wordpress plugin</h5>
                		<span class="details">Gebruik je Wordpress, dan kun je onze plugin gebruiken.
                		Klik links op het betreffende item.</span>
                		<h5>extern formulierpakket?</h5>
                		<span class="details">Wufoo, Leadpages, OptimizePress, WebinarGeek, WebinarJam: klik links op 'Extern pakket'.</span>
                		<h5>facebook</h5>
                		<span class="details">Je kunt via onze Facebook App formulieren toevoegen in je Facebook fan-pagina.</span>
	                    <p><a href="http://www.e-act.nl/help/index4?id=13825" target="_new">meer informatie...</a></p>
	                </div>
	                <div class="tab-pane fade" id="tab_6_2">
	                    <textarea cols="80" rows="19" style="width:95%; height:100%;" id="taexp">{{htmlexport}}</textarea>
	                    <button class="btn btn-sm clpbrd" data-clipboard-target="#taexp">kopieren</button>
	                </div>
	                <div class="tab-pane fade" id="tab_6_3">
	                    <textarea cols="80" rows="19" style="width:95%; height:100%;" id="tamin">{{htmlminimal}}</textarea>
	                    <button class="btn btn-sm clpbrd" data-clipboard-target="#tamin">kopieren</button>
	                </div>
	                <div class="tab-pane fade" id="tab_6_4">
		                <span class="details">Je kunt in Wordpress de formuliercode handmatig toevoegen, of onze WordPress plugin gebruiken. 
		                Deze kun je hier downloaden.</span>
	                	<p><a :href="wpurl" target="_blank" class="btn btn-default">download plugin</a></p>
	                	<span class="details">Ga dan in Wordpress naar linker menu 'Plugins | Add new'.<br/><br/>
						Kies voor de optie 'Upload'.<br/><br/>
						Upload het .zip bestand en klik op 'Install Now'.<br/><br/>
						Ga dan naar linker menu 'Instellingen'. Daar zie je een menu-optie 'Autorespond'. Klik daar op en volg de aanwijzingen.<br/><br/>
						Als de plugin geactiveerd is, kun je op elke gewenste plek in je site een formulier opnemen.
						</span>
	                </div>
	                <div class="tab-pane fade" id="tab_6_5">
		                <span class="details">Je kunt in Joomla de formuliercode handmatig toevoegen, of onze plugin gebruiken. 
		                Deze kun je hier downloaden.</span>
	                	<p><button @click="joomla" class="btn btn-default">download plugin</button></p>
	                	<span class="details">Installeer de plugin, en kopieer vervolgens de formuliercode 
	                	(zie 'Opgemaakte formuliercode') in het configuratie-venster van de plugin.<br/>
	                	Hoe dat moet, kun je in detail lezen in 
	                	<a href="http://www.e-act.nl/help/index4?id=13825" target="_blank">deze helptekst</a>.</span>
	                </div>
	                <div class="tab-pane fade" id="tab_6_6">
	                	Klik op de onderstaande knop om een landingspagina te genereren.
	                	<p><button class="btn blue-madison" @click="createLandingPage">Genereer</button></p>
	                	<p v-show="landingpage != ''">
		                	De landingspagina is bijgewerkt. De URL is:<br/><br/>
	                		<a :href="landingpage" target="_blank">{{landingpage}}</a><br/><br/>
	                		Je kunt deze in de administratie terugvinden via hoofdmenu 'Content'.
	                	</p>
	                </div>
	                <div class="tab-pane fade" id="tab_6_7">
	                	<span class="details">Je vindt hier per pakket aanwijzingen om het formulier te koppelen.</span>
	                	<span class="details red">Let op:</span><span class="details">
	                	Sommige handleidingen bevatten nog screenshot uit de oude formuliereditor. Als het gaat om het kopieren van 
	                	de 'kale html code', dan kun je dat doen via de 'Kale code' optie hier links!</span><br/>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14072">Leadpages integratie-handleiding</a> </p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14073">OptimizePress integratie-handleiding</a> </p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14100">WebinarJam integratie-handleiding</a> </p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14084">WebinarGeek integratie-handleiding</a> </p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14106">EverWebinar integratie-handleiding</a> </p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14104">Wufoo integratie-handleiding</a><br/>
		                	<span class="details">benodigde code voor Wufoo:</span><br/><input type="text" v-bind:value="wufoocode" style="width:200px;"/>
	                	</p>
	                </div>
	                <div class="tab-pane fade" id="tab_6_8">
	                	<span class="details">
	                	Je kunt via onze Facebook App formulieren en landingpagina's toevoegen in je Facebook pagina. 
	                	Let op: dit werkt alleen voor fanpages of als je een bedrijfspagina hebt! Via de app maak 
	                	je een extra tab-blad aan op een door jou opgegeven pagina.</span>
	                	<p><a href="https://apps.facebook.com/autorespondnl" target="_blank">Facebook plugin</a></p>
	                	<p><a target="_new" href="http://www.e-act.nl/help/index4?id=14075">Facebook integratie-handleiding</a></p>
	                </div>
	                <div class="tab-pane fade" id="tab_6_9" v-if="issu">
	                    <textarea cols="80" rows="20" id="tadef" style="width:95%; height:100%;">{{JSON.stringify(definition)}}</textarea>
	                    <button class="btn btn-sm clpbrd" data-clipboard-target="#tadef">naar clipboard</button>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>

    import Vue from 'vue';
	import Commons from 'common/commons.js';
    import Clipboard from 'clipboard'; // see https://clipboardjs.com/

    export default Vue.component('Exportpanel', {
		props: {
			htmlexport: String,
			htmlminimal: String,
			definition: Object,
			issu: String,
			triggercode: String,
			adminid: String
		},
		methods: {
			saveForm: function(showConfirmation) {
				this.$emit('save');
			},
			createLandingPage: function() {
				let me = this;
				let payload = {};
				let s = this.htmlexport;
				if (!this.definition.popup) {
					s = s.replace('<div class="ar5" style="', '<div class="ar5"  style="margin-left:20%; ');
				}
				payload.html = s;
				payload.code = this.triggercode;
				$.ajax({
					url: Commons.api() + '/ajax/vue/' + me.adminid + '/landingpage',
					type: 'POST',
					cache: false,
					timeout: 60000,
					contentType: 'application/json; charset=utf-8',
					dataType: 'json',
					data: JSON.stringify(payload),
					success: function(data, textStatus, xhr) {
						me.landingpage = data.msg;
					}
				});
			},
			joomla: function() {
				let me = this;
				$.fileDownload(
					Commons.host() + '/admin/do/actions/vue/' + me.adminid + '/joomlaplugin/' + me.triggercode, {
						httpMethod: 'POST',
						data: { html: me.htmlexport },
						prepareCallback: function (url) {
			            },
						successCallback: function (url) {
						},
			            failCallback: function (responseHtml, url) {
			            	console.log(responseHtml);
			            }
					}
				);
			}
		},
		data: function() {
			return {
				landingpage: ''
			}
		},
		computed: {
			wufoocode: function() {
				return this.adminid + '|' + this.triggercode;
			},
			wpurl: function() {
				return Commons.host() + '/admin/images/autorespond-wp-plugin.zip';
			}
		},
		created: function() {
			new Clipboard('.clpbrd');
		}
	});

</script>

<style>
h5 {
	font-size:1.4em;
	font-weight:bold;
	margin-bottom:0;
	font-variant:small-caps;
}
.details {
	font-size:0.9em;
	color:#707070;
	line-height:1.2em;
	margin-right:1em;
}
.red {
	color:red;
	margin-right:0em;
}
</style>