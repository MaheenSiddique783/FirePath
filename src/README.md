# FirePath App (Frontend/Mobile)

Welcome to the `src` directory! This folder contains the frontend code for **FirePath**, built using [Expo](https://expo.dev/) and React Native.

## 🚀 Getting Started for Developers

If you've just cloned the repository, follow these steps to get the app running on your local machine.

### Prerequisites
1. **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).
2. **Expo Go App**: Download the **Expo Go** app on your physical iOS or Android device. Alternatively, you can set up an iOS Simulator (Mac) or Android Emulator (Windows/Mac/Linux).

### Installation

1. Open your terminal and navigate to this `src` folder:
   ```bash
   cd src
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the Expo development server:
   ```bash
   npx expo start
   ```
2. A QR code will appear in your terminal.
3. **On your phone**: Open the **Expo Go** app and scan the QR code. (For iOS, you can use the default Camera app to scan it).
   *Note: Your phone and your computer must be connected to the same WiFi network.*

### Running over the Internet (Tunneling)
If you need to share the live app with a teammate who isn't on your WiFi, you can start a tunnel:
```bash
npx expo start --tunnel
```
*(If prompted, press `y` to install `@expo/ngrok`).* Send the new QR code to your teammate.

## 📁 Folder Structure
- `/components` - Reusable UI components (like the Map, BottomSheet, etc.)
- `/assets` - Images, icons, and fonts
- `App.tsx` - The main entry point of the application

## 🛠 Next Steps (MVP 1)
- Fix mobile UI/UX rendering (BottomSheet positioning, safe areas).
- Integrate the Map rendering logic.
- Hook up the data pipeline for live fire danger ratings.
