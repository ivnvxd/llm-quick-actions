/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OpenAI API Key - API Key for OpenAI (get from platform.openai.com) */
  "openai_apikey"?: string,
  /** Claude API Key - API Key for Claude (get from console.anthropic.com) */
  "anthropic_apikey"?: string,
  /** Gemini API Key - API Key for Gemini (get from aistudio.google.com) */
  "google_apikey"?: string,
  /** Default Model - Default provider and model. Pricing: input/output per 1M tokens */
  "default_model": "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `summarize` command */
  export type Summarize = ExtensionPreferences & {
  /** Summarize Prompt - The prompt for the summarize command */
  "prompt_summarize": string,
  /** Provider & Model - Select provider and model for this command */
  "provider_model_summarize"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `rewrite` command */
  export type Rewrite = ExtensionPreferences & {
  /** Rewrite Prompt - The prompt for the rewrite command */
  "prompt_rewrite": string,
  /** Provider & Model - Select provider and model for this command */
  "provider_model_rewrite"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `refine` command */
  export type Refine = ExtensionPreferences & {
  /** Refine Prompt - The prompt for the refine command */
  "prompt_refine": string,
  /** Provider & Model - Select provider and model for this command */
  "provider_model_refine"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `custom` command */
  export type Custom = ExtensionPreferences & {
  /** Custom Prompt - The prompt for the custom action command */
  "prompt_custom": string,
  /** Provider & Model - Select provider and model for this command */
  "provider_model_custom"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `execute` command */
  export type Execute = ExtensionPreferences & {
  /** Provider & Model - Select provider and model for this command */
  "provider_model_execute"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `preview` command */
  export type Preview = ExtensionPreferences & {
  /** Provider & Model - Select provider and model for this command */
  "provider_model_preview"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `transform` command */
  export type Transform = ExtensionPreferences & {
  /** Provider & Model - Select provider and model for this command */
  "provider_model_transform"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `transform_preview` command */
  export type TransformPreview = ExtensionPreferences & {
  /** Provider & Model - Select provider and model for this command */
  "provider_model_transform_preview"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `translate` command */
  export type Translate = ExtensionPreferences & {
  /** Target Language - The language to translate to */
  "target_language": string,
  /** Provider & Model - Select provider and model for this command */
  "provider_model_translate"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `explain` command */
  export type Explain = ExtensionPreferences & {
  /** Provider & Model - Select provider and model for this command */
  "provider_model_explain"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
  /** Preferences accessible in the `reply` command */
  export type Reply = ExtensionPreferences & {
  /** Reply Tone - The tone for the reply */
  "reply_tone": "professional" | "friendly" | "casual" | "formal",
  /** Provider & Model - Select provider and model for this command */
  "provider_model_reply"?: "global" | "_openai_sep" | "openai:gpt-5.2" | "openai:gpt-5.1" | "openai:gpt-5" | "openai:gpt-5-mini" | "openai:gpt-5-nano" | "openai:gpt-5.2-pro" | "openai:gpt-4.1" | "openai:gpt-4.1-mini" | "openai:gpt-4.1-nano" | "_claude_sep" | "anthropic:claude-sonnet-4-5-20250929" | "anthropic:claude-haiku-4-5-20251001" | "anthropic:claude-opus-4-5-20251101" | "_gemini_sep" | "google:gemini-3-pro-preview" | "google:gemini-3-flash-preview" | "google:gemini-2.5-pro" | "google:gemini-2.5-flash" | "google:gemini-2.5-flash-lite"
}
}

declare namespace Arguments {
  /** Arguments passed to the `summarize` command */
  export type Summarize = {}
  /** Arguments passed to the `rewrite` command */
  export type Rewrite = {}
  /** Arguments passed to the `refine` command */
  export type Refine = {}
  /** Arguments passed to the `custom` command */
  export type Custom = {}
  /** Arguments passed to the `execute` command */
  export type Execute = {}
  /** Arguments passed to the `preview` command */
  export type Preview = {}
  /** Arguments passed to the `transform` command */
  export type Transform = {
  /** e.g. beautify JSON */
  "prompt": string
}
  /** Arguments passed to the `transform_preview` command */
  export type TransformPreview = {
  /** e.g. beautify JSON */
  "prompt": string
}
  /** Arguments passed to the `translate` command */
  export type Translate = {}
  /** Arguments passed to the `explain` command */
  export type Explain = {}
  /** Arguments passed to the `reply` command */
  export type Reply = {
  /** e.g. decline politely, ask for deadline */
  "instructions": string
}
}

