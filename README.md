# Arnotts Cloud Migration Project (Group E)

## Overview

This project demonstrates the migration of a web application (Arnotts) from a traditional Infrastructure-as-a-Service (IaaS) model to a modern, containerised Platform-as-a-Service (PaaS) architecture using Microsoft Azure.

The aim is to improve scalability, reduce infrastructure management, and optimise cost efficiency.

---

## Project Objectives

* Analyse existing IaaS-based architecture
* Design a cloud migration strategy
* Implement a working cloud deployment
* Compare IaaS vs PaaS models
* Demonstrate containerised deployment

---

## Proposed Architecture

User → Azure Front Door → Azure CDN → Azure App Service (Docker Container) → Node.js Application → Azure Blob Storage → Azure Monitor

---

## Technologies Used

* Microsoft Azure App Service (Linux, Docker-based)
* Docker (Containerisation)
* Node.js (Backend Application)
* GitHub (Version Control)
* GitHub Container Registry (Image Hosting)
* Azure Blob Storage (Static Content)
* Azure Monitor (Logging & Monitoring)
* Azure CDN (Content Delivery - Optional)
* Azure Front Door (Global Routing - Optional)

---

## Migration Strategy

We assume the existing system is hosted on IaaS (e.g., virtual machines on AWS).

### Current Challenges:

* Manual scaling
* High operational overhead
* Infrastructure maintenance
* Inefficient resource usage

### Proposed Solution:

* Move to Azure PaaS (App Service)
* Containerise application using Docker
* Use managed services for storage and monitoring

---

## Benefits of Proposed Solution

* Reduced infrastructure management
* Improved scalability and availability
* Cost optimisation (no always-on VMs)
* Faster deployment using containers
* Built-in monitoring and logging
* Better performance using CDN and Front Door

---

## Limitations

* Less control compared to IaaS
* Dependency on Azure platform
* Initial learning curve

---

## Application Details

### Backend

* Node.js (Express)
* REST API (`/api/products`)

### Frontend

* Basic HTML page

---

## Docker Deployment

### Build Image

```bash
docker build -t arnotts-app .
```

### Run Container

```bash
docker run -p 3000:3000 arnotts-app
```

---

## ☁️ Azure Deployment

The application is deployed using:

* Azure App Service (Container-based)
* GitHub Container Registry (Image source)

---

##  Project Structure

```
arnotts-cloud-project/
│
├── app.js
├── package.json
├── Dockerfile
├── .gitignore
├── README.md
│
└── public/
    └── index.html
---

## Conclusion

This project demonstrates how a traditional IaaS-based application can be modernised using containerisation and PaaS services, resulting in improved efficiency, scalability, and cost-effectiveness.

---

## Notes

This project is developed as part of the Cloud Application Management module.

---
