<template>
  <div class="field is-expanded">
    <p class="control has-icons-right">
      <input @input="handleChange" :class="{'is-danger': hasError}" class="input" type="text" :placeholder="placeholder">
      <span v-if="isValid" class="icon is-small is-right">
        <fa icon="check" aria-hidden="true" />
      </span>
    </p>
    <p v-if="hasError" class="help is-danger">
       {{ errorMessages }}
    </p>
  </div>

</template>

<script>
export default {
  props: ['placeholder', 'errorMessages', 'onChange'],
  data () {
    return {
      pristine: true
    }
  },
  computed: {
    isValid () {
      return !this.pristine && !this.errorMessages
    },
    hasError () {
      return !this.pristine && this.errorMessages
    }
  },
  methods: {
    handleChange (e) {
      this.onChange(e.target.value)
      this.pristine = false
    }
  }
}
</script>
