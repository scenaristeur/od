<template>
  <span class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`"
      :value="lang">{{ lang }}</option>
    </select>
  </span>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['en', 'de', 'fr'] }
  }
}
</script>
