## 🚗 Luxro – Indian Car Rental Web Application

Luxro is a modern, full-featured Indian car rental web application built using Angular, TypeScript, Tailwind CSS, and Firebase SDK. The platform delivers a seamless car rental experience with real-time data synchronization, secure authentication, and scalable frontend architecture.

This repository contains the complete frontend application integrated directly with Firebase SDK for authentication and real-time database operations — without using REST APIs.

---

## 📌 Project Overview

Luxro is designed to simplify car rentals across India by providing:

A user-friendly booking experience

Secure authentication

Real-time data handling

Host onboarding for car owners

Informational and career pages

Wishlist and checkout flow with confirmation

The application follows modern Angular best practices with a scalable and modular architecture.

---

## ✨ Features
User & Content Features

Multiple About and Blog pages

Career section

Host onboarding (Become a Host)

Informational and marketing pages

Core Rental Features

Car listing section

Wishlist management

Checkout with payment processing

Rental success confirmation page

Authentication & Data

Firebase Authentication

Automatic auth state management

Secure user session handling

Firebase Realtime Database integration

Real-time data synchronization

---

## 🧰 Tech Stack

TypeScript - Type-safe development
Angular -	Frontend framework
HTML	- Markup
Tailwind CSS	- Styling
Firebase SDK	- Authentication & Realtime Database

---

## 🏗 Project Architecture

Luxro follows a modular Angular architecture:

Components handle UI

Services manage Firebase operations

Guards protect authenticated routes

Models ensure type safety

Routing Module handles navigation

Firebase SDK communicates directly with Angular services, enabling real-time updates without REST API layers.

---

## 🔥 Firebase Configuration

Luxro uses Firebase SDK instead of REST APIs because it provides:

Automatic authentication state management

Enhanced security rules

Offline data persistence

Automatic token refresh

Real-time data synchronization

Reduced boilerplate API handling

Firebase Services Used

Firebase Authentication

Firebase Realtime Database

The SDK handles:

Session restoration

Secure token handling

Live UI updates on database changes

---

## 🚀 Key Features Explained
### 🔐 Authentication

Firebase email/password login

Auth state auto-sync across app

Route protection via Angular Guards

### 📡 Real-time Database

Live car listings

Wishlist updates in real-time

Booking and checkout persistence

### ❤️ Wishlist

Save favorite cars

Auto sync across sessions

### 💳 Checkout & Confirmation

Booking summary

Payment integration

Successful rental confirmation page

### 🚘 Host Onboarding

Become a host flow

Car listing submission
