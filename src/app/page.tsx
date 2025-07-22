import FlavorCard from './components/flavor-card';
import { flavors } from '@/data/flavors';

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="headline">Welcome to Taggerz Hub!</h1>
        <p>
          Explore our mind-blowing collection of gum flavors. Each piece is a burst
          of adventure waiting to be unleashed.
        </p>
      </div>
      <div id="flavor-grid" className="grid">
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </main>
  );
}
