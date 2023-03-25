import { create } from 'zustand'

const HeightStore = create(set => ({
  triHeight: null,
  rectHeight: null,
  diHeight: null,

  setTriHeight: e => {
    set({
      triHeight: e.target.value
    })
  },
  setRectHeight: e => {
    set({
      rectHeight: e.target.value
    })
  },
  setDiHeight: e => {
    set({
      diHeight: e.target.value
    })
  }
}))

export default HeightStore
