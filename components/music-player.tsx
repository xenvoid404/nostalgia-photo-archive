'use client';
import Rract, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

type Song = {
    id: string;
    title: string;
    artist: string;
    url: string;
};

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const songs: Song[] = [
        {
            id: '1',
            title: 'Stay Tonight Slowed - Reggae',
            artist: 'Chung Ha',
            url: '/music/stay_to_night.mp3'
        }
    ];

    useEffect(() => {
        if (!currentSong && songs.length > 0) {
            setCurrentSong(songs[0]);
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.error('Playback failed:', error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const handleSongChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSong = songs.find(song => song.id === e.target.value);
        if (selectedSong) {
            setCurrentSong(selectedSong);
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume > 0 && isMuted) {
            setIsMuted(false);
        }
    };

    return (
        <div className="container mx-auto px-4 mt-8 mb-8">
            <div className="bg-gradient-to-r from-cyber-cosmic-light/20 to-cyber-nebula-dark/20 backdrop-blur-lg rounded-xl p-4 shadow-lg shadow-cyber-purple/30 border border-cyber-blue">
                <h2 className="text-2xl font-bold text-gradient mb-4">Memory Soundtrack</h2>

                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={togglePlay}
                            className="p-3 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full transition-all hover:scale-105 shadow-md"
                        >
                            {isPlaying ? (
                                <Pause className="text-white h-5 w-5" strokeWidth={2.5} />
                            ) : (
                                <Play className="text-white h-5 w-5" strokeWidth={2.5} />
                            )}
                        </button>

                        <div className="flex-1 min-w-[200px]">
                            <select
                                onChange={handleSongChange}
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
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <button onClick={toggleMute} className="text-cyber-blue hover:text-cyber-pink transition-colors">
                                {isMuted ? <VolumeX className="h-5 w-5" strokeWidth={2} /> : <Volume2 className="h-5 w-5" strokeWidth={2} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
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
        </div>
    );
}
