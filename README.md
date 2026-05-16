# 🎭 Deep Learning for Facial Emotion Recognition in Video

### *RAVDESS • CREMA-D • Cross-Corpus Evaluation • ResNet18*

<p align="center">

<img src="https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python" />
<img src="https://img.shields.io/badge/PyTorch-Deep%20Learning-red?style=for-the-badge&logo=pytorch" />
<img src="https://img.shields.io/badge/OpenCV-Computer%20Vision-green?style=for-the-badge&logo=opencv" />
<img src="https://img.shields.io/badge/Status-Research%20Project-purple?style=for-the-badge" />

</p>

---

# 📌 Overview

This repository presents a **deep learning pipeline for facial emotion recognition in video**, implemented using **PyTorch**, **OpenCV**, and **ResNet18 transfer learning** with a **cross-corpus evaluation strategy**.

The project focuses on simplified binary emotion recognition:

| Emotion      | Label |
| ------------ | ----- |
| 😊 Happy     | 1     |
| 😐 Not Happy | 0     |

The complete system includes:

✅ Video frame extraction
✅ Image preprocessing
✅ Data augmentation
✅ Transfer learning with ResNet18
✅ K-Fold cross-validation
✅ Cross-corpus validation
✅ Independent testing pipeline
✅ Metrics visualization and evaluation

---

# 🧠 Project Architecture

```text
Video Dataset
      ↓
Frame Extraction (OpenCV)
      ↓
Image Preprocessing
      ↓
Data Augmentation
      ↓
ResNet18 Transfer Learning
      ↓
Cross-Validation Training
      ↓
Validation (CREMA-D)
      ↓
Independent Testing
      ↓
Metrics & Visualization
```

---

# 📂 Datasets Used

## 🎬 RAVDESS — Training Dataset

* Dataset: Ryerson Audio-Visual Database of Emotional Speech and Song
* Source: https://zenodo.org/record/1188976
* Purpose: Model training
* Data Type: Video-based facial expressions

### Binary Label Mapping

| Original Emotion   | Binary Label |
| ------------------ | ------------ |
| Happy              | 1            |
| All other emotions | 0            |

### Training Features

* Frame extraction using OpenCV
* One frame per second
* Transfer learning with ResNet18
* Data augmentation
* 3-Fold Cross Validation

---

## 🎥 CREMA-D — Validation Dataset

* Source: https://www.kaggle.com/datasets/ejlok1/cremad
* Purpose: Cross-corpus validation
* Data Type: `.flv` emotional videos

### Validation Strategy

* Middle frame extracted from each video
* Used to validate model generalization
* Simulates domain shift between datasets

### Validation Split

| Split      | Percentage |
| ---------- | ---------- |
| Validation | 70%        |
| Testing    | 30%        |

---

## 🎞 External Testing Dataset (Optional)

Additional unseen datasets such as **AFEW** may be used for:

* Independent testing
* Real-world evaluation
* Generalization analysis

---

# ⚙️ Pipeline Overview

---

## 1️⃣ Frame Extraction

Frames are extracted from RAVDESS videos using OpenCV.

### Features

* Reads `.mp4` videos
* Saves 1 frame per second
* Stores frames locally in Colab runtime

```python
cv2.VideoCapture(video_path)
cv2.imwrite(output_frame.jpg)
```

---

## 2️⃣ Data Augmentation

Training images are augmented to improve robustness.

### Augmentations Used

* Random Horizontal Flip
* Random Rotation
* Color Jitter
* Resize to 224×224
* ImageNet normalization

---

## 3️⃣ Transfer Learning

The system uses **ResNet18 pretrained on ImageNet**.

### Model Modifications

```python
model.fc = nn.Linear(model.fc.in_features, 2)
```

Output classes:

| Output | Meaning   |
| ------ | --------- |
| 0      | Not Happy |
| 1      | Happy     |

---

## 4️⃣ Cross-Validation Training

Training uses **3-Fold Cross Validation**.

