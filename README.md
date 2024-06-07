# Quick Start Guide

Welcome to your new project! This guide will help you get started with setting up your environment and running the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or Yarn (for managing packages)

## Setup

1. **Clone the repository:**
   ```bash
   https://github.com/alex1092/crypto-tracker
   cd crypto-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
  
   ```

3. **Set up environment variables:**
   - Copy the `.env.example` file to `.env.local` in the root directory.
   - Update the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Supabase project details.

4. **Run the development server:**
   ```bash
   npm run dev

   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Information

- **Supabase Integration:**
  This project uses Supabase for backend services. Ensure your Supabase project details are correctly set in the `.env.local` file.

- **Building for Production:**
  To build the application for production, run:
  ```bash
  npm run build

  ```

- **Starting Production Server:**
  After building the project, start your production server using:
  ```bash
  npm start

  ```

