<script setup lang="ts">
import { Compartment, EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
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

const language = new Compartment(); const tabSize = new Compartment()

const state = EditorState.create({
  doc: defaultCode,
  extensions: [
    baseTheme,
    language.of(javascript()),
    tabSize.of(EditorState.tabSize.of(8))
  ]
})

onMounted(() => {
  const editor = new EditorView({
    state,
    parent: el.value!
  })
})
</script>

<template>
  <div ref="el" />
</template>
