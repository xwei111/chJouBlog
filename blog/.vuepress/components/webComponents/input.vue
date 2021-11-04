<template>
  <div>
    <xw-input id="webInput" defaultValue="123"></xw-input>
    {{ value }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '123'
    }
  },
  mounted() {
    document.getElementById('webInput').addEventListener('input', e => {
      const { target: { value } } = e
      this.value = value
    })
  }
}
</script>
