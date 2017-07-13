<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container confirmbox">
					<div class="modal-header blue">
						<h3> {{ the_title }} </h3>
					</div>
					<div class="modal-body" id="confirmbody">
						{{ the_text }}
					</div>
					<div class="modal-footer">
					<!--
						<button class="btn grey-silver" @click="docancel"> Annnuleren </button>
					-->
						<button class="btn blue-madison" @click.prevent="doconfirm"> {{ the_confirm }} </button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue';

	/**
	*  Generic global confirm dialog with i18n support. Example call:
	* 
	*  <confirm-modal 
	* 		title="roles_confirm_delete_title"		// modal title. When underscores are present, check on i18n
	* 		text="roles_confirm_delete_text" 		// text to show in modal, it will be displayed within a <p>
	* 		confirm-button="Yes delete" 			// text shown in confirm button
	* 		value-to-pass="" 						// will be included in the confirm callback
	* 		v-if="showRemoveRoleConfirmModal"		// toggle the display of modal
	* 		@cancel="cancelMethod" 					// callback for cancel button
	* 		@confirm="confirmMethod"/>				// callback for confirm button
	*/
	export default Vue.component('Confirm', {
		props: {
			title: {
				type: String
			},
			text: {
				type: String
			},
			confirmButton: {
				type: String
			},
			valueToPass: {
				type: String
			}
		},
		data() {
			return {
				passedValue: this.valueToPass,
				the_title: this.title,
				the_text: this.text,
				the_confirm: this.confirmButton
			}
		},
		methods: {
			doconfirm(e) {
				this.$emit('confirm', this.passedValue);
			},
			docancel() {
				this.$emit('cancel');
			}
		},
		mounted() {
			if (this.title.indexOf('_') > 0) this.the_title = this.$t(this.title); else this.the_title = this.title;
			if (this.text.indexOf('_') > 0) this.the_text = this.$t(this.text); else this.the_text = this.text;
			if (this.confirmButton.indexOf('_') > 0) this.the_confirm = this.$t(this.confirmButton); else this.the_confirm = this.confirmButton;
		}
	})
</script>
<style>
	.confirmbox {
		width: 500px;
	}
	#confirmbody {
		padding-right:2em;
	}
	.modal-header.blue {
		border-bottom: 3px solid #659be0!important;
	}
</style>