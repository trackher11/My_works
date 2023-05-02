var header = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer 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",
};

var body = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "Who won the world series in 2020?",
    },
  ],
  temperature: 1,
  top_p: 1,
  n: 1,
  stream: false,
  max_tokens: 250,
  presence_penalty: 0,
  frequency_penalty: 0,
};

var requestOptions = {
  method: "POST",
  headers: header,
  body: JSON.stringify(body),
  redirect: "follow",
};

fetch("https://api.openai.com/v1/chat/completions", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
