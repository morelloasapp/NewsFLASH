import { useState } from "react";
import { Heart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoUrl from "@assets/d13c5e45-50dd-4bbb-8abb-7124b279ccfb_1762085452198.jpeg";
import { siteConfig } from "@shared/config";

interface HeaderProps {
  categories: { id: string; name: string; slug: string }[];
  onCategoryClick?: (slug: string) => void;
}

export default function Header({ categories, onCategoryClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-primary/85 border-b border-primary-border shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <img 
              src={logoUrl} 
              alt={siteConfig.siteName}
              className="h-12 w-auto object-contain"
              data-testid="img-logo"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick?.(category.slug)}
                className="text-primary-foreground font-medium text-sm uppercase tracking-wide hover-elevate px-3 py-2 rounded-md transition-all"
                data-testid={`link-category-${category.slug}`}
              >
                {category.name}
              </button>
            ))}
            
            <div className="flex items-center gap-3">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Caută știri..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    data-testid="input-search"
                    autoFocus
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-primary-foreground"
                    data-testid="button-close-search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-primary-foreground"
                  data-testid="button-search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}

              <a href={siteConfig.donateLink}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-yellow-400 gap-1.5"
                  data-testid="button-donate"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">Donează</span>
                </Button>
              </a>
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <a href={siteConfig.donateLink}>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground"
                data-testid="button-donate-mobile-header"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </a>
            
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <form onSubmit={handleSearch} className="mb-4">
              <Input
                type="search"
                placeholder="Caută știri..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                data-testid="input-search-mobile"
              />
            </form>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryClick?.(category.slug);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-primary-foreground font-medium py-3 px-4 hover-elevate rounded-md uppercase tracking-wide"
                data-testid={`link-category-mobile-${category.slug}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
