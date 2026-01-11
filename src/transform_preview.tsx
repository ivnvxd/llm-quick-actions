import { getPreferenceValues, LaunchProps } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ provider_model_transform_preview?: string }>();
const model_override = prefs.provider_model_transform_preview;
const toast_title = "Transforming...";

interface Arguments {
  prompt: string;
}

export default function TransformPreview(props: LaunchProps<{ arguments: Arguments }>) {
  const { prompt } = props.arguments;

  return ResultView(prompt, model_override, toast_title);
}
