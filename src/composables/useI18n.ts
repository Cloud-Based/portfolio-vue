import { ref } from "vue";
import { content } from "@/data";

const lang = ref<"id" | "en">("id");

export function useI18n() {
  const toggleLang = () => {
    lang.value = lang.value === "id" ? "en" : "id";
  };

  const t = (key: keyof typeof content.id) => {
    return content[lang.value][key];
  };

  return { lang, toggleLang, t };
}
