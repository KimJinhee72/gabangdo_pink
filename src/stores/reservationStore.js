import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    name: "",
    phone: "",
    selectedDate: "",
    selectedHour: "--",
    selectedMinute: "--",
    selectedStart: "",
    selectedStop: "",
    sizes: [],
  }),
  actions: {
    setReservation(data) {
      Object.assign(this, data);
    },
  },
});
