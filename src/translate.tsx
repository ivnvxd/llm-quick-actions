import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ target_language: string; provider_model_translate?: string }>();
const prompt = `Translate the following text to ${prefs.target_language}:\n\n`;
const model_override = prefs.provider_model_translate;
const toast_title = "Translating...";

export default function Translate() {
  return ResultView(prompt, model_override, toast_title);
}
