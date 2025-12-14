# COMPREHENSIVE PROJECT REPORT: SDM Cataract Information & Reminder Portal

**Department:** Computer Science and Engineering  
**Institution:** SDM College of Medical Sciences & Hospital (SDMCET)  
**Subject:** Minor Project Submission  

---

## 1. Project Overview

### 1.1 Context and Background
The integration of Information Technology into healthcare systems, often referred to as e-health, has revolutionized patient care delivery. The "SDM Cataract Information & Reminder Portal" is a focused initiative developed for the Ophthalmology Department of SDM College of Medical Sciences & Hospital. Cataracts remain one of the leading causes of preventable blindness worldwide, particularly affecting the geriatric population. While the surgical procedure itself—Phacoemulsification—is advanced and highly successful, the post-operative outcomes are heavily dependent on the patient's adherence to a strict medication regimen.

### 1.2 Motivation
In a bustling hospital environment like SDM, doctors perform numerous surgeries daily. The post-operative instructions, though explained verbally, can be overwhelming for patients, especially elderly ones who may suffer from age-related cognitive decline or forgetfulness. A significant gap exists between the clinical success of the surgery and the home-care recovery phase. Patients often lose paper prescriptions, forget dosage timings, or settle for misconceptions about eye care. This project was conceived to bridge this specific gap using web technologies to ensure that "care continues beyond the hospital walls."

### 1.3 Scope
The scope of this project extends to three main stakeholders:
1.  **The Patient:** Who gains access to a simplified, 24/7 information repository and an automated reminder assistant.
2.  **The Caretaker/Family:** Who can easily manage the medication schedule for their elderly relatives using the digital tools provided.
3.  **The Hospital Administration:** Who can ensure higher compliance rates and reduced post-op complications due to negligence.

---

## 2. Abstract

The "Cataract Information & Reminder Portal" is a full-stack web application designed to serve as a digital companion for cataract patients. The project addresses two critical challenges in modern ophthalmology: patient education and medication compliance. 

Technically, the system is built on a robust Client-Server architecture. The frontend is a responsive web interface capable of educating patients through structured modules covering Pre-Surgery preparations, Surgical procedures, and Post-Surgery care. It features high-contrast text and intuitive navigation tailored for visually impaired or elderly users.

The core innovation of this project is the **"Intelligent Reminder System."** This backend utility allows users or hospital staff to configure medication schedules (e.g., "Moxifloxacin Eye Drops every 2 hours"). Once configured, the server employs a non-blocking scheduling algorithm to trigger real-time notifications via **SMS (Short Message Service)** and **Email**. This ensures that the patient receives a direct alert on their personal device exactly when the medication is due, significantly reducing the risk of missed doses.

Furthermore, the system integrates an **AI-powered Chatbot** to handle natural language queries, providing instant responses to common questions, thereby reducing the load on hospital support staff. This project exemplifies the practical application of web development frameworks (Node.js, Express) and Database Management (MongoDB) in solving a real-world healthcare problem.

---

## 3. Introduction

### 3.1 Domain Introduction
Healthcare informatics is an emerging field that optimizes the acquisition, storage, retrieval, and use of information in health and biomedicine. In the context of Ophthalmology, patient compliance is critical. Studies suggest that non-compliance with eye drop regimens after cataract surgery can lead to inflammation, infection (Endophthalmitis), and delayed vision recovery.

### 3.2 The Existing Scenario
Currently, most hospitals, including SDM, rely on:
1.  **Verbal Counseling:** Doctors explain instructions effectively, but retention rates by patients are low (often <50% after 24 hours).
2.  **Printed Pamphlets:** Physical papers are often misplaced, damaged, or the font size is too small for patients with compromised vision.
3.  **Manual Alarms:** Patients are asked to set alarms on their phones, which is a technical hurdle for many elderly individuals.

### 3.3 The Proposed Solution
This project introduces a "Zero-Friction" digital intervention. Instead of relying on the patient's memory or ability to set phone alarms, the responsibility is offloaded to a centralized server. The patient (or nurse) inputs the phone number and frequency once. The server then takes over, ensuring reliable delivery of reminders.

Additionally, the project democratizes access to medical information. By hosting the content on a web portal, patients can review "Do’s and Don’ts" repeatedly at their own pace, reducing anxiety and phone calls to the hospital for trivial doubts.

---

## 4. Problem Statement

### 4.1 Detailed Analysis of the Problem
The core problem can be decomposed into three sub-issues that this project aims to solve:

