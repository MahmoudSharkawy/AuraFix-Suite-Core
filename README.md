# 📱 AuraFix Suite Core

<p align="center">
  <img src="assets/S260224-0626232.png" width="800" alt="AuraFix Suite Interface">
</p>

<div align="center">
  <h3>Professional Device Repair & Cloud Diagnostic Tool</h3>
  <p>Designed for high-end repair labs with a sleek macOS-inspired interface.</p>
</div>

---

## 🎨 Visual Preview & Interface
The interface is built using **Electron** and **Web Technologies**, featuring a deep charcoal and translucent background to match the professional aesthetics of macOS.

### Key Visual Features:
* **Frosted Glass Effect:** Modern translucency in the sidebar and main cards.
* **Dynamic Status Indicator:** A pulsing red dot to indicate real-time USB scanning.
* **Cloud-Ready Dashboard:** Integrated IMEI/Serial identifier that operates independently of USB connection.

---

## 🚀 Project Architecture
The project is organized into modular directories to separate the engine logic from the user interface:

* **`/app`**: Contains the Electron UI, HTML, and CSS assets.
* **`/core`**: Housing the C++/Rust hardware communication layers.
* **`/assets`**: Project documentation and interface screenshots.

---

## 🛠️ Current Capabilities
* [x] **Interface Shell:** Fully responsive macOS-style dashboard.
* [x] **Cloud Identifier:** Manual Serial/IMEI analysis module.
* [ ] **USB Handshake:** Implementing libusb for DFU/EDL detection (In Progress).
* [ ] **Kernel Communication:** Direct chipset command protocols (Coming Soon).

---

## 🛡️ License
**Proprietary License** This software is the intellectual property of **AuraFix Organization**. All rights reserved. Unauthorized copying or distribution of this code is strictly prohibited.

---

<p align="center">
  <img src="https://img.shields.io/badge/Platform-macOS%20%7C%20Windows-blue?style=for-the-badge" alt="Platform Support">
  <img src="https://img.shields.io/badge/Status-Alpha%20v1.0.0-orange?style=for-the-badge" alt="Project Status">
</p>
