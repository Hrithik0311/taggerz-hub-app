import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Taggerz Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
