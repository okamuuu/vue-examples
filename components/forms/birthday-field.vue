<template>
  <div class="field is-narrow">
    <div class="control">
      <div class="select">
        <select @change="handleChageYear" :value="year">
          <option :value="null" :key="`year:0`"></option>
          <option v-for="n in 50" :value="n + 1950" :key="`year:${n}`">{{ n + 1950 }}年</option>
        </select>
      </div>
      <div class="select">
        <select @change="handleChageMonth" :value="month">
          <option :value="null" :key="`month:0`"></option>
          <option v-for="n in 12" :value="zeroPadding(n)" :key="`month:${n}`">{{ n }}月</option>
        </select>
      </div>
      <div class="select">
        <select @change="handleChageDay" :value="day">
          <option :value="null" :key="`day:0`"></option>
          <option v-for="n in 31" :value="zeroPadding(n)" :key="`day:${n}`">{{ n }}日</option>
        </select>
      </div>
    </div>
    <p v-if="hasError" class="help is-danger">
       {{ errorMessages }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['value', 'errorMessages', 'onChange'],
  data () {
    return {
      pristine: true
    }
  },
  computed: {
    year () {
      return this.value && this.value.substr(0, 4)
    },
    month () {
      return this.value && this.value.substr(5, 2)
    },
    day () {
      return this.value && this.value.substr(8, 2)
    },
    isValid () {
      return !this.pristine && !this.errorMessages
    },
    hasError () {
      return !this.pristine && this.errorMessages
    }
  },
  methods: {
    zeroPadding (value) {
      return String(value).padStart(2, '0')
    },
    handleChageYear (e) {
      this.onChange([e.target.value, this.month, this.day].join('-'))
      this.pristine = false
    },
    handleChageMonth (e) {
      this.onChange([this.year, e.target.value, this.day].join('-'))
      this.pristine = false
    },
    handleChageDay (e) {
      this.onChange([this.year, this.month, e.target.value].join('-'))
      this.pristine = false
    }
  }
}
</script>
