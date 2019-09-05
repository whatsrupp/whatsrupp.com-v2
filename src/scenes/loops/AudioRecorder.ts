declare var MediaRecorder: any;

interface IAudioRecorderReturn {
  start: () => void;
  stop: (onAudioUrl: IStopParam) => void;
}

interface IStopParam {
  onAudioUrl: (audioUrl: string) => void;
}

const AudioRecorder: any = async () => {
  const audioStream = await navigator.mediaDevices.getUserMedia({
    audio: true
  });
  const audioChunks: any = [];

  const mediaRecorder = new MediaRecorder(audioStream);

  mediaRecorder.addEventListener("dataavailable", (event: { data: any }) => {
    audioChunks.push(event.data);
  });

  const start = () => {
    mediaRecorder.start();
  };

  const stop: any = (onAudioUrl: any) => {
    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      onAudioUrl(audioUrl);
    });
    mediaRecorder.stop();
  };

  return {
    start,
    stop
  };
};

export default AudioRecorder;
