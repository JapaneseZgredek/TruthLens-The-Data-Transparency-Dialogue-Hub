import React, { useState, useEffect } from "react";
import { experimentExamples } from "../experimentData";
import OpenAI from "openai";
import { generateASIGPrompt } from "../promptTemplate";

// --- KLIENT OPENAI POZA KOMPONENTEM ---
const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ExperimentScreen({ onFinish, groupName }) {
  const [index, setIndex] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const current = experimentExamples[index];
  const isASIG = groupName === "ASIG";

  if (!current) return null;

  // --- 1) AUTO ZAPYTANIE NA WEJŚCIU (DUŻY PROMPT Z TEMPLATE) ---
  const callInitialAI = async () => {
    try {
      setResponse("Thinking…");

      const promptToSend = generateASIGPrompt({
        chart_img: current.image || "Image not available",
        caption: current.caption,
        story: current.story,
      });

      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: promptToSend }],
        temperature: 0.2,
        max_tokens: 800,
      });

      setResponse(completion.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResponse("❌ Error while contacting OpenAI API.");
    }
  };

  useEffect(() => {
    if (isASIG && current) {
      callInitialAI();
    }
  }, [index, isASIG, current]);

  // --- 2) ZAPYTANIE PO KLIKNIĘCIU ASK (MAŁY PROMPT Z PYTANIEM USERA) ---
  const handleAsk = async () => {
    try {
      const userQuestion = prompt.trim() || "Please give me a deeper explanation.";

      setResponse("Thinking…");

      const followupPrompt = `
You are analysing a potentially manipulative chart and its narrative.

Here is the context:
- Image (URL or description): ${current.image || "Image not available"}
- Caption: "${current.caption}"
- Story: "${current.story}"

The user now asks the following follow-up question or gives an instruction:
"${userQuestion}"

Please answer in clear, friendly English with:
- Short paragraphs.
- Optional numbered points like "1.", "2.", "3." when listing things.
- Do NOT use bullet characters like "-" or "•" at the beginning of lines.
- Keep the structure tidy and easy to read.
`;

      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: followupPrompt }],
        temperature: 0.2,
        max_tokens: 800,
      });

      setResponse(completion.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResponse("❌ Error while contacting OpenAI API.");
    }
  };

  const handleNext = () => {
    if (index < experimentExamples.length - 1) {
      setIndex((prev) => prev + 1);
      setPrompt("");
      setResponse("");
    } else {
      onFinish();
    }
  };

  // ----------------------- ASIG LAYOUT -----------------------
  if (isASIG) {
    return (
      <div className="screen-card">
        <h1 className="screen-title">
          Inference {index + 1} / {experimentExamples.length}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* LEWY PANEL */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="image-placeholder">
              {current.image ? (
                <img
                  src={current.image}
                  alt="Stimulus"
                  style={{ maxWidth: "100%", borderRadius: "16px" }}
                />
              ) : (
                "Image placeholder"
              )}
            </div>

            <p style={{ marginTop: "16px", fontWeight: 600 }}>
              {current.statement}
            </p>
          </div>

          {/* PRAWY PANEL – WIĘKSZY, ALE NADAL SCROLLOWALNY */}
          <div
            style={{
              flex: 1.2,
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "400px", // trochę większy box na odpowiedź
                background: "#444",
                color: "white",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "15px",
                lineHeight: 1.5,
                overflowY: "auto", // dalej scrollowalne
                whiteSpace: "pre-wrap", // zachowuje nowe linie sensownie
              }}
            >
              {response || "OpenAI response will appear here..."}
            </div>
          </div>
        </div>

        {/* PROMPT */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt here..."
          style={{
            width: "100%",
            marginTop: "24px",
            height: "60px",
            resize: "none",
            padding: "12px",
            borderRadius: "12px",
            background: "#444",
            color: "white",
            border: "none",
          }}
        />

        {/* PRZYCISKI */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <button className="btn btn-primary" onClick={handleAsk}>
            Ask
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // ----------------------- ELG LAYOUT -----------------------
  return (
    <div className="screen-card">
      <h1 className="screen-title">
        Inference {index + 1} / {experimentExamples.length}
      </h1>

      <div className="screen-content">
        <div className="image-placeholder">
          {current.image ? (
            <img
              src={current.image}
              alt="Stimulus"
              style={{ maxWidth: "100%", borderRadius: "16px" }}
            />
          ) : (
            "Image placeholder"
          )}
        </div>

        <p>{current.statement}</p>

        <div className="scroll-box">
          <p>{current.description}</p>
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleNext}>
        {index === experimentExamples.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default ExperimentScreen;
