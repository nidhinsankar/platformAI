export const TEMPLATES_LIST = [
  { label: "Code Assistant", value: "code-assistant" },
  { label: "Sales Assistant", value: "sales-assistant" },
  { label: "AI Assistant", value: "ai-assistant" },
  { label: "Custom Prompt", value: "custom-prompt" },
  { label: "Customer Assistant", value: "customer-assistant" },
];
export const promptList = [
  { label: "AI Assistant", value: "ai-assistant" },
  { label: "Coding Assistant", value: "code-assistant" },
  { label: "Custom prompt", value: "custom-prompt" },
  { label: "Customer Assistant", value: "customer-assistant" },
  { label: "Sales Assistant", value: "sales-assistant" },
];
export const CODE_ASSISTANT_TEMPLATE = {
  templateId: "code-assistant",
  name: "Code Assistant",
  description: "An ai code helper for programmers",
  welcomeMessage: "Hello,How can i help",
  selectedPrompt: "code-assistant",
  defaultdefaultModel: "gpt-3.5-turbo",
  prompt:
    "You are an expert programming assistant. Your role is to help with coding questions, debug issues, explain concepts, and suggest best practices across various programming languages and frameworks.",

  defaultModel: "gpt-3.5-turbo",
  errorMessage:
    "Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We're here to help!",
  rightToLeftLanguage: false,
};

export const SALES_ASSISTANT = {
  name: "Sales Assistant",
  templateId: "sales-assistant",
  welcomeMessage: "Hello,How can i help",
  description: "An ai sales assistant for business owners",
  selectedPrompt: "sales-assistant",
  prompt:
    "You are a sales assistant. Help users with product information and purchasing decisions.",

  defaultModel: "gpt-3.5-turbo",
  errorMessage:
    "Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We're here to help!",
  rightToLeftLanguage: false,
};

export const AI_ASSISTANT_TEMPLATE = {
  name: "AI Assistant",
  templateId: "ai-assistant",
  description: "An ai helper hepling users with all kind of queries",
  welcomeMessage: "Hello,How can i help",
  selectedPrompt: "ai-assistant",
  prompt:
    "You are an AI assistant. Provide general help and information on various topics.",
  defaultModel: "gpt-3.5-turbo",
  errorMessage:
    "Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We're here to help!",
};

export const CUSTOM_PROMPT_TEMPLATE = {
  templateId: "custom-prompt",
  name: "Custom prompt",
  welcomeMessage: "Hello,How can i help",
  description: "An custom prompt helper hepling users with all kind of queries",
  selectedPrompt: "custom-prompt",
  prompt:
    "You are an assistant you help users that visit our website, keep it short, always refer to the documentation provided and never ask for more information",
  defaultModel: "gpt-3.5-turbo",
  errorMessage:
    "Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We're here to help!",
  rightToLeftLanguage: false,
};

export const CUSTOMER_ASSISTANT_TEMPLATE = {
  templateId: "customer-assistant",
  name: "Customer Assistant",
  welcomeMessage: "Hello,How can i help",
  description:
    "An customer assistant helper hepling customers and business person",
  selectedPrompt: "customer-assistant",
  defaultModel: "gpt-3.5-turbo",
  prompt:
    "You are an customer assistant. Your role is to help with customer related queries",
  errorMessage:
    "Oops! An error has occurred. If the issue persists, feel free to reach out to our support team for assistance. We're here to help!",
  rightToLeftLanguage: false,
};

export const CHATBOT_TEMPLATES = [
  CODE_ASSISTANT_TEMPLATE,
  SALES_ASSISTANT,
  AI_ASSISTANT_TEMPLATE,
  CUSTOM_PROMPT_TEMPLATE,
  CUSTOMER_ASSISTANT_TEMPLATE,
];
