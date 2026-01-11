import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ provider_model_preview?: string }>();
const prompt = "You are a helpful assistant. Respond to the user's input:";
const model_override = prefs.provider_model_preview;
const toast_title = "Processing...";

export default function Preview() {
  return ResultView(prompt, model_override, toast_title);
}
