<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">お名前(漢字)</label>
      </div>
      <div class="field-body">
        <InputTextField
          placeholder="姓"
          :errorMessages="errors.lastNameKanji"
          :onChange="(value) => handleChangeFields({lastNameKanji: value})"
        />
        <InputTextField
          placeholder="名"
          :errorMessages="errors.firstNameKanji"
          :onChange="(value) => handleChangeFields({firstNameKanji: value})"
        />
      </div>
    </div>
    <!-- お名前(カタカナ) -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">お名前(カタカナ)</label>
      </div>
      <div class="field-body">
        <InputTextField
          placeholder="セイ"
          :errorMessages="errors.lastNameKana"
          :onChange="(value) => handleChangeFields({lastNameKana: value})"
        />
        <InputTextField
          placeholder="メイ"
          :errorMessages="errors.firstNameKana"
          :onChange="(value) => handleChangeFields({firstNameKana: value})"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { validateWithRuleNames } from '~/utils/validator'
import InputTextField from '~/components/forms/input-text-field'

export default {
  components: {
    InputTextField
  },
  props: ['onChange'],
  data () {
    return {
      fields: {},
      errors: {},
      ruleNames: [
        'lastNameKanji',
        'firstNameKanji', 
        'lastNameKana', 
        'firstNameKana'
      ]
    }
  },
  methods: {
    handleChangeFields (fields) {
      this.fields = { ...this.fields, ...fields }
      this.errors = Object.assign(
        {}, 
        validateWithRuleNames(this.fields, this.ruleNames)
      )
      console.log(this.errors)
      this.onChange({
        isValid: Object.keys(this.errors).length === 0,
        fields: this.fields
      })
    }
  }
}
</script>
