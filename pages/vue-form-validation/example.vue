<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="section">
            <h1 class="title">Vue Form Validation Demo</h1>
            <!-- お名前(漢字) -->
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">お名前(漢字)</label>
              </div>
              <div class="field-body">
                <InputTextField
                  placeholder="姓"
                  :errorMessages="errors.lastNameKanji"
                  :onChange="(value) => handleChangeForms({lastNameKanji: value})"
                />
                <InputTextField
                  placeholder="名"
                  :errorMessages="errors.firstNameKanji"
                  :onChange="(value) => handleChangeForms({firstNameKanji: value})"
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
                  :onChange="(value) => handleChangeForms({lastNameKana: value})"
                />
                <InputTextField
                  placeholder="メイ"
                  :errorMessages="errors.firstNameKana"
                  :onChange="(value) => handleChangeForms({firstNameKana: value})"
                />
              </div>
            </div>
            <!-- 性別 -->
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">性別</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <label class="radio">
                      <input v-model="forms.gender" type="radio" value="M">
                      男性
                    </label>
                    <label class="radio">
                      <input v-model="forms.gender" type="radio" value="F">
                      女性
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- 生年月日 -->
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">生年月日</label>
              </div>
              <div class="field-body">
                <BirthdayField
                  :value="forms.birthday"
                  :errorMessages="errors.birthday"
                  :onChange="(birthday) => handleChangeForms({birthday})"
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
                  :onChange="(value) => handleChangeForms({zipcode: value})"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="section">
            <h2 class="title">Forms</h2>
            <pre><code>
            {{ forms }}
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
import InputTextField from '~/components/forms/input-text-field'
import BirthdayField from '~/components/forms/birthday-field'

export default {
  components: {
    InputTextField,
    BirthdayField
  },
  data () {
    return {
      forms: {},
      errors: {}
    }
  },
  methods: {
    async handleChangeForms (obj) {
      this.forms = { ...this.forms, ...obj }
      this.errors = Object.assign({}, validate(this.forms))
    }
  }
}
</script>

<style scoped>
em {
  font-style: normal;
  background: linear-gradient(transparent 75%, #89BDDE 0%);
}

.ghost,
.sortable-chosen {
  color: #fff;
  background-color: #3273dc;
}
.movable {
  cursor: move;
}
p {
   transition: width 2s;
}
p, pre {
  font-size: 1.5em;
}
</style>