**A. Cognitive Load on Elderly Patients:**  
Cataract patients are predominantly over the age of 60. Managing a tapering dose of eye drops (e.g., 4 times a day for week 1, 3 times for week 2, etc.) is cognitively demanding. "Forgetting" is the number one cited reason for non-compliance.

**B. Information Volatility:**  
Paper-based instructions are static and easily lost. If a patient loses their discharge summary, they have no immediate reference for which activity is allowed (e.g., "Can I watch TV?", "Can I take a bath?"). This leads to unnecessary panic or dangerous assumptions.

**C. Lack of Feedback Mechanism:**  
In the traditional system, doctors have no way of "nudging" the patient once they leave the hospital premises. There is no channel to send timely alerts or health tips during the critical 4-week recovery period.

### 4.2 Impact of the Problem
Failure to address these issues leads to:
*   **Medical Complications:** Increased risk of post-op infections.
*   **Hospital Strain:** Increased volume of support calls asking basic questions.
*   **Patient Anxiety:** Fear of doing something wrong during recovery.

---

## 5. Objectives

The project is driven by the following specific, measurable objectives:

### 5.1 Primary Objectives
1.  **Automate Medication Adherence:** To design and deploy a server-side scheduling system that sends automated SMS/Email alerts for eye drops, achieving a delivery latency of less than 30 seconds from the scheduled time.
2.  **Centralize Knowledge:** To create a unified, accessible web portal containing all standard operating procedures (SOPs) for cataract patients at SDM Hospital.

### 5.2 Secondary Objectives
1.  **Enhance Accessibility:** To ensure the UI/UX is suitable for the visually impaired (large fonts, high contrast, simple navigation).
2.  **Interactive Support:** To implement a basic AI chatbot that can parse user keywords (e.g., "pain", "blur", "appointment") and provide relevant, pre-defined medical responses.
3.  **Administrative Control:** To provide a secured "Admin Dashboard" where hospital staff can visualize all active reminders and manually override or stop them if a patient's treatment plan changes.

---

## 6. System Architecture & Modules

### 6.1 High-Level Architecture
The system follows a standard **MVC (Model-View-Controller)** architectural pattern, adapted for a modern RESTful API context.

*   **The View (Frontend):** 
    Comprises HTML5, CSS3, and Client-Side JavaScript. It is the interface through which the user interacts. It is responsible for collecting data (forms) and displaying information (educational pages).
*   **The Controller (Backend API):** 
    Built on Node.js and Express. It acts as the brain. It receives requests (e.g., "Start Reminder"), validates them, interacts with the database, and executes the business logic (scheduling the timer).
*   **The Model (Database):** 
    MongoDB acts as the persistence layer. It stores the `Reminder` schema (Patient Name, Phone, Interval, ActiveStatus).

### 6.2 Detailed Module Description

#### A. The Education Module
This module consists of static, content-rich pages:
*   `cataract.html`: Explains the pathology of cataracts.
*   `pre-surgery.html`: A checklist for the day before surgery (Fasting rules, etc.).
*   `post-surgery.html`: Interactive cards showing allowed vs. restricted activities.

#### B. The Scheduler Engine (Backend)
This is the most complex logical component. 
*   **Input:** Interval $T$ (in hours).
*   **Process:** The server calculates $T_{ms} = T \times 3600 \times 1000$. It creates a JavaScript `setInterval` object referenced by the Database ID.
*   **Persistence:** On server restart, a `restoreReminders()` function queries the database for all `isActive: true` records and re-initializes their timers, ensuring system resilience.

#### C. The Notification Dispatcher
When the timer triggers, this module constructs the message payload.
*   **SMS Service:** It formats the phone number to E.164 standard (e.g., +91...) and calls the Twilio Programmable Messaging API.
*   **Email Service:** It uses Nodemailer with Gmail SMTP transport to send a rich-text email with the hospital letterhead.

#### D. The AI Assistant Module
A client-side JavaScript module (`ai-chat.js`) that maintains a dictionary of intent-response pairs. It uses fuzzy string matching (keyword inclusion) to detect user intent. 
*   *Example:* User types "Water in eyes". Bot detects "water" -> Returns "Avoid splashing water for 2 weeks."

---

## 7. Technology Stack

### 7.1 Frontend Technologies
*   **HTML5:** Used for semantic structuring of the document (Articles, Sections, Navs), crucial for screen readers used by visually impaired patients.
*   **CSS3 (Vanilla):** We deliberately avoided heavy frameworks like Bootstrap to maintain a lightweight footprint (fast load times on mobile data) and to have granular control over the "Medical Blue/Green" color psychology used in the design.
*   **JavaScript (ES6+):** Handles DOM manipulation, asynchronous Fetch API calls to the backend, and the chatbot logic.

