import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ prompt_custom: string; provider_model_custom?: string }>();
const prompt = prefs.prompt_custom;
const model_override = prefs.provider_model_custom;
const toast_title = "Processing...";

export default function Custom() {
  return ResultView(prompt, model_override, toast_title);
}
