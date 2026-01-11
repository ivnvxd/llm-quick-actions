import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{
  prompt_summarize: string;
  provider_model_summarize?: string;
}>();
const prompt = prefs.prompt_summarize;
const model_override = prefs.provider_model_summarize;
const toast_title = "Summarizing...";

export default function Summarize() {
  return ResultView(prompt, model_override, toast_title);
}
