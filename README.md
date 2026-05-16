# 🎭 Video-Based Emotion Recognition (RAVDESS + CREMA-D + Cross-Corpus Testing)

This project implements a deep learning pipeline for **facial emotion recognition from videos** using **PyTorch** and **ResNet18**. It supports:

- Frame extraction from video datasets
- Data augmentation
- Cross-validation training (RAVDESS)
- Validation on CREMA-D
- Independent testing pipeline
- Full evaluation metrics and visualization

---

## 📂 Datasets Used

### 🎬 RAVDESS (Training)
- Source: https://zenodo.org/record/1188976
- Used for model training (frame-based classification)
- Emotion labels simplified to:
  - 😊 Happy → 1
  - 😐 Not Happy → 0

---

### 🎥 CREMA-D (Validation / Cross-corpus)
- Source: https://www.kaggle.com/datasets/ejlok1/cremad
- Used for validation (domain shift testing)
- One middle frame extracted per video

---

### 🎞 AFEW / External Dataset (Optional Testing)
- Used for final generalization evaluation
- Completely unseen data

---

## ⚙️ Pipeline Overview

### 1. Frame Extraction (RAVDESS)

- Extracts frames from `.mp4` videos using OpenCV
- Saves 1 frame per second

```python
cv2.VideoCapture(video_path)
cv2.imwrite(output_frame.jpg)
