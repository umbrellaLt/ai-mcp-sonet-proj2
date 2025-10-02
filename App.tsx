import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    checkMicrophonePermission();
  }, []);

  const checkMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
        setHasPermission(granted);
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app needs access to your microphone to record audio.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
          return true;
        } else {
          Alert.alert('Permission Denied', 'Microphone permission is required to use this feature.');
          return false;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const toggleMicrophone = async () => {
    if (!hasPermission) {
      const permissionGranted = await requestMicrophonePermission();
      if (!permissionGranted) {
        return;
      }
    }

    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      Alert.alert('Microphone', 'Microphone turned OFF');
    } else {
      // Start recording
      setIsRecording(true);
      Alert.alert('Microphone', 'Microphone turned ON');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Microphone Toggle App</Text>
        <Text style={styles.subtitle}>
          Tap the button below to turn your microphone on or off
        </Text>
        
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Microphone Status:</Text>
          <Text style={[styles.statusText, isRecording ? styles.statusOn : styles.statusOff]}>
            {isRecording ? 'ON' : 'OFF'}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, isRecording ? styles.buttonOn : styles.buttonOff]}
          onPress={toggleMicrophone}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            {isRecording ? '🎤 Turn OFF' : '🔇 Turn ON'}
          </Text>
        </TouchableOpacity>

        <View style={styles.permissionContainer}>
          <Text style={styles.permissionLabel}>Permission Status:</Text>
          <Text style={[styles.permissionText, hasPermission ? styles.permissionGranted : styles.permissionDenied]}>
            {hasPermission ? 'Granted' : 'Not Granted'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 40,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 200,
  },
  statusLabel: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusOn: {
    color: '#28a745',
  },
  statusOff: {
    color: '#dc3545',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 30,
  },
  buttonOn: {
    backgroundColor: '#dc3545',
  },
  buttonOff: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  permissionContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    minWidth: 200,
  },
  permissionLabel: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
  },
  permissionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  permissionGranted: {
    color: '#28a745',
  },
  permissionDenied: {
    color: '#dc3545',
  },
});

export default App;