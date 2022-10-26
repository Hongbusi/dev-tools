<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex justify-center items-center">
      <div class="p-4 mx-auto w-full max-w-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="relative p-4 bg-black/75 rounded-3">
          <div>
            <div class="flex space-x-2">
              <div class="w-3 h-3 bg-white/20 rounded-full" />
              <div class="w-3 h-3 bg-white/20 rounded-full" />
              <div class="w-3 h-3 bg-white/20 rounded-full" />
            </div>
          </div>

          <div class="py-5">
            <CodeMirror />
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-40">
      setting
    </div>
  </div>
</template>
