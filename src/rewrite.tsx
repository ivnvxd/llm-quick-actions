import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ prompt_rewrite: string; provider_model_rewrite?: string }>();
const prompt = prefs.prompt_rewrite;
const model_override = prefs.provider_model_rewrite;
const toast_title = "Rewriting...";

export default function Rewrite() {
  return ResultView(prompt, model_override, toast_title);
}
