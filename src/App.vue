<template>
  <div id="app">
    <ul>
      <li v-for="item in arrayItems" :key="item.id" @click="selectItem(item)">
        {{ item.name }}

        <template v-if="selectedItem && item.id === selectedItem.id">
          'Selected'
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useStore } from "./store"
import { ArrayItem } from "./data"

export default defineComponent({
  setup() {
    const store = useStore()
    const arrayItems = computed(() => store.itemsList)
    const selectedItem = computed(() => store.selectedItem)

    return {
      arrayItems,
      selectedItem,

      selectItem(item: ArrayItem) {
        store.$patch({
          selectedItem: item.id === selectedItem.value?.id ? null : item
        })
      }
    }
  }
})
</script>