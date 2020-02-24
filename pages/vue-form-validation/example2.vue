<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="section">
            <h1 class="title">Vue Form Validation Demo</h1>
            <UserNameFields :onChange="handleChangeUserNameFileds" />
            <!-- 生年月日 -->
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">生年月日</label>
              </div>
              <div class="field-body">
                <BirthdayField
                  :value="fields.birthday"
                  :errorMessages="errors.birthday"
                  :onChange="(birthday) => handleChangeFileds({birthday})"
                />
              </div>
            </div>
            <!-- 郵便番号 -->
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">郵便番号</label>
              </div>
              <div class="field-body">
                <InputTextField
                  placeholder="郵便番号"
                  :errorMessages="errors.zipcode"
                  :onChange="(value) => handleChangeFileds({zipcode: value})"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="section">
            <h2 class="title">isUserNameFieldsValid</h2>
            <pre><code>
            {{ isUserNameFieldsValid }}
            </code></pre>
          </div>
          <div class="section">
            <h2 class="title">Fields</h2>
            <pre><code>
            {{ fields }}
            </code></pre>
          </div>
          <div class="section">
            <h2 class="title">Errors</h2>
            <pre><code>
            {{ errors }}
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validate } from '~/utils/validator'
import UserNameFields from '~/components/forms/user-name-fields'
import InputTextField from '~/components/forms/input-text-field'
import BirthdayField from '~/components/forms/birthday-field'

export default {
  components: {
    UserNameFields,
    InputTextField,
    BirthdayField
  },
  data () {
    return {
      isUserNameFieldsValid: false,
      fields: {},
      errors: {}
    }
  },
  methods: {
    handleChangeUserNameFileds ({isValid, fields}) {
      console.log(isValid, fields)
      this.fields = { ...this.fields, ...fields }
      this.isUserNameFieldsValid = isValid
    }, 
    handleChangeFileds (fields) {
      this.fields = { ...this.fields, ...fields }
      this.errors = Object.assign({}, validate(this.fields))
    }
  }
}
</script>

<style scoped>
em {
  font-style: normal;
  background: linear-gradient(transparent 75%, #89BDDE 0%);
}

p, pre {
  font-size: 1.5em;
}
</style>
