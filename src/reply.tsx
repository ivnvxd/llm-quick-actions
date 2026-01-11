import { getPreferenceValues, LaunchProps } from "@raycast/api";
import ResultView from "./common";

const prefs = getPreferenceValues<{ reply_tone: string; provider_model_reply?: string }>();
const model_override = prefs.provider_model_reply;
const toast_title = "Drafting reply...";

interface Arguments {
  instructions: string;
}

export default function Reply(props: LaunchProps<{ arguments: Arguments }>) {
  const { instructions } = props.arguments;

  const prompt = instructions
    ? `Draft a ${prefs.reply_tone} reply to the following message. Instructions: ${instructions}\n\n`
    : `Draft a ${prefs.reply_tone} reply to the following message:\n\n`;

  return ResultView(prompt, model_override, toast_title);
}