### 7.2 Backend Technologies
*   **Node.js:** A non-blocking, event-driven runtime. It is ideal for this project because the "Reminder System" is essentially I/O bound (waiting for timers, sending network requests) rather than CPU bound. Node.js handles multiple concurrent timers efficiently without threading overhead.
*   **Express.js:** A minimal web framework used to define REST API endpoints (`POST /api/reminders`, `DELETE /api/reminders/:id`). It simplifies routing and middleware integration (like CORS).

### 7.3 Database
*   **MongoDB:** A NoSQL database. 
    *   *Why MongoDB?* The data structure for a reminder is simple and JSON-like. We do not need complex JOINs. MongoDB allows for flexible schema evolution (e.g., adding a "Doctor Name" field later without breaking existing records).
*   **Mongoose:** An object modeling tool that provides schema validation, ensuring that a reminder cannot be created without a valid phone number or name.

### 7.4 External Services (APIs)
*   **Twilio API:** The industry standard for programmatic SMS. It provides high reliability and delivery status tracking.
*   **Nodemailer:** A module for Node.js applications to allow easy email sending. It supports HTML content in emails, allowing for professional branding.

---

## 8. Implementation Details

### 8.1 File Structure Strategy
The codebase is organized to separate concerns:
*   **Root Directory:** Contains `server.js` (entry point) and HTML files for easy serving.
*   **Assets:** Separate folders/files for CSS (`style.css`), Client JS (`reminders.js`), and Images.
*   **Configuration:** `.env` file stores sensitive credentials (API Keys, DB URIs) to ensure security best practices.

### 8.2 Key Algorithmic Logic
**The Reminder Loop:**
The core logic resides in `server.js`. We use an in-memory object `activeIntervals = {}` to map Database IDs to Timer IDs.
```javascript
// Pseudo-code for Scheduling
function startReminder(reminderDoc) {
    if (activeIntervals[reminderDoc._id]) stop(reminderDoc._id); // Safety clear
    
    const timerId = setInterval(async () => {
        await sendSMS(reminderDoc.phone);
        await sendEmail(reminderDoc.email);
    }, reminderDoc.interval * 3600000);

    activeIntervals[reminderDoc._id] = timerId;
}
```
This approach allows O(1) access to stop a specific timer when the user clicks "Stop Reminder" on the dashboard.

### 8.3 Frontend-Backend Integration
Communication happens via JSON over HTTP.
*   **Forms:** The "Eye Drop Settings" modal captures data. `reminders.js` intercepts the form submit event (`e.preventDefault()`), constructs a JSON object, and sends a `POST` request using the `fetch` API.
*   **Feedback:** The UI waits for the Promise to resolve. On 200 OK, it shows a green success message and dynamically updates the DOM to show the "Active" state without reloading the page.

### 8.4 Security Considerations
1.  **Environment Variables:** API secrets are never hardcoded.
2.  **Input Validation:** The backend checks for null values before hitting the database.
3.  **CORS:** Cross-Origin Resource Sharing is configured to allow requests only from trusted domains (or localhost during dev).

---

## 9. Conclusion & Future Scope

### 9.1 Conclusion
The SDM Cataract Information & Reminder Portal successfully demonstrates the power of simple, well-applied technology in healthcare. By automating the mundane but critical task of medication reminders, the system acts as a force multiplier for the hospital staff. It empowers patients to take charge of their recovery with confidence. Experience with the prototype shows that users appreciate the "set it and forget it" convenience of the SMS alerts. The project meets all defined objectives: it is accessible, reliable, and informative.

### 9.2 Limitations
*   **Dependency on Connectivity:** The server requires constant internet to send APIs.
*   **In-Memory Timers:** If the server crashes, timers are lost until the server restarts and runs the `restoreReminders()` recovery function.

### 9.3 Future Scope
1.  **WhatsApp Integration:** Moving beyond SMS to WhatsApp Business API for richer notifications (images of the specific eye drop bottle).
2.  **Mobile App:** Wrapping the web portal into a Progressive Web App (PWA) or Native App for offline access to information.
3.  **Voice Reminders:** Using Text-to-Speech (TTS) to call the patient and speak the reminder, which is more effective for illiterate patients.
4.  **Doctor Dashboard:** Allowing doctors to preset the schedule directly from their consultation desk, removing the need for the patient to set it up.

---
**End of Report**
