import { Audio } from "expo-av";

const handleConfigureAudio = async () => {
  await Audio.requestPermissionsAsync();

  const audioModeConfig = {
    staysActiveInBackground: true,
    shouldDuckAndroid: false,
    playThroughEarpieceAndroid: false,
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
  };

  await Audio.setAudioModeAsync(audioModeConfig);
};

export default handleConfigureAudio;
