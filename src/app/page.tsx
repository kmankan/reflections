import { Conversation } from './components/Conversation';
import { ElevenLabsWidget } from './components/ElevenLabsWidget';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Reflections
        </h1>
        <Conversation />
      </div>
    </main>
  );
}
