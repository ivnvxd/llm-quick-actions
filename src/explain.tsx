import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ provider_model_explain?: string }>();
const prompt = "Explain the following in simple, easy-to-understand terms:\n\n";
const model_override = prefs.provider_model_explain;
const toast_title = "Explaining...";

export default function Explain() {
  return ResultView(prompt, model_override, toast_title);
}
