import { Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Article } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import logoImage from "@assets/d13c5e45-50dd-4bbb-8abb-7124b279ccfb_1760337271615.jpg";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const { data: searchResults, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles/search", { q: debouncedQuery }],
    enabled: debouncedQuery.length > 2,
  });

  const handleSearch = () => {
    setDebouncedQuery(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md animate-in slide-in-from-top duration-500">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Callatis Press" 
              className="h-12 w-auto object-contain"
              data-testid="img-logo"
            />
          </div>

          <div className="flex items-center gap-2">
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-primary-foreground hover:bg-white/10"
                  data-testid="button-search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
                <DialogHeader>
                  <DialogTitle>Caută știri</DialogTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Introduceți cel puțin 3 caractere pentru a căuta
                  </p>
                </DialogHeader>
                <div className="flex gap-2 pt-4">
                  <Input
                    placeholder="Caută articole..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                    data-testid="input-search"
                  />
                  <Button onClick={handleSearch} data-testid="button-search-submit">
                    <Search className="h-4 w-4 mr-2" />
                    Caută
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto mt-4">
                  {isLoading && (
                    <p className="text-center text-muted-foreground py-8">Se caută...</p>
                  )}
                  
                  {!isLoading && debouncedQuery.length > 2 && searchResults?.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      Nu au fost găsite rezultate pentru "{debouncedQuery}"
                    </p>
                  )}

                  {!isLoading && searchResults && searchResults.length > 0 && (
                    <div className="space-y-3">
                      {searchResults.map(article => (
                        <Card key={article.id} className="cursor-pointer hover-elevate">
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <img 
                                src={article.imageUrl} 
                                alt={article.title}
                                className="w-20 h-20 object-cover rounded-md"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                                  {article.title}
                                </h4>
                                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                                  <Calendar className="h-3 w-3" />
                                  <time>
                                    {format(new Date(article.publishedAt), "d MMM yyyy", { locale: ro })}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {debouncedQuery.length <= 2 && debouncedQuery.length > 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      Introduceți cel puțin 3 caractere pentru a căuta
                    </p>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              size="sm" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5"
              data-testid="button-donate"
            >
              <Heart className="h-4 w-4 fill-current" />
              Donează
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
