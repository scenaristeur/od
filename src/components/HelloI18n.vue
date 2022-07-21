<template>
  <div>
    <p>{{ $t('hello') }}</p>
    <p>{{ $t('welcome')}}</p>
    <b-button>{{ $t('yes-button')}}</b-button>
    <b-button>{{ $t('no-button')}}</b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>
