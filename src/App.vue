<template>
	<SRadio
		id="radio1"
		name="radio1"
		value="1"
		:fill="true"
	>
		I'm a radio button
	</SRadio>
	<SRadio
		id="radio2"
		name="radio1"
		value="2"
		:disabled="true"
	>
		I'm a radio button
	</SRadio>
	<SRadio
		id="radio3"
		name="radio1"
		value="3"
	>
		I'm a radio button
	</SRadio>

	<SRadioGroup
		v-model:selected="selected5"
		direction="horizontal"
		type="block"
		name="radio-group"
		:options="options5"
		style="width:100%"
	/>
	<SRadioGroup
		v-model:selected="selected5"
		type="block"
		name="radio-group-2"
		:options="options5"
	/>
	{{ selected5 }}
	<SRadioGroup
		v-model:selected="selected15"
		:options="options15"
		name="radio-group-3"
		columns="repeat(auto-fill, minmax(35ch, 1fr))"
	/>
	{{ selected15 }}
	<SButtonGroup
		type="compact"
	>
		<SButton
			:compact="true"
			tooltip="I'm a button"
		>
			<template #icon>
				<svg
					version="1.1"
					viewBox="0 0 16 9.5"
					xmlns="http://www.w3.org/2000/svg"
				><path
					class="a"
					d="M 1.5,1.5 8,8 14.5,1.5"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
				/></svg>
			</template>
		</SButton>
		<SButton
			:compact="true"
			:danger="true"
			tooltip="I'm a dangerous button"
		>
			<template #icon>
				<svg
					version="1.1"
					viewBox="0 0 16 9.5"
					xmlns="http://www.w3.org/2000/svg"
				><path
					class="a"
					d="M 1.5,1.5 8,8 14.5,1.5"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
				/></svg>
			</template>
		</SButton>
	</SButtonGroup>

	<SRange
		v-model:value="rangeValue"
		name="range-input"
		:min="10"
		:max="70"
		:step="10"
		icon-left="+"
		icon-right="%"
	>
		Bonus chances
	</SRange>
	value of the input is {{ rangeValue }}

	<SCheckbox
		id="checkbox"
		v-model:checked="checkbox"
		name="checkbox"
		value="I'm checked"
	>
		make togglable
	</SCheckbox>
	is checkbox group toggle able? {{ checkbox }}

	<SCheckboxGroup
		v-model:selected="selectedCheckboxes"
		:options="options15"
		name="checkbox-group-15"
		columns="repeat(auto-fill, minmax(35ch, 1fr))"
		:toggle="checkbox"
	/>
	checkboxes : {{ selectedCheckboxes }}

	<SInput
		id="textInput"
		v-model:value="textInput"
		pattern="[A-Z\s]*"
		placeholder="placeholder"
	>
		i'm a text input
	</SInput>
	{{ textInput }}
</template>

<script>
import SRadio from './components/SRadio.vue';
import SRadioGroup from './components/SRadioGroup.vue';
import SButton from './components/SButton.vue';
import SButtonGroup from './components/SButtonGroup.vue';
import SRange from './components/SRange.vue';
import SCheckbox from './components/SCheckbox.vue';
import SCheckboxGroup from './components/SCheckboxGroup.vue';
import SInput from './components/SInput.vue';

export default {
	components:{
		SRadio,
		SRadioGroup,
		SButton,
		SButtonGroup,
		SRange,
		SCheckbox,
		SCheckboxGroup,
		SInput
	},
	data() {
		return {
			buttonText: 'Some text here',
			rangeValue: 15,
			options5: this.getOptions(5),
			options15: this.getOptions(15),
			selected15: '1',
			selected5: '1',
			checkbox: false,
			selectedCheckboxes: [],
			textInput: 'some text here'
		};
	},
	methods: {
		getOptions(n) {
			const options = [];

			function makeid(length) {
				const result = [];
				const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				const charactersLength = characters.length;

				for (let i = 0; i < length; i++) {
					result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
				}

				return result.join('');
			}

			for (let i = 0; i < n; i++) {
				const text = makeid(5);

				options.push({
					label: text,
					name: text,
					value: i.toString(),
					isDisabled: false
				});
			}

			return options;
		}
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Quicksand';
  margin-top: 60px;
	& > * + * {
		margin-top: 1em;
	}
	padding: 5em 1em;
}

body{
	background-color: var(--surface);
}
</style>
