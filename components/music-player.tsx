'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

type Song = {
    id: string;
    title: string;
    artist: string;
    url: string;
};

const songs: Song[] = [
    {
        id: '1',
        title: 'Stay Tonight Slowed - Reggae',
        artist: 'Chung Ha',
        url: '/music/stay_to_night.mp3'
    }
];

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!currentSong && songs.length > 0) {
            setCurrentSong(songs[0]);
        }
    }, [currentSong]);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.error('Playback failed:', error);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    return (
        <section className="container mx-auto px-4 my-8">
            <div className="bg-gradient-to-r from-cyber-cosmic-light/20 to-cyber-nebula-dark/20 backdrop-blur-lg rounded-xl p-6 shadow-lg shadow-cyber-purple/30 border border-cyber-blue">
                <h2 className="text-2xl font-bold text-gradient mb-6">Memory Soundtrack</h2>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-3 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full hover:scale-105 shadow-md"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <Pause className="text-white h-5 w-5" strokeWidth={2.5} />
                            ) : (
                                <Play className="text-white h-5 w-5" strokeWidth={2.5} />
                            )}
                        </button>

                        <select
                            onChange={e => {
                                const selectedSong = songs.find(song => song.id === e.target.value);
                                if (selectedSong) {
                                    setCurrentSong(selectedSong);
                                    setIsPlaying(true);
                                }
                            }}
                            value={currentSong?.id || ''}
                            className="w-full bg-gray-900/50 text-cyber-blue border border-cyber-blue rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                        >
                            {songs.map(song => (
                                <option key={song.id} value={song.id}>
                                    {song.title} - {song.artist}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="text-cyber-blue hover:text-cyber-pink transition-colors"
                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                            >
                                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={e => {
                                    const newVolume = parseFloat(e.target.value);
                                    setVolume(newVolume);
                                    if (newVolume > 0 && isMuted) setIsMuted(false);
                                }}
                                className="w-24 md:w-32 accent-cyber-blue"
                            />
                        </div>

                        {currentSong && (
                            <div className="hidden md:block text-sm text-cyber-blue">
                                Now {isPlaying ? 'playing' : 'paused'}: <span className="font-medium">{currentSong.title}</span>
                            </div>
                        )}
                    </div>
                </div>

                <audio ref={audioRef} src={currentSong?.url} loop onEnded={() => setIsPlaying(false)} />
            </div>
        </section>
    );
}
