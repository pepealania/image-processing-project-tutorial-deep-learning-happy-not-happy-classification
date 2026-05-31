"use client";

import React, { useEffect, useState } from "react";

export default function BinaryClassificationAnimation() {
  const [step, setStep] = useState(0);

  const stages = [
    {
      title: "Dataset Preparation",
      content: (
        <>
          <div className="metric">🎥 Videos: 2,760</div>
          <div className="metric">🖼️ Frames Extracted: 9,003</div>
          <div className="metric">🙂 Happy: 1,166</div>
          <div className="metric">😐 Not Happy: 7,837</div>
          <div className="metric highlight">
            ⚖️ Balanced Dataset: 2,332
          </div>
        </>
      ),
    },
    {
      title: "5-Fold Cross Validation",
      content: (
        <div className="fold-container">
          {[1, 2, 3, 4, 5].map((fold) => (
            <div
              key={fold}
              className={`fold ${step >= 1 ? "active" : ""}`}
              style={{
                animationDelay: `${fold * 0.3}s`,
              }}
            >
              Fold {fold}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Validation Accuracy Race",
      content: (
        <div className="chart">
          <div className="row">
            <span>ResNet18</span>
            <div className="bar">
              <div
                className="fill resnet"
                style={{ width: "94.96%" }}
              />
            </div>
            <span>94.96%</span>
          </div>

          <div className="row">
            <span>MobileNetV2</span>
            <div className="bar">
              <div
                className="fill mobilenet"
                style={{ width: "95.23%" }}
              />
            </div>
            <span>95.23%</span>
          </div>
        </div>
      ),
    },
    {
      title: "Final Test Performance",
      content: (
        <div className="final-results">
          <div className="card">
            <h3>ResNet18</h3>
            <div>Accuracy: 96.15%</div>
            <div>Precision: 0.9317</div>
            <div>Recall: 0.9957</div>
            <div>F1: 0.9627</div>
          </div>

          <div className="card winner">
            <h3>🏆 MobileNetV2</h3>
            <div>Accuracy: 96.36%</div>
            <div>Precision: 0.9463</div>
            <div>Recall: 0.9828</div>
            <div>F1: 0.9642</div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % stages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="binary-animation">
      <h2>{stages[step].title}</h2>

      <div key={step} className="fade">
        {stages[step].content}
      </div>

      <style jsx>{`
        .binary-animation {
          max-width: 900px;
          margin: auto;
          padding: 40px;
          text-align: center;
          font-family: Inter, sans-serif;
        }

        h2 {
          margin-bottom: 30px;
        }

        .fade {
          animation: fadeIn 0.8s ease;
        }

        .metric {
          font-size: 1.2rem;
          margin: 10px;
        }

        .highlight {
          font-weight: bold;
          font-size: 1.4rem;
        }

        .fold-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .fold {
          width: 120px;
          height: 80px;
          border-radius: 12px;
          border: 2px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: pop 0.8s forwards;
        }

        .chart {
          width: 100%;
          max-width: 700px;
          margin: auto;
        }

        .row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 20px 0;
        }

        .row span:first-child {
          width: 120px;
          text-align: left;
        }

        .bar {
          flex: 1;
          height: 30px;
          background: #eee;
          border-radius: 20px;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          width: 0;
          animation: grow 2s forwards;
        }

        .resnet {
          background: #3b82f6;
        }

        .mobilenet {
          background: #10b981;
        }

        .final-results {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          padding: 24px;
          border-radius: 16px;
          border: 1px solid #ddd;
          min-width: 250px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .winner {
          transform: scale(1.05);
          border: 2px solid gold;
        }

        @keyframes grow {
          from {
            width: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pop {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}