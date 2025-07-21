import { friends } from '@/data/friends.tsx';

interface FriendNetworkProps {
    id: number;
    name: string;
    full_name: string;
    description: string;
}

export function FriendNetwork({ friends }: FriendNetworkProps) {
    const handleMessageFriend = (name: string) => {
        console.log(`Messaging ${name}`);
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">Friend Networks</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {friends.map(friend => (
                    <div
                        key={friend.id}
                        className="group relative mx-auto w-24 h-24 rounded-full border-2 border-cyber-blue transition-all duration-500 ease-in-out overflow-hidden"
                    >
                        <img
                            src={friend.profile_photo || `https://avatars.dicebear.com/api/avataaars/${friend.name}.svg`}
                            alt={`${friend.name}'s profile`}
                            className="w-full h-full object-cover"
                            onError={e => {
                                (e.target as HTMLImageElement).src = `https://avatars.dicebear.com/api/avataaars/${friend.name}.svg`;
                            }}
                        />
                        <div className="absolute inset-0 bg-cyberblue bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
                        <button
                            onClick={() => handleMessageFriend(friend.name)}
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                        </button>
                        <div className="mt-2 text-center">
                            <h3 className="font-bold text-lg">{friend.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
