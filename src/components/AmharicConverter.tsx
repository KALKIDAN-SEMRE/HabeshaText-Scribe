import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { convertTextToAmharic } from "@/lib/amharicMapping";
import { Copy, RotateCcw, Languages, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AmharicConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const handleConvert = useCallback(() => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some text to convert",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);

    // Add a small delay to show the conversion animation
    setTimeout(() => {
      const converted = convertTextToAmharic(inputText);
      setOutputText(converted);
      setIsConverting(false);

      toast({
        title: "Conversion Complete!",
        description: "Your text has been converted to Amharic script",
      });
    }, 300);
  }, [inputText, toast]);

  const handleCopy = useCallback(
    async (text: string, type: string) => {
      try {
        await navigator.clipboard.writeText(text);
        toast({
          title: "Copied!",
          description: `${type} text copied to clipboard`,
        });
      } catch (err) {
        toast({
          title: "Copy Failed",
          description: "Could not copy text to clipboard",
          variant: "destructive",
        });
      }
    },
    [toast]
  );

  const handleClear = useCallback(() => {
    setInputText("");
    setOutputText("");
    toast({
      title: "Cleared",
      description: "All text has been cleared",
    });
  }, [toast]);

  const handleRealTimeConvert = useCallback((text: string) => {
    setInputText(text);
    if (text.trim()) {
      const converted = convertTextToAmharic(text);
      setOutputText(converted);
    } else {
      setOutputText("");
    }
  }, []);

  const handleTranslate = useCallback(async () => {
    if (!outputText.trim()) {
      toast({
        title: "No text to translate",
        description: "Please convert some text to Amharic first.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);

    try {
      // Use the unofficial free Google Translate API endpoint
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=am&tl=en&dt=t&q=${encodeURIComponent(
          outputText
        )}`
      );

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.status}`);
      }

      const data = await response.json();

      // Translation is in data[0][0][0]
      const translatedText = data[0][0][0];

      if (translatedText) {
        toast({
          title: "Translation successful!",
          description: `Translation: ${translatedText}`,
        });
      } else {
        throw new Error("No translation returned");
      }
    } catch (error) {
      console.error("Translation error:", error);
      toast({
        title: "Translation failed",
        description:
          "Unable to translate the text. The translation service may be unavailable.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  }, [outputText, toast]);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 animate-float">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-primary to-primary-glow glow-primary">
            <Languages className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-glow to-accent-glow bg-clip-text text-transparent">
            HabeshaText Scribe
          </h1>
          <div className="p-3 rounded-2xl bg-gradient-to-r from-accent to-accent-glow glow-accent">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform English phonetic text into beautiful Amharic script
          instantly
        </p>
      </div>

      {/* Converter Interface */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="glass-card p-6 space-y-6 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary-glow animate-pulse"></div>
            <h2 className="text-2xl font-semibold">English Input</h2>
          </div>

          <Textarea
            placeholder="Type in English... (e.g., selam, merhaba, etc.)"
            value={inputText}
            onChange={(e) => handleRealTimeConvert(e.target.value)}
            className="min-h-[200px] text-lg glass border-card-border focus:border-primary-glow resize-none"
          />

          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={handleConvert}
              variant="primary"
              size="lg"
              disabled={isConverting}
              className="flex-1 min-w-[140px]"
            >
              {isConverting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                  Converting...
                </>
              ) : (
                <>
                  <Languages className="w-4 h-4" />
                  Convert
                </>
              )}
            </Button>

            <Button
              onClick={() => handleCopy(inputText, "Input")}
              variant="glass"
              size="lg"
              disabled={!inputText}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Output Section */}
        <Card className="glass-card p-6 space-y-6 animate-float-delayed">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent-glow animate-pulse"></div>
            <h2 className="text-2xl font-semibold">Amharic Output</h2>
          </div>

          <div className="min-h-[200px] p-4 rounded-xl glass border border-card-border">
            {outputText ? (
              <p className="text-2xl leading-relaxed font-amharic text-foreground">
                {outputText}
              </p>
            ) : (
              <p className="text-muted-foreground text-lg">
                Converted Amharic text will appear here...
              </p>
            )}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={() => handleCopy(outputText, "Amharic")}
              variant="accent"
              size="lg"
              disabled={!outputText}
              className="flex-1 min-w-[120px]"
            >
              <Copy className="w-4 h-4" />
              Copy
            </Button>

            <Button
              onClick={handleTranslate}
              variant="secondary"
              size="lg"
              disabled={isTranslating || !outputText.trim()}
              className="flex-1 min-w-[120px]"
            >
              {isTranslating ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Translating...
                </>
              ) : (
                <>
                  <Languages className="h-4 w-4" />
                  Translate to English
                </>
              )}
            </Button>

            <Button onClick={handleClear} variant="outline" size="lg">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Quick Examples */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-secondary-glow" />
          Try These Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { english: "selam", amharic: "ሰላም", meaning: "Hello/Peace" },
            { english: "merhaba", amharic: "መርሃባ", meaning: "Welcome" },
            {
              english: "ameseginalehu",
              amharic: "አመሰግናለሁ",
              meaning: "Thank you",
            },
            { english: "hager", amharic: "ሀገር", meaning: "Ethiopia" },
            {
              english: "ena dehina neh",
              amharic: "እና ደሃና ነህ",
              meaning: "And how are you?",
            },
            { english: "beteseb", amharic: "ቤተሰብ", meaning: "Family" },
          ].map((example, index) => (
            <button
              key={index}
              onClick={() => handleRealTimeConvert(example.english)}
              className="p-4 rounded-xl glass hover:bg-card-glass transition-all text-left border border-card-border hover:border-primary-glow group"
            >
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {example.meaning}
                </div>
                <div className="font-mono text-primary-glow">
                  {example.english}
                </div>
                <div className="text-xl font-amharic text-accent-glow group-hover:scale-105 transition-transform">
                  {example.amharic}
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AmharicConverter;