### Process

For each fold:

1. Split dataset into training and validation subsets
2. Train ResNet18
3. Validate on unseen fold
4. Save fold checkpoint

### Training Features

✅ Adam optimizer
✅ CrossEntropyLoss
✅ Early stopping
✅ Flat-loss detector
✅ Data augmentation

---

## 5️⃣ Cross-Corpus Validation

Validation is performed using **CREMA-D**, which is independent from RAVDESS.

This evaluates:

* Dataset generalization
* Robustness to domain shift
* Cross-corpus performance

---

## 6️⃣ Independent Testing Pipeline

The testing pipeline evaluates final performance on:

* Held-out CREMA-D samples
* Optional external datasets (AFEW)

This stage simulates real-world deployment conditions.

---

# 📊 Evaluation Metrics

The project computes several evaluation metrics commonly used in affective computing and machine learning.

| Metric           | Purpose                              |
| ---------------- | ------------------------------------ |
| Accuracy         | Overall correctness                  |
| Precision        | Positive prediction quality          |
| Recall           | Sensitivity to positive class        |
| F1-Score         | Balance between precision and recall |
| Confusion Matrix | Error visualization                  |

---

## 📈 Visualizations

The repository includes plots for:

✅ Confusion Matrix
✅ Accuracy
✅ Precision
✅ Recall
✅ F1-Score
✅ Class Distribution
✅ Prediction Histograms

---

# 🛑 Overfitting Prevention

To improve generalization, the system includes:

* Early stopping
* Validation monitoring
* Flat-loss detection
* Data augmentation
* Cross-validation training

---

# 💾 Saved Models

Each fold model is saved automatically:

```text
/content/drive/MyDrive/RAVDESS_fold_1.pth
/content/drive/MyDrive/RAVDESS_fold_2.pth
/content/drive/MyDrive/RAVDESS_fold_3.pth
```

---

# 📄 Paper / Technical Report

This repository also includes the accompanying academic report:

## **Tutorial: Deep Learning for Happy vs. Not Happy Facial Expression Recognition in Video**

### Author Information

| Field       | Information                                             |
| ----------- | ------------------------------------------------------- |
| Author      | Jose Carlos Alania Aguero                               |
| Department  | Electrical & Computing Engineering                      |
| Course      | Image Processing (ECE-533), 2026                        |
| Institution | University of New Mexico                                |
| Location    | Albuquerque, NM, USA                                    |
| Email       | [jalaniaguero99@unm.edu](mailto:jalaniaguero99@unm.edu) |

---

## 📌 Paper Contents

The report discusses:

* Emotion recognition problem formulation
* Video preprocessing pipeline
* Frame extraction with OpenCV
* Deep learning methodology
* Transfer learning using ResNet18
* Cross-validation strategy
* Cross-corpus evaluation
* Validation and testing methodology
* Metrics analysis
* Generalization limitations
* Experimental discussion

---

## 📁 Paper Location

```text
paper/
└── Tutorial_Deep_Learning_Facial_Emotion_Recognition_in_Video.pdf
```

---

# 🚀 Technologies Used

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| Python       | Programming language    |
| PyTorch      | Deep learning framework |
| Torchvision  | Pretrained models       |
| OpenCV       | Video processing        |
| Scikit-learn | Metrics & evaluation    |
| Matplotlib   | Visualization           |
| Google Colab | Training environment    |

---

# 📌 Future Improvements

Potential future work includes:

* Multi-class emotion classification
* Temporal modeling with LSTM/Transformers
* Real-time webcam inference
* Audio-visual fusion
* Face detection integration
* Transformer-based architectures
* Deployment on edge devices

---

# 📜 License

This repository is intended for:

* Academic research
* Educational purposes
* Experimental deep learning studies

---

# ⭐ Acknowledgments

Special thanks to:

* RAVDESS Dataset creators
* CREMA-D Dataset creators
* PyTorch community
* University of New Mexico

---
