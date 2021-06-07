import { defineStore } from "pinia";
import { ArrayItem, mockArray } from "./data";

interface State {
  itemsList: ArrayItem[]
  selectedItem: ArrayItem | null
}

const state = (): State => ({
  itemsList: mockArray,
  selectedItem: null
})

export const useStore = defineStore({
  id: "store",

  state,
})