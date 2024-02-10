import {
  Audio,
  AudioMode,
  InterruptionModeAndroid,
  InterruptionModeIOS,
} from "expo-av";

const handleConfigureAudio = async () => {
  await Audio.requestPermissionsAsync();

  const audioModeConfig: Partial<AudioMode> = {
    allowsRecordingIOS: true,
    interruptionModeIOS: InterruptionModeIOS.DoNotMix,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
    playThroughEarpieceAndroid: true,
  };

  await Audio.setAudioModeAsync(audioModeConfig);
};

export default handleConfigureAudio;
