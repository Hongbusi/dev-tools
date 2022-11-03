<script setup lang="ts">
import { EditorView } from 'codemirror'
import { Compartment, EditorState } from '@codemirror/state'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { javascript } from '@codemirror/lang-javascript'

const el = ref<HTMLDivElement>()

const defaultCode = `import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')`

const baseTheme = EditorView.baseTheme({
  '&': {
    outline: 'none !important'
  },
  '.cm-content': {
    caretColor: 'white'
  }
})

// eslint-disable-next-line new-parens
const language = new Compartment

const state = EditorState.create({
  doc: defaultCode,
  extensions: [
    baseTheme,
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    language.of(javascript())
  ]
})

onMounted(() => {
  // eslint-disable-next-line no-new
  new EditorView({
    state,
    parent: el.value!
  })
})
</script>

<template>
  <div ref="el" />
</template>
