import { useState, useEffect, useRef } from 'react';

export default function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  
  // Cleanup audio context universally on dismount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(e => console.error(e));
      }
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        // Fade out smoothly
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
            audioCtxRef.current.suspend();
          }
          setIsPlaying(false);
        }, 800);
      } else {
        setIsPlaying(false);
      }
    } else {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
        
        // Soft Cosmic Wind Setup (Zero tonal ringing)
        gainNodeRef.current = audioCtxRef.current.createGain();
        gainNodeRef.current.gain.value = 0;
        
        // 1. Generate 2 seconds of White Noise in a buffer
        const bufferSize = audioCtxRef.current.sampleRate * 2;
        const buffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            // Smooth pink-ish distribution bias to avoid harsh highs
            data[i] = (Math.random() * 2 - 1) * 0.5; 
        }

        const noiseSource = audioCtxRef.current.createBufferSource();
        noiseSource.buffer = buffer;
        noiseSource.loop = true;

        // 2. Heavily filter it to turn "static" into "soft wind"
        const filter = audioCtxRef.current.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 250; // Very soft, low rumble
        filter.Q.value = 0.2;

        // 3. Slowly modulate the filter to simulate a breathing breeze
        const lfo = audioCtxRef.current.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.03; // Extremely slow (33 seconds)
        const lfoGain = audioCtxRef.current.createGain();
        lfoGain.gain.value = 100; // Sweep filter cutoffs
        
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        // 4. Connect graph
        noiseSource.connect(filter);
        filter.connect(gainNodeRef.current);
        gainNodeRef.current.connect(audioCtxRef.current.destination);

        noiseSource.start();
        lfo.start();

        // Store refs to stop them later
        osc1Ref.current = noiseSource;
        osc2Ref.current = lfo;
      }
      
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      
      // Fade in smoothly to very low volume (Wind doesn't need to be loud)
      gainNodeRef.current.gain.setTargetAtTime(0.15, audioCtxRef.current.currentTime, 3); 
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggleAudio };
}
