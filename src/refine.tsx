import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ prompt_refine: string; provider_model_refine?: string }>();
const prompt = prefs.prompt_refine;
const model_override = prefs.provider_model_refine;
const toast_title = "Refining...";

export default function Refine() {
  return ResultView(prompt, model_override, toast_title);
}
