"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type Message = { role: "user" | "assistant"; content: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm here to answer questions about this portfolio. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Sorry, something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  }

  // on mobile: full screen chat, on desktop: floating window
  const chatWindowStyle: React.CSSProperties = isMobile
    ? {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 99999,
        width: "100%",
        height: "100%",
        backgroundColor: "#0f172a",
        border: "none",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        fontFamily: "inherit",
      }
    : {
        position: "fixed",
        bottom: "96px",
        right: "28px",
        zIndex: 99999,
        width: "370px",
        backgroundColor: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
        fontFamily: "inherit",
      };

  const chatUI = (
    <>
      {/* Floating Button — hidden on mobile when chat is open */}
      {(!isMobile || !open) && (
        <button
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 99999,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Open chat"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div style={chatWindowStyle}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div>
              <p style={{ margin: 0, color: "#fff", fontWeight: 600, fontSize: "15px" }}>
                Chat with my portfolio
              </p>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "12px", marginTop: "2px" }}>
                Ask about my skills, projects, or experience
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Quick suggestion chips */}
          {messages.length === 1 && (
            <div style={{
              padding: "12px 16px 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              backgroundColor: "#020617",
            }}>
              {["Who are you?", "Your skills?", "Your projects?", "Available for work?"].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(send, 0);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid #1e293b",
                    borderRadius: "20px",
                    padding: "5px 11px",
                    fontSize: "12px",
                    color: "#38bdf8",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            backgroundColor: "#020617",
            // on mobile takes remaining height, on desktop capped
            maxHeight: isMobile ? "none" : "320px",
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: isMobile ? "85%" : "80%",
                  padding: "9px 13px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  fontSize: isMobile ? "14px" : "13px",
                  lineHeight: "1.5",
                  backgroundColor: m.role === "user" ? "#3b82f6" : "#0f172a",
                  color: m.role === "user" ? "#fff" : "#94a3b8",
                  border: m.role === "user" ? "none" : "1px solid #1e293b",
                  wordBreak: "break-word",
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #1e293b",
                  padding: "9px 13px",
                  borderRadius: "16px 16px 16px 4px",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}>
                  {[0, 150, 300].map((delay, i) => (
                    <span key={i} style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#38bdf8",
                      display: "inline-block",
                      animation: "chatbounce 1s infinite",
                      animationDelay: `${delay}ms`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            borderTop: "1px solid #1e293b",
            padding: isMobile ? "12px 16px 24px" : "12px",  // extra bottom padding on mobile for safe area
            display: "flex",
            gap: "8px",
            backgroundColor: "#0f172a",
            flexShrink: 0,
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "10px",
                padding: "10px 14px",
                fontSize: isMobile ? "16px" : "13px", // 16px prevents iOS zoom on focus
                color: "#f8fafc",
                outline: "none",
                fontFamily: "inherit",
              }}
              onFocus={e => (e.target.style.borderColor = "#3b82f6")}
              onBlur={e => (e.target.style.borderColor = "#1e293b")}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: loading || !input.trim()
                  ? "#1e293b"
                  : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                border: "none",
                borderRadius: "10px",
                padding: "10px 14px",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "opacity 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatbounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );

  if (!mounted) return null;
  return createPortal(chatUI, document.body);
}