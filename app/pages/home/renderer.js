import Vue from 'vue';
//import {stripped_ar_css} from './stripped-css.js';

// see form example on https://codepen.io/chriscoyier/pen/DmnlJ
// see https://formden.com/blog/isolate-bootstrap
// see https://www.w3schools.com/howto/howto_css_modals.asp
// TODO adapt calls in nl.wpsoft.eact.social.services.FacebookService

export var renderer = {
	data() {
		return {
			htmlexport: '',
			htmlminimal: ''
		}
	},
	methods: {
		cssFont(font) {
			let s = 'font-family:' + font.family + '; font-size:' + font.size + font.unit + '; line-height:' + font.lineheight + font.unit + ';';
			if (font.bold) s += 'font-weight:bold;'; else s += 'font-weight:normal;';
			if (font.italic) s += 'font-style:italic;'; else s+= 'font-style:normal;';
			return s;
		},
		renderForm() {

			let uuid = 'arform';
			if (this.formconfig.triggerCode && this.formconfig.triggerCode.trim().length > 0)
				uuid = 'arform' + this.formconfig.triggerCode.trim();
			else if (this.pid && this.pid.trim().length > 0)
				uuid = 'arform' + this.pid.trim();
			else if (this.wid && this.wid.trim().length > 0)
				uuid = 'arform' + this.wid.trim();

			let reqfields = [];
			let s = '';
			let smin = '';

			// check which Google fonts to use
			if (this.fontIsUsed('Open Sans'))
				s += '<link href="//fonts.googleapis.com/css?family=Open+Sans" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Roboto'))
				s += '<link href="//fonts.googleapis.com/css?family=Roboto" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Lato'))
				s += '<link href="//fonts.googleapis.com/css?family=Lato" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Oswald'))
				s += '<link href="//fonts.googleapis.com/css?family=Oswald" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Raleway'))
				s += '<link href="//fonts.googleapis.com/css?family=Raleway" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Lora'))
				s += '<link href="//fonts.googleapis.com/css?family=Lora" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Ubuntu'))
				s += '<link href="//fonts.googleapis.com/css?family=Ubuntu" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Lobster'))
				s += '<link href="//fonts.googleapis.com/css?family=Lobster" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Playfair Display'))
				s += '<link href="//fonts.googleapis.com/css?family=Playfair+Display" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Vollkorn'))
				s += '<link href="//fonts.googleapis.com/css?family=Vollkorn" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Fauna One'))    
				s += '<link href="//fonts.googleapis.com/css?family=Fauna+One" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Droid Serif'))     
				s += '<link href="://fonts.googleapis.com/css?family=Droid+Serif" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Barrio'))    
				s += '<link href="//fonts.googleapis.com/css?family=Barrio" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Source Sans Pro'))    
				s += '<link href="//fonts.googleapis.com/css?family=Source+Sans+Pro" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Poppins'))    
				s += '<link href="//fonts.googleapis.com/css?family=Poppins" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Indie Flower'))    
				s += '<link href="//fonts.googleapis.com/css?family=Indie+Flower" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Dosis'))    
				s += '<link href="//fonts.googleapis.com/css?family=Dosis" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Libre Baskerville'))    
				s += '<link href="//fonts.googleapis.com/css?family=Libre+Baskerville" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Asap'))    
				s += '<link href="//fonts.googleapis.com/css?family=Asap" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Exo 2'))    
				s += '<link href="//fonts.googleapis.com/css?family=Exo+2" class="google-fonts" rel="stylesheet">';
			if (this.fontIsUsed('Shadows Into Light'))    
				s += '<link href="//fonts.googleapis.com/css?family=Shadows+Into+Light" class="google-fonts" rel="stylesheet">';

			// see 81.171.11.72/opt/html/forms, installed certificate 8 may 17
			s += '<link href="//forms.autorespond.eu/forms/ar5forms.css" rel="stylesheet">'; 
			// see 81.171.11.72, /usr/share/nginx/html/forms and also /assets/css/ar5forms.css

			s += '<style type="text/css">';
			s += '.' + uuid + ' {';
			s += this.cssFont(this.formconfig.labels);
			s += 'border:' + this.formconfig.border.size + 'px solid ' + this.formconfig.border.color + ';';
			s += 'border-radius:' + this.formconfig.border.radius + 'px;';
			s += 'color:' + this.formconfig.labels.color + ';';
			s += 'display: block;';

			if (this.formconfig.shadow) {
				s += 'box-shadow: 8px 8px 5px #888888;'; // horiz vertic blur color
			}

			if (this.formconfig.image.url != '') {
				s += 'background:' + this.formconfig.bgcolor + '; background-image: url("' + this.formconfig.image.url + '"); background-repeat:no-repeat;';
				if (this.formconfig.image.pos === 'cover') {
					s += ' background-size: cover;';
				}
				else if (this.formconfig.image.pos === 'contain') {
					s += ' background-size: contain;';
				}
				else if (this.formconfig.image.pos === 'perc') {
					s += ' background-size: ' + this.formconfig.image.width + '%; background-position: ' + this.formconfig.image.left + 'px ' + this.formconfig.image.top + 'px;';
				}
				else {ex
					s += ' background-size: center-block;';
				}
			}
			else {
				s += 'background-color:' + this.formconfig.bgcolor + ';';
			}
			s += '}';

			s += '.' + uuid + ' label.ar_req::after { content: " *"; padding-right:4px; }';
			s += '.' + uuid + ' label { color: ' + this.formconfig.labels.color + ';';
			if (this.formconfig.layout === 'normal') {
				s += ' text-align:left; ';
			}
			s += this.cssFont(this.formconfig.labels) + '}';
			s += '.' + uuid + ' .help { color: ' + this.formconfig.help.color + ';' + this.cssFont(this.formconfig.help) + '}';
			s += '.ar-short { max-width: 200px!important; }';
			s += '.ar-inline-margin { margin-left:1em; }';
			if (this.formconfig.extraCss) {
				s += this.formconfig.extraCss;
			}
			if (this.formconfig.popup) {
				let popupbg = 'rgba(0,0,0,0.8)'; ///this.formconfig.popupbg;
				s += '.ar5modal' + uuid + ' { display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: ' + popupbg + '; }';
				s += '.ar5contentmodal' + uuid + ' { margin: 20% auto; padding: 0px; border: 0px; width: 90%; }';
				s += '.ar5close' + uuid + ' { color: #555; float: right; font-size: 40px; font-weight: bold; cursor: pointer; margin-top:10px; margin-right:12px; }';
			}
			if (this.formconfig.fieldheight != '0' && this.formconfig.layout != 'inline') {
				s += '.' + uuid + ' .form-group { padding-top:' + this.formconfig.fieldheight + 'px; padding-bottom:' + this.formconfig.fieldheight + 'px; }';
			}

			s += '</style>';

			let me = this;

			// add captcha script if needed
			this.formfields.forEach(function(f) {
				if (f.id === 'captcha') {
					s += '<script src="https://www.google.com/recaptcha/api.js?fallback=false"></script>\n';
				}
			});

			// add reader image if needed

			this.formfields.forEach(function(f) {
				if (f.id === 'readerimg') {
					if (me.formconfig.triggerCode && me.formconfig.triggerCode.trim().length > 0) {
						s += '<img src="http://counter.e-act.nl/t_' + me.formconfig.triggerCode.trim() + '.png"/><br/>\n';
					}
				}
			});

			// start form and styling
			// see stripped bootstrap file 'bootstrap-subset.css'

			// if popup and width was set to 100%, adjust width to 80%
			let w = this.formconfig.width + this.formconfig.widthunit;
			if (this.formconfig.popup && this.formconfig.width === '100' && this.formconfig.widthunit === '%') {
				w = '80%';
			}
			s += '<div class="ar5" style="width:' + w + ';">';
			s += '<div class="' + uuid + '">';

			if (this.formconfig.layout === 'horiz') {
				s += '<form onsubmit="return false" class="form-horizontal" style="';
			}
			else if (this.formconfig.layout === 'inline') {
				s += '<form onsubmit="return false" class="form-inline" style="';
			}
			else {
				s += '<form onsubmit="return false" style="';
			}
			let leftpadding = this.formconfig.fieldpadding;
			if (this.formconfig.layout === 'normal') leftpadding = Number.parseInt(leftpadding)+20;
			s += 'margin-left: ' + leftpadding;
			s += 'px; margin-right: 1em; padding-top:1em; padding-bottom:1em;';
			s += '">{HIDDEN}';

			smin += '<form onsubmit="return false">{HIDDEN}';

			// sort fields
			this.formfields.sort(function(a, b) {
				return a.order - b.order;
			});

			// hidden fields
			this.formfields.forEach(function(f) {
				if (f.config.hidden) {
					s += '<input type="hidden" name="' + f.id + '" id="' + f.id + '" value="' + f.config.defaultvalue + '"/>';
					smin += '<input type="hidden" name="' + f.id + '" id="' + f.id + '" value="' + f.config.defaultvalue + '"/>';
				}
			});

			// see https://www.w3schools.com/bootstrap/bootstrap_forms.asp
			// see http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-forms.php
			// see https://formden.com/bootstrap-form-guide/

			let numFields = 0;
			let largeinput = (this.formconfig.largeinputs) ? ' input-lg' : '';
			let class2 = (this.formconfig.hidelabels) ? ' sr-only' : ''; // hide labels
			let labelAlign = (this.formconfig.labels.align === 'left') ? ' text-left' : ''; // label alignment in horiz layout, default is right aligned
			let col1 = this.formconfig.columns.substring(0, 1);
			let col2 = this.formconfig.columns.substring(2);

			// if applicable, show image on top above title
			this.formfields.forEach(function(f) {
				if (f.id === 'image' && f.config.hidden) {
		        	let ts = 'margin:0px; padding:0px; text-align:' + f.config.align + ';';
					s += '<div id="artopimg" class="form-group" style="' + ts + '"><img border="0" src="' + f.config.label + '"';
					if (f.config.defaultvalue != '') s += ' height="' + f.config.defaultvalue + '%" width="' + f.config.defaultvalue + '%"';
					s += '/></div>';
				}
			});

			// then add title
			if (this.formconfig.title.enabled) {
	        	let ts = this.cssFont(this.formconfig.title.font) + 'color:' + this.formconfig.title.font.color + ';';
	        	ts += 'margin:0px; padding:0px; text-align:' + this.formconfig.title.align + ';';
	        	if (this.formconfig.layout === 'inline') {
	        		ts += 'margin-left:5px;';
	        	}
	        	let text = this.formconfig.title.text;
	        	text = text.replace(' ', '&nbsp;');
	        	text = text.replace('\n', '<br/>'); text = text.replace('\n', '<br/>'); text = text.replace('\n', '<br/>');
	        	if (this.formconfig.layout === 'inline') {
					s += '<p id="arformtitle" style="' + ts + '">' + text + '</p>';
				}
				else {
					s += '<div id="arformtitle" class="form-group" style="' + ts + '">' + text + '</div>';
				}
	        }

			this.formfields.forEach(function(f) {
				if (!f.config.hidden && f.id != 'readerimg') {

					let isFirstInputField = (numFields == 0 || (numFields > 0 && (me.formfields[numFields-1].config.widget === 'header')));

			        if (f.config.widget === 'button') {
				        smin += '<input type="submit" value="submit"/>';
						let buttonstyle = 'padding:' + me.formconfig.button.padding + 'px;';
						buttonstyle += 'border:' + me.formconfig.button.border.size + 'px solid ' + me.formconfig.button.border.color + ';';
						buttonstyle += 'border-radius:' + me.formconfig.button.border.radius + 'px;';
						buttonstyle += 'color:' + me.formconfig.button.font.color + '!important;';
						buttonstyle += me.cssFont(me.formconfig.button.font);
						buttonstyle += 'background-color:' + me.formconfig.button.bgcolor + '!important;';
						if (me.formconfig.button.width != '0') {
							buttonstyle += 'width:' + me.formconfig.button.width + ';';
						}
						let hover = (f.config.help) ? ' title="' + f.config.help + '"' : '';
						if (me.formconfig.layout === 'horiz') {
							let align = (me.formconfig.button.align === 'left') ? ' text-left' : ' text-right';
					        s += '<div class="form-group"><div class="col-sm-offset-' + col1 + ' col-sm-' + col2 + '' + align + '">';
					        s += '<button' + hover + ' type="submit" class="btn" style="' + buttonstyle + '">' + f.config.label + '</button></div></div>';
			        	}
						else if (me.formconfig.layout === 'inline') {
							let extramargin = (isFirstInputField) ? '' : 'margin-left:1em;';
					        s += '<button' + hover + ' type="submit" class="btn" style="' + buttonstyle + extramargin + '">' + f.config.label + '</button>';
						}
			        	else {
			        		s += '<div class="form-group">';
							let align1 = (me.formconfig.button.align === 'left') ? '<div class="text-left">' :  (me.formconfig.button.align === 'right') ? '<div class="text-right">' : '<div class="text-center">';
							let align2 = '</div>';
					        s += align1 + '<button' + hover + ' type="submit" class="btn" style="' + buttonstyle + '">' + f.config.label + '</button>' + align2 + '';
					        s += '</div>';
			        	}
			        }
			        else if (f.config.widget === 'input') {
				        smin += '' + f.config.label + ' <input type="text" id="' + f.id + '" name="' + f.id + '"/><br/>';
			        	let required = (f.config.required) ? ' ar_req' : '';
			        	if (f.config.required) reqfields.push(f);
			        	let ftype = (f.id === 'relation_email') ? 'email' : 'text';
			        	let preval = (f.config.defaultvalue) ? f.config.defaultvalue : '';
						let style = (f.config.width === 'medium') ? ' style="width:70%;"' : (f.config.width === 'small') ? ' style="width:40%;"' : '';
						if (me.formconfig.layout === 'horiz') {
							s += '<div class="form-group"><label for="' + f.id + '" class="control-label col-sm-' + col1 + ' ' + class2 + labelAlign + required + '">' + f.config.label + '&nbsp;</label>';
							s += '<div class="col-sm-' + col2 + '">';
							if (f.config.fieldtype === 'input')
								s += '<input type="' + ftype + '"' + style + ' class="form-control' + largeinput + '" id="' + f.id + '" name="' + f.id + '" placeholder="' + f.config.placeholder + '" value="' + preval + '"/>';
							else
								s += '<textarea ' + style + ' class="form-control" id="' + f.id + '" name="' + f.id + '" placeholder="' + f.config.placeholder + '" rows="4" cols="80">' + preval + '</textarea>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div></div>';
						}
						else if (me.formconfig.layout === 'inline') {
							let class1 = (isFirstInputField) ? '' : ' ar-inline-margin';
							let class1a = (isFirstInputField && me.formconfig.hidelabels) ? '' : ' ar-inline-margin';
							let labelclass = class2 + ' ' + labelAlign + required;
							s += '<div class="form-group' + class1 + '"><label for="' + f.id + '" class="' + labelclass + '">' + f.config.label + '&nbsp;</label>';
							s += '<input type="' + ftype + '"' + style + ' class="form-control ' + class1a + largeinput + '" id="' + f.id + '" name="' + f.id + '" placeholder="' + f.config.placeholder + '" value="' + preval + '"/></div>';
						}
						else {
							let labelClass = ' class="' + class2 + required + '"';
							if (labelClass.length < 11) labelClass = '';
							s += '<div class="form-group"><label for="' + f.id + '"' + labelClass + '>' + f.config.label + '</label>';
							if (f.config.fieldtype === 'input')
								s += '<input type="' + ftype + '" class="form-control' + largeinput + '"' + style + ' id="' + f.id + '" name="' + f.id + '" placeholder="' + f.config.placeholder + '" value="' + preval + '"/>';
							else
								s += '<textarea class="form-control"' + style + ' id="' + f.id + '" name="' + f.id + '" placeholder="' + f.config.placeholder + '" rows="4" cols="80">' + preval + '</textarea>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div>';
						}
			        }
			        else if (f.config.widget === 'check') {
				        smin += '' + f.config.label + ' <input type="checkbox" id="' + f.id + '" name="' + f.id + '"/><br/>';
						let ccss = 'width: 16px; height: 16px; padding-right:1em;vertical-align:bottom;position:relative;';
						if (me.formconfig.layout === 'horiz') {
							s += '<div class="form-group"><div class="col-sm-offset-' + col1 + ' col-sm-' + col2 + '"><div class="checkbox">';
							s += '<label><input id="' + f.id + '" name="' + f.id + '" type="checkbox" style="' + ccss + '"/> ' + f.config.label + '</label>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div></div></div>';
						}
						else if (me.formconfig.layout === 'inline') {
							let class1 = (isFirstInputField) ? '' : ' ar-inline-margin'; 
						    s += '<div class="checkbox' + class1 + '"><label><input id="' + f.id + '" name="' + f.id + '" type="checkbox" style="' + ccss + '"/> ' + f.config.label + '</label></div>';
						}
						else {
							s += '<div class="checkbox"><label><input id="' + f.id + '" name="' + f.id + '" type="checkbox" style="' + ccss + '"/> ' + f.config.label + '</label>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div>';
						}
			        }
			        else if (f.config.widget === 'select') {
				        smin += '' + f.config.label + ' <select id="' + f.id + '" name="' + f.id + '">';

						let style = (f.config.width === 'medium') ? ' style="width:70%;"' : (f.config.width === 'small') ? ' style="width:40%;"' : '';
						if (me.formconfig.layout === 'horiz') {
							s += '<div class="form-group"><label for="' + f.id + '" class="control-label col-sm-' + col1 + ' ' + class2 + labelAlign + '">' + f.config.label + '&nbsp;</label>';
							s += '<div class="col-sm-' + col2 + '"><select class="form-control' + largeinput + '"' + style + ' id="' + f.id + '" name="' + f.id + '">';
							f.config.options.forEach(function(o) {
								let sv = (o.value === f.config.defaultvalue) ? ' selected' : '';
								s += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
								smin += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
							});
							s += '</select>';
							smin += '</select><br/>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div></div>';
						}
						else if (me.formconfig.layout === 'inline') {
							let class1 = (isFirstInputField) ? '' : ' ar-inline-margin';
							let class1a = (isFirstInputField && me.formconfig.hidelabels) ? '' : ' ar-inline-margin';
							let labelclass = class2 + '' + labelAlign;
							s += '<div class="form-group' + class1 + '"><label for="' + f.id + '" class="' + labelclass + '">' + f.config.label + '&nbsp;</label>';
							s += '<select class="form-control ' + class1a + largeinput + '" id="' + f.id + '" name="' + f.id + '">';
							f.config.options.forEach(function(o) {
								let sv = (o.value === f.config.defaultvalue) ? ' selected' : '';
								s += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
								smin += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
							});
							s += '</select>';
							s += '</div>';
							smin += '</select><br/>';
						}
						else {
							let labelClass = ' class="' + class2 + '"';
							if (labelClass.length < 11) labelClass = '';
							s += '<div class="form-group"><label for="' + f.id + '"' + labelClass + '>' + f.config.label + '</label>';
							s += '<select class="form-control' + largeinput + '"' + style + ' id="' + f.id + '" name="' + f.id + '">';
							f.config.options.forEach(function(o) {
								let sv = (o.value === f.config.defaultvalue) ? ' selected' : '';
								s += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
								smin += '<option value="' + o.value + '"' + sv + '>' + o.label + '</option>';
							});
							s += '</select>';
							if (f.config.help.length > 0) s += '<span class="help-block help">' + f.config.help + '</span>';
							s += '</div>';
							smin += '</select><br/>';
						}
			        }
			        else if (f.config.widget === 'footer' || f.config.widget === 'header') {
			        	let text = (f.config.label.trim().length > 0) ? f.config.label : '&nbsp;';
			        	text = text.replace('\n', '<br/>');
			        	text = text.replace(' ', '&nbsp;');
			        	let ts = me.cssFont(me.formconfig.footer) + 'color:' + me.formconfig.footer.color + ';';
						s += '<p style="' + ts + '">' + text + '</p>';
			        }
			        else if (f.id === 'captcha') {
						if (me.formconfig.layout === 'horiz') {
							s += '<div class="form-group"><label for="' + f.id + '" class="control-label col-sm-' + col1 + '' + class2 + labelAlign + '">&nbsp;</label>';
							s += '<div class="col-sm-' + col2 + '">';
							s += '<div class="g-recaptcha" data-sitekey="6LejHgsUAAAAAAsphpwmaY3y2o8O5aSVqqzk_mRe"></div></div></div>';
						}
						else if (me.formconfig.layout === 'inline') {
							let class1 = (isFirstInputField) ? '' : ' ar-inline-margin';
							let labelclass = class2 + ' ' + labelAlign;
							s += '<div class="form-group' + class1 + '"><label for="' + f.id + '" class="' + labelclass + '">&nbsp;</label>';
							s += '<div class="g-recaptcha" data-sitekey="6LejHgsUAAAAAAsphpwmaY3y2o8O5aSVqqzk_mRe"></div></div>';
						}
						else {
							let labelClass = ' class="' + class2 + '"';
							if (labelClass.length < 11) labelClass = '';
							s += '<div class="form-group"><label for="' + f.id + '"' + labelClass + '>&nbsp;</label>';
							s += '<div class="g-recaptcha" data-sitekey="6LejHgsUAAAAAAsphpwmaY3y2o8O5aSVqqzk_mRe"></div></div>';
						}
			        }
			        else if (f.id === 'image' && !f.config.hidden) {
       		        	let ts = 'margin:0px; padding:0px; text-align:' + f.config.align + ';';
						if (me.formconfig.layout === 'horiz') {
							s += '<div class="form-group" style="' + ts + '">';
							s += '<img border="1" src="' + f.config.label + '"';
							if (f.config.defaultvalue != '') s += ' height="' + f.config.defaultvalue + '%" width="' + f.config.defaultvalue + '%"';
							s += '/></div>';
						}
						else if (me.formconfig.layout === 'inline') {
							let class1 = (isFirstInputField) ? '' : ' ar-inline-margin';
							let labelclass = class2 + ' ' + labelAlign;
							s += '<div class="form-group' + class1 + '" style="' + ts + '">';
							s += '<img border="1" src="' + f.config.label + '"';
							if (f.config.defaultvalue != '') s += ' height="' + f.config.defaultvalue + '%" width="' + f.config.defaultvalue + '%"';
							s += '/></div>';
						}
						else {
							s += '<div class="form-group" style="' + ts + '">';
							s += '<img border="1" src="' + f.config.label + '"';
							if (f.config.defaultvalue != '') s += ' height="' + f.config.defaultvalue + '%" width="' + f.config.defaultvalue + '%"';
							s += '/></div>';
						}
			        }
				}
				numFields += 1;
			});

			// end form
			s += '</form></div></div>';
			smin += '</form>';

			$('#formpreviewdiv').html(s.replace('{HIDDEN}', ''));

			this.createExport(s, smin, reqfields);
		},
		fontIsUsed: function(name) {
			if (this.formconfig.labels && name === this.formconfig.labels.family) return true;
			else if (this.formconfig.help && name === this.formconfig.help.family) return true;
			else if (this.formconfig.footers && name === this.formconfig.footers.family) return true;
			else if (this.formconfig.button.font && name === this.formconfig.button.font.family) return true;
			else if (this.formconfig.title.font && name === this.formconfig.title.font.family) return true;
			else {
				let b = false;
				this.formfields.forEach(function(f) {
					if (name === f.config.font.family) b = true;
				});
				return b;
			}
		},
		createExport: function(s, smin, reqfields) {

			let host = window.location.protocol + '//' + window.location.hostname;
			if (window.location.port) host +=  ':' + window.location.port;
			let uid = '';

			// add form action and hidden fields
			if (this.formconfig.triggerCode && this.formconfig.triggerCode.trim().length > 0) {
				uid = this.formconfig.triggerCode.trim();
				s = s.replace('<form onsubmit="return false"', '<form action="' + host + '/ah/action" method="POST" accept-charset="UTF-8"');
				smin = smin.replace('<form onsubmit="return false"', '<form action="' + host + '/ah/action" method="POST" accept-charset="UTF-8"');
				s = s.replace('{HIDDEN}', '<input type="hidden" name="admin_id" value="' + this.aid + '"/><input type="hidden" name="trigger_code" value="' + uid + '"/><input type="hidden" name="confirm" value="false"/>');
				smin = smin.replace('{HIDDEN}', '<input type="hidden" name="admin_id" value="' + this.aid + '"/><input type="hidden" name="trigger_code" value="' + uid + '"/><input type="hidden" name="confirm" value="false"/>');
			}
			else if (this.pid && this.pid.trim().length > 0) {
				uid = '' + this.pid.trim();
				s = s.replace('<form onsubmit="return false"', '<form action="' + host + '/cart/do/add" method="POST" accept-charset="UTF-8"');
				smin = smin.replace('<form onsubmit="return false"', '<form action="' + host + '/cart/do/add" method="POST" accept-charset="UTF-8"');
				s = s.replace('{HIDDEN}', '<input type="hidden" name="a" value="' + this.aid + '"/><input type="hidden" name="p" value="' + uid + '"/><input type="hidden" name="pp" value="n"/>');
				smin = smin.replace('{HIDDEN}', '<input type="hidden" name="a" value="' + this.aid + '"/><input type="hidden" name="p" value="' + uid + '"/><input type="hidden" name="pp" value="n"/>');
			}

			// add spammer honeypot field
			let honeypot = '<div class="emailField" style="display:none!important;">dit veld niet invullen s.v.p.<input type="text" name="emailaddress"/></div>';
			s = s.replace('</form>', honeypot + '</form>');

			// add required checks
			if (reqfields.length > 0) {
				s = s.replace('type="submit"', 'type="submit" onclick="return check' + uid + '(this.form);"');
				let check = '';
				check += '<script type="text/javascript">\n';
				check += ' function check' + uid + '(form) {\n';
				check += '  var missing = false;\n';
				check += '  var missingFields = \'\';\n';
				check += '  for (i=0; i<form.elements.length; i++) {\n';
				this.formfields.forEach(function(f) {
					if (f.config.required) {
						check += '   if (form.elements[i].name === \'' + f.id + '\') {\n';
						check += '    if (form.elements[i].value === \'\') {\n';
						check += '     missing = true;\n';
						check += '     missingFields = missingFields + \'\\n' + f.config.label + '\';\n';
						check += '    }\n';
						check += '   }\n';
					}
				});
				check += '  }\n';
				check += '  if (missing) {\n';
				check += '   alert(\'De onderstaande velden moeten zijn ingevuld:\\n\' + missingFields);\n';
				check += '   return false;\n';
				check += '  }\n';
				check += '  return true;\n';
				check += ' }\n';
				check += '</script>\n';

				s = s.replace('</form></div></div>', '</form></div></div>' + check);
			}

			// add popup
			if (this.formconfig.popup) {
				let uuid = 'arform';
				if (this.formconfig.triggerCode && this.formconfig.triggerCode.trim().length > 0)
					uuid = 'arform' + this.formconfig.triggerCode.trim();
				else if (this.pid && this.pid.trim().length > 0)
					uuid = 'arform' + this.pid.trim();
				else if (this.wid && this.wid.trim().length > 0)
					uuid = 'arform' + this.wid.trim();

				// add javascript
				s += '<script type="text/javascript">';
				s += 'var modal = document.getElementById("thear5modal' + uuid + '"); ';
				s += 'var span = document.getElementsByClassName("ar5close' + uuid + '")[0]; ';
				s += 'span.onclick = function() { modal.style.display = "none"; }; ';
				s += 'window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }; ';
				s += 'setTimeout(function() { modal.style.display = "block"; }, ' + this.formconfig.popuptime + '000);';
				s += '</script>\n';

				// add html
				let w = 'style="width:' + this.formconfig.width + this.formconfig.widthunit + ';"';
				s = s.replace('<div class="ar5" ' + w + '>', '<div class="ar5modal' + uuid + '" id="thear5modal' + uuid + '" style="width:100%;"><div class="ar5 ar5contentmodal' + uuid + '" ' + w + '><span class="ar5close' + uuid + '">&times;</span>');
				s = s.replace('</form></div></div>', '</form></div></div></div>');
			}

			this.htmlminimal = smin;
			this.htmlexport = s;
		},
		switchTemplate: function(config, formfields, newtemplate) {
			// set config
			config.bgcolor = newtemplate.bgcolor;
			let oldtitle = config.title.text;
			if (oldtitle === '' || oldtitle == null) oldtitle = newtemplate.title.text;
			config.title = newtemplate.title;
			config.title.text = oldtitle;
			config.title.font.color = newtemplate.title.font.color;
			config.title.font.size = newtemplate.title.font.size;
			config.title.font.lineheight = newtemplate.title.font.lineheight;
			config.title.font.bold = newtemplate.title.font.bold;
			config.title.font.family = newtemplate.title.font.family;
			config.title.font.italic = newtemplate.title.font.italic;
			config.title.font.align = newtemplate.title.font.align;
			config.title.font.unit = newtemplate.title.font.unit;
			config.extraCss = newtemplate.extraCss;
			config.largeinputs = newtemplate.largeinputs;
			config.shadow = newtemplate.shadow;
			config.fieldpadding = newtemplate.fieldpadding;
			config.width = newtemplate.width;
			config.widthunit = newtemplate.widthunit;
			config.columns = newtemplate.columns;
			config.hidelabels = newtemplate.hidelabels;
			config.layout = newtemplate.layout;
			if (newtemplate.image) {
				if (!config.image) config.image = {};
				config.image.url = newtemplate.image.url;
				config.image.pos = newtemplate.image.pos;
				config.image.width = newtemplate.image.width;
				config.image.top = newtemplate.image.top;
				config.image.left = newtemplate.image.left;
				config.image.opacity = newtemplate.image.opacity;
			}
			if (newtemplate.border) {
				if (!config.border) config.border = {};
				config.border.size = newtemplate.border.size;
				config.border.color = newtemplate.border.color;
				config.border.radius = newtemplate.border.radius;
			}
			if (newtemplate.labels) {
				if (!config.labels) config.labels = {};
				config.labels.color = newtemplate.labels.color;
				config.labels.size = newtemplate.labels.size;
				config.labels.lineheight = newtemplate.labels.lineheight;
				config.labels.bold = newtemplate.labels.bold;
				config.labels.family = newtemplate.labels.family;
				config.labels.italic = newtemplate.labels.italic;
				config.labels.align = newtemplate.labels.align;
				config.labels.unit = newtemplate.labels.unit;
			}
			if (newtemplate.help) {
				if (!config.help) config.help = {};
				config.help.color = newtemplate.help.color;
				config.help.size = newtemplate.help.size;
				config.help.lineheight = newtemplate.help.lineheight;
				config.help.bold = newtemplate.help.bold;
				config.help.family = newtemplate.help.family;
				config.help.italic = newtemplate.help.italic;
				config.help.align = newtemplate.help.align;
				config.help.unit = newtemplate.help.unit;
			}
			if (newtemplate.footer) {
				if (!config.footer) config.footer = {};
				config.footer.color = newtemplate.footer.color;
				config.footer.size = newtemplate.footer.size;
				config.footer.lineheight = newtemplate.footer.lineheight;
				config.footer.bold = newtemplate.footer.bold;
				config.footer.family = newtemplate.footer.family;
				config.footer.italic = newtemplate.footer.italic;
				config.footer.align = newtemplate.footer.align;
				config.footer.unit = newtemplate.footer.unit;
			}
			config.button.bgcolor = newtemplate.button.bgcolor;
			config.button.padding = newtemplate.button.padding;
			config.button.align = newtemplate.button.align;
			config.button.border.size = newtemplate.button.border.size;
			config.button.border.color = newtemplate.button.border.color;
			config.button.border.radius = newtemplate.button.border.radius;
			config.button.font.color = newtemplate.button.font.color;
			config.button.font.size = newtemplate.button.font.size;
			config.button.font.lineheight = newtemplate.button.font.lineheight;
			config.button.font.bold = newtemplate.button.font.bold;
			config.button.font.family = newtemplate.button.font.family;
			config.button.font.italic = newtemplate.button.font.italic;
			config.button.font.align = newtemplate.button.font.align;
			config.button.font.unit = newtemplate.button.font.unit;
			config.button.font.width = newtemplate.button.font.width;

			// add footer if needed, disabled for now
			/*
			let foundf = false;
			formfields.forEach(function (f, idx) {
				if (f.config.widget === 'footer') foundf = true;
			});
			if (!foundf) {
				newtemplate.fields.forEach(function (fnew, idx) {
					if (fnew.config.widget === 'footer') {
						config.fields.push(fnew);
					}
				});
			}
			*/
		}
	}
};

