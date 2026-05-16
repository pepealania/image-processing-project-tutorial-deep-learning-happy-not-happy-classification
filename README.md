# 🎭 Video-Based Emotion Recognition (RAVDESS + CREMA-D + Cross-Corpus Evaluation)

This repository implements a deep learning pipeline for **facial emotion recognition in videos**, using **PyTorch**, **ResNet18**, and a **cross-corpus evaluation strategy**.

The system is designed to classify facial expressions into a simplified binary task:

- 😊 Happy
- 😐 Not Happy

---

## 📄 Paper / Technical Report

This project includes an academic report that describes the full methodology, experiments, and results.

### **Tutorial: Deep Learning for Happy vs. Not Happy Facial Expression Recognition in Video**  
**Author:** Jose Carlos Alania Aguero  
**Student at Department:** Electrical & Computing Engineering  
**Course:** Image Processing (ECE-533), 2026  
**Institution:** University of New Mexico, Albuquerque, NM, USA  
**Email:** jalaniaguero99@unm.edu  

---

### 📌 Paper Overview

The report covers:

- Problem formulation (binary emotion recognition)
- Dataset design and preprocessing
- Frame extraction from video using OpenCV
- Deep learning architecture (ResNet18 transfer learning)
- Cross-validation training strategy
- Cross-corpus validation (RAVDESS → CREMA-D)
- Testing methodology with unseen data splits
- Evaluation metrics and performance analysis
- Discussion of generalization limitations

---

### 📁 Paper Location

The full report is included in the repository:

```text id="paperloc"
paper/
└── Tutorial_Deep_Learning_Facial_Emotion_Recognition_in_Video.pdf
