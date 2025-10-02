# Microphone Toggle App

A React Native mobile application for Android that allows users to toggle their microphone on and off with a simple button interface.

## Features

- **Microphone Toggle**: Simple button to turn microphone on/off
- **Permission Handling**: Automatic request for microphone permissions on Android
- **Bootstrap-inspired Design**: Clean, modern UI with Bootstrap-style components
- **Status Indicators**: Visual feedback showing microphone and permission status
- **Android Optimized**: Specifically designed for Android devices

## Screenshots

The app features a clean, user-friendly interface with:
- Large, prominent toggle button
- Clear status indicators
- Permission status display
- Bootstrap-inspired styling

## Installation

### Prerequisites

- Node.js (v20.19.4 or higher)
- React Native development environment
- Android Studio and Android SDK
- Android device or emulator

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-mcp-sonet-proj2
```

2. Install dependencies:
```bash
npm install
```

3. For Android development, ensure you have:
   - Android Studio installed
   - Android SDK configured
   - Android device connected or emulator running

### Running the App

#### Android
```bash
npm run android
```

Or using React Native CLI:
```bash
npx react-native run-android
```

## Permissions

The app requires the following Android permissions:
- `RECORD_AUDIO`: To access the device microphone
- `INTERNET`: For React Native development server
- `WRITE_EXTERNAL_STORAGE`: For audio recording functionality

These permissions are automatically requested when the user first attempts to use the microphone toggle feature.

## Project Structure

```
├── App.tsx                 # Main application component
├── index.js               # App entry point
├── package.json           # Dependencies and scripts
├── android/               # Android-specific configuration
│   ├── app/
│   │   ├── build.gradle   # Android app build configuration
│   │   └── src/main/
│   │       └── AndroidManifest.xml  # Android permissions and app config
│   └── build.gradle       # Android project build configuration
├── metro.config.js        # Metro bundler configuration
└── babel.config.js        # Babel configuration
```

## Key Components

### App.tsx
The main component that handles:
- Microphone permission checking and requesting
- Toggle functionality
- UI state management
- Bootstrap-inspired styling

### Android Configuration
- **AndroidManifest.xml**: Defines required permissions
- **build.gradle**: Android build configuration
- Supports Android API level 21+ (Android 5.0)

## Styling

The app uses Bootstrap-inspired design principles:
- Clean, modern interface
- Consistent color scheme (success green, danger red)
- Card-based layouts with shadows
- Responsive button design
- Clear typography hierarchy

## Development

### Available Scripts

- `npm start`: Start the React Native development server
- `npm run android`: Run on Android device/emulator
- `npm run ios`: Run on iOS device/simulator (iOS support can be added)
- `npm test`: Run tests
- `npm run lint`: Run ESLint

### Adding Features

The app is structured to easily add new features:
- Audio recording functionality
- Audio playback
- Settings screen
- Multiple microphone sources
- Audio visualization

## Troubleshooting

### Common Issues

1. **Permission Denied**: Ensure the app has microphone permissions in device settings
2. **Build Errors**: Check that Android SDK and build tools are properly installed
3. **Metro Bundler Issues**: Try `npx react-native start --reset-cache`

### Android Specific

- Ensure USB debugging is enabled on your device
- Check that your device is properly connected with `adb devices`
- For emulator issues, ensure the AVD has audio recording enabled

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on Android device/emulator
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Future Enhancements

- iOS support
- Audio recording and playback
- Audio quality settings
- Background recording capability
- Audio file management
- Cloud storage integration