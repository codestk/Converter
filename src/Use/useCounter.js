import { computed, nextTick, reactive, ref, watch } from "vue";

const counterData = reactive({
  count: 0,
  title: "Motosoto",
});
export function useCounter() {
  const increaseCounter = async (amount) => {
    counterData.count += amount;

    await nextTick(() => {
      console.log("Next tick  0001");
    });
  };

  const deceaseCounter = (amount) => {
    counterData.count = counterData.count - amount;
  };

  /*
    Data Event****************************************
*/
  const OddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "Even";

    return "Odd";
  });

  watch(
    () => counterData.count,
    (newCount, oleCount) => {
      if (newCount === 20) alert("Max 20");
    }
  );

  return { counterData, increaseCounter, deceaseCounter, OddOrEven };
}
