import { selector } from "recoil";
import { counterState } from "./Counter";

export const evenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const currentCount = get(counterState);
    return currentCount % 2 === 0;
  },
});