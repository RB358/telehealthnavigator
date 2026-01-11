import { Button } from "@/components/ui/button";
import { X, Scale } from "lucide-react";
import type { Provider } from "@shared/schema";

interface ComparisonBarProps {
  selectedProviders: Provider[];
  onRemove: (id: string) => void;
  onCompare: () => void;
  onClear: () => void;
}

export function ComparisonBar({ 
  selectedProviders, 
  onRemove, 
  onCompare,
  onClear 
}: ComparisonBarProps) {
  if (selectedProviders.length === 0) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg p-3 sm:p-4"
      data-testid="comparison-bar"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Scale className="h-5 w-5 text-primary hidden sm:block" />
          <span className="text-sm font-medium hidden sm:inline">
            Compare providers:
          </span>
          
          <div className="flex gap-2 flex-1 sm:flex-none">
            {selectedProviders.map((provider) => (
              <div 
                key={provider.id}
                className="flex items-center gap-2 bg-primary/10 rounded-md px-3 py-1.5 flex-1 sm:flex-none"
                data-testid={`comparison-item-${provider.id}`}
              >
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {provider.name.charAt(0)}
                </div>
                <span className="text-sm font-medium truncate max-w-[80px] sm:max-w-[120px]">
                  {provider.name}
                </span>
                <button
                  onClick={() => onRemove(provider.id)}
                  className="hover-elevate rounded-full p-0.5"
                  data-testid={`button-remove-comparison-${provider.id}`}
                >
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              </div>
            ))}
            
            {selectedProviders.length < 2 && (
              <div className="flex items-center justify-center border-2 border-dashed border-muted rounded-md px-3 py-1.5 flex-1 sm:flex-none sm:min-w-[140px]">
                <span className="text-xs text-muted-foreground">
                  Select {2 - selectedProviders.length} more
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClear}
            className="flex-1 sm:flex-none"
            data-testid="button-clear-comparison"
          >
            Clear
          </Button>
          <Button 
            size="sm" 
            onClick={onCompare}
            disabled={selectedProviders.length < 2}
            className="flex-1 sm:flex-none gap-2"
            data-testid="button-compare"
          >
            <Scale className="h-4 w-4" />
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
}
