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

  // --- AUTO ZAPYTANIE NA START (DUŻY PROMPT) ---
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

  // --- FOLLOW-UP (MAŁY PROMPT) ---
  const handleAsk = async () => {
    try {
      const userQuestion =
        prompt.trim() || "Please give me a deeper explanation.";
      setResponse("Thinking…");

      const followupPrompt = `
You are analysing a potentially manipulative chart and its narrative.

Context:
Image: ${current.image || "Image not available"}
Caption: "${current.caption}"
Story: "${current.story}"

User asks:
"${userQuestion}"

Please respond with:
• Clear paragraphs.
• Optional numbered sections like "1.", "2.", "3."
• NO bullet characters "-", "•" or "*".
• Justified logical structure and readable formatting.
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

  // --- NEXT ---
  const handleNext = () => {
    if (index < experimentExamples.length - 1) {
      setIndex((prev) => prev + 1);
      setPrompt("");
      setResponse("");
    } else {
      onFinish();
    }
  };

  // --- BACK ---
  const handleBack = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setPrompt("");
      setResponse("");
    }
  };

  // ----------------------- ASIG LAYOUT -----------------------
  if (isASIG) {
    return (
      <div className="screen-card">
        <h1 className="screen-title" style={{ textAlign: "justify" }}>
          Inference {index + 1} / {experimentExamples.length}
        </h1>

        <div style={{ display: "flex", gap: "20px" }}>
          {/* LEWY PANEL */}
          <div
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
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

            <p
              style={{
                marginTop: "16px",
                fontWeight: 600,
                textAlign: "justify",
                whiteSpace: "pre-wrap",
              }}
            >
              {current.statement}
            </p>
          </div>

          {/* PRAWY PANEL (ODPOWIEDŹ AI) */}
          <div style={{ flex: 1.2, display: "flex" }}>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "#444",
                color: "white",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "15px",
                lineHeight: 1.5,
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                textAlign: "justify",
              }}
            >
              {response || "OpenAI response will appear here..."}
            </div>
          </div>
        </div>

        {/* PROMPT FIELD */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt here..."
          style={{
            width: "100%",
            marginTop: "24px",
            height: "70px",
            resize: "none",
            padding: "12px",
            borderRadius: "12px",
            background: "#444",
            color: "white",
            border: "none",
            textAlign: "justify",
          }}
        />

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          {index > 0 && (
            <button className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
          )}

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
      <h1 className="screen-title" style={{ textAlign: "justify" }}>
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

        {/* Statement z labelką */}
        <p
          style={{
            textAlign: "justify",
            marginTop: "16px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Statement: </strong>
          {current.statement}
        </p>

        {/* Description z labelką, bez scrollboxa */}
        <p
          style={{
            textAlign: "justify",
            marginTop: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Description: </strong>
          {current.description}
        </p>
      </div>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "12px",
        }}
      >
        {index > 0 && (
          <button className="btn btn-secondary" onClick={handleBack}>
            Back
          </button>
        )}

        <button className="btn btn-primary" onClick={handleNext}>
          {index === experimentExamples.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default ExperimentScreen;
