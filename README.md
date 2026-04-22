## Modernising Arnotts Digital Commerce Platform: A Hybrid PaaS + SaaS Architecture Strategy (Group E)

## Overview

Modernise Arnotts ecommerce platform using a hybrid PaaS + SaaS headless architecture to enable faster innovation, better performance and greater flexibility.

The aim is to improve scalability, modularity, reduce infrastructure management, and optimise cost efficiency.

## Project Objectives

* Analyse existing architecture
* Design a cloud strategy
* Implement a working cloud deployment
* Compare SaaS vs PaaS models
* Demonstrate containerised deployment

## Technologies Used

* Microsoft Azure App Service (Linux, Docker-based)
* Docker (Containerisation)
* Node.js (Backend Application)
* GitHub (Version Control)
* GitHub Container Registry (Image Hosting)
* Azure Blob Storage (Static Content)
* Azure Monitor & App insights (Logging & Monitoring)
* Azure SQL (only for this demo)
* Azure Key vault (Optional)
* Azure Entra ID (Optional))
* Azure CDN (Content Delivery - Optional)
* Azure Front Door (Global Routing - Optional)

## Strategy

We assume the existing system is hosted using salesforce Demandware (SaaS). The strategy is to retain the existing SaaS commerce engine while introducing a modern, flexible frontend layer using PaaS services.

### Current Challenges:

* Heavy dependency on Salesforce Commerce Cloud frontend limitations
* Limited UI/UX innovation capability
* Slow marketing and feature rollout cycles
* Restricted performance optimisation control
* Difficulty adopting modern headless architecture

### Proposed Solution:

* Hybrid PaaS + SaaS headless architecture is implemented
* Backend retained using Salesforce Commerce Cloud for core commerce functions
* Frontend built on Microsoft Azure App Service for flexibility and control
* Frontend and backend communicate via APIs (decoupled system)
* Azure services improve performance, storage, and monitoring
* Docker and CI/CD enable automated and consistent deployment
* Result: scalable, modular, and cloud-native architecture

## Benefits of Proposed Solution

* Improved website performance and responsiveness
* Full control over frontend UI/UX design
* Faster deployment of updates and campaigns
* High scalability during peak traffic periods
* Easy integration with AI and personalization tools
* Reduced dependency on vendor constraints

## Limitations

* Increased Architectural Complexity
* Integration Overhead
* Higher Development and Maintenance Effort
* Dependency on Multiple Cloud Services
* Cost Considerations
* Performance Dependency on API Layer
* Security Complexity


## Application Details

### Arnotts Website

The below is the link to the website where the customers could browse and shop. 

Website Link: https://arnotts-webapp-d5ejexd5fqcthveb.switzerlandnorth-01.azurewebsites.net

### Backend

* Node.js (Express)
* REST API (`/api/products`)

### Frontend

* Basic HTML page


## Docker Deployment

### Build Image

```bash
docker build -t arnotts-app .
```

### Run Container

```bash
docker run -p 8080:8080 arnotts-app
```

## ☁️ Azure Deployment

The application is deployed using:

* Azure App Service (Container-based)
* GitHub Container Registry (Image source)


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
    └── cart.html
    └── category.html
    └── product.html
    └── script.js
    └── style.css

```

## Conclusion

* Modernises Arnotts using hybrid cloud approach
* Retains stable SaaS backend while improving frontend flexibility
* Improves scalability, performance, and deployment speed
* Reduces vendor frontend dependency
* Enables future integration of AI and omnichannel features
* Provides a future-ready headless commerce solution
---

## Notes

This project is developed as part of the Cloud Application Management module.

---
