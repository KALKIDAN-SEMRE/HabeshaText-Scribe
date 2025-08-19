import { features } from "node:process";

// Comprehensive Amharic phonetic mapping for English to Amharic conversion
export const amharicMap: { [key: string]: string } = {
  // ሀ-series
  ha: "ሀ",
  hu: "ሁ",
  hi: "ሂ",
  haa: "ሃ",
  he: "ሄ",
  h: "ህ",
  ho: "ሆ",

  // ለ-series
  le: "ለ",
  lu: "ሉ",
  li: "ሊ",
  la: "ላ",
  lee: "ሌ",
  l: "ል",
  lo: "ሎ",
  lwa: "ሏ",

  // ሐ-series (hha)
  hha: "ሐ",
  hhu: "ሑ",
  hhi: "ሒ",
  hhaa: "ሓ",
  hhe: "ሔ",
  hh: "ሕ",
  hho: "ሖ",
  hhwa: "ሗ",

  // መ-series
  me: "መ",
  mu: "ሙ",
  mi: "ሚ",
  ma: "ማ",
  mie: "ሜ",
  m: "ም",
  mo: "ሞ",
  mwa: "ሟ",

  // ሠ-series (se, rare)
  sea: "ሠ",
  sue: "ሡ",
  sie: "ሢ",
  saae: "ሣ",
  see: "ሤ",
  sei: "ሥ",
  soe: "ሦ",
  swae: "ሧ",

  // ረ-series
  re: "ረ",
  ru: "ሩ",
  ri: "ሪ",
  ra: "ራ",
  ree: "ሬ",
  r: "ር",
  ro: "ሮ",
  rwa: "ሯ",

  // ሰ-series
  se: "ሰ",
  su: "ሱ",
  si: "ሲ",
  sa: "ሳ",
  sse: "ሴ",
  s: "ስ",
  so: "ሶ",
  swa: "ሷ",

  // ሸ-series
  she: "ሸ",
  shu: "ሹ",
  shi: "ሺ",
  sha: "ሻ",
  shie: "ሼ",
  sh: "ሽ",
  sho: "ሾ",
  shwa: "ሿ",

  // ቀ-series (also ka)
  qe: "ቀ",
  qu: "ቁ",
  qi: "ቂ",
  qa: "ቃ",
  qee: "ቄ",
  q: "ቅ",
  qo: "ቆ",
  qwa: "ቋ",
  ke: "ቀ",
  kue: "ቁ",
  kii: "ቂ",
  ka: "ቃ",
  kie: "ቄ",
  k: "ቅ",
  koo: "ቆ",
  kwa: "ቋ",

  // በ-series
  bee: "በ",
  bu: "ቡ",
  bi: "ቢ",
  ba: "ባ",
  be: "ቤ",
  b: "ብ",
  bo: "ቦ",
  bwa: "ቧ",

  // ቨ-series (va)
  ve: "ቨ",
  vu: "ቩ",
  vi: "ቪ",
  va: "ቫ",
  vee: "ቬ",
  v: "ቭ",
  vo: "ቮ",
  vwa: "ቯ",

  // ተ-series
  te: "ተ",
  tu: "ቱ",
  ti: "ቲ",
  ta: "ታ",
  tee: "ቴ",
  t: "ት",
  to: "ቶ",
  twa: "ቷ",

  // ቸ-series (cha)
  che: "ቸ",
  chu: "ቹ",
  chi: "ቺ",
  cha: "ቻ",
  chee: "ቼ",
  ch: "ች",
  cho: "ቾ",
  chwa: "ቿ",

  // ኀ-series (xa/ha strong)
  xe: "ኀ",
  xu: "ኁ",
  xi: "ኂ",
  xa: "ኃ",
  xee: "ኄ",
  x: "ኅ",
  xo: "ኆ",
  xwa: "ኋ",

  // ነ-series
  ne: "ነ",
  nu: "ኑ",
  ni: "ኒ",
  na: "ና",
  nee: "ኔ",
  n: "ን",
  no: "ኖ",
  nwa: "ኗ",

  // ኘ-series (gnya)
  gne: "ኘ",
  gnu: "ኙ",
  gni: "ኚ",
  gnaa: "ኛ",
  gnee: "ኜ",
  gnn: "ኝ",
  gno: "ኞ",
  gnwa: "ኟ",

  // አ-series (glottal, a-vowel)
  a: "አ",
  u: "ኡ",
  ii: "ኢ",
  aa: "ኣ",
  e: "እ",
  ee: "ኤ",
  o: "ኦ",

  // ከ-series (ka)
  kae: "ከ",
  ku: "ኩ",
  ki: "ኪ",
  kaae: "ካ",
  kee: "ኬ",
  keh: "ክ",
  ko: "ኮ",
  kwae: "ኳ",

  // ኸ-series (hha)
  hhae: "ኸ",
  hhue: "ኹ",
  hhie: "ኺ",
  hhaae: "ኻ",
  hhee: "ኼ",
  hheh: "ኽ",
  hhoe: "ኾ",
  hhwae: "ዃ",

  // ወ-series
  we: "ወ",
  wu: "ዉ",
  wi: "ዊ",
  wa: "ዋ",
  wea: "ዌ",
  w: "ው",
  wo: "ዎ",

  // ዐ-series (ayn, rarely used)
  aae: "ዐ",
  au: "ዑ",
  ai: "ዒ",
  aaa: "ዓ",
  aee: "ዔ",
  eee: "ዕ",
  ao: "ዖ",

  // ዘ-series
  ze: "ዘ",
  zu: "ዙ",
  zi: "ዚ",
  za: "ዛ",
  zee: "ዜ",
  z: "ዝ",
  zo: "ዞ",
  zwa: "ዟ",

  // ዠ-series (zha)
  zhe: "ዠ",
  zhu: "ዡ",
  zhi: "ዢ",
  zha: "ዣ",
  zhee: "ዤ",
  zh: "ዥ",
  zho: "ዦ",
  zhwa: "ዧ",

  // የ-series
  ye: "የ",
  yu: "ዩ",
  yi: "ዪ",
  ya: "ያ",
  yee: "ዬ",
  y: "ይ",
  yo: "ዮ",

  // ደ-series
  de: "ደ",
  du: "ዱ",
  di: "ዲ",
  da: "ዳ",
  dee: "ዴ",
  d: "ድ",
  do: "ዶ",
  dwa: "ዷ",

  // ጀ-series (ja)
  je: "ጀ",
  ju: "ጁ",
  ji: "ጂ",
  ja: "ጃ",
  jee: "ጄ",
  j: "ጅ",
  jo: "ጆ",
  jwa: "ጇ",

  // ገ-series (ga)
  ge: "ገ",
  gu: "ጉ",
  gi: "ጊ",
  ga: "ጋ",
  gee: "ጌ",
  g: "ግ",
  go: "ጎ",
  gwa: "ጓ",

  // ጠ-series (tta, emphatic t)
  tte: "ጠ",
  ttu: "ጡ",
  tti: "ጢ",
  tta: "ጣ",
  ttee: "ጤ",
  tt: "ጥ",
  tto: "ጦ",
  ttwa: "ጧ",

  // ጨ-series (cha, emphatic)
  chae: "ጨ",
  chue: "ጩ",
  chie: "ጪ",
  chaae: "ጫ",
  chea: "ጬ",
  chh: "ጭ",
  choe: "ጮ",
  chwae: "ጯ",

  // ጰ-series (ppa, emphatic p)
  ppe: "ጰ",
  ppu: "ጱ",
  ppi: "ጲ",
  ppa: "ጳ",
  ppee: "ጴ",
  pp: "ጵ",
  ppo: "ጶ",
  ppwa: "ጷ",

  // ጸ-series (tsa)
  tse: "ጸ",
  tsu: "ጹ",
  tsi: "ጺ",
  tsa: "ጻ",
  tsee: "ጼ",
  ts: "ጽ",
  tso: "ጾ",
  tswa: "ጿ",

  // ፀ-series (ssa, emphatic ts)
  ssa: "ፀ",
  ssu: "ፁ",
  ssi: "ፂ",
  ssaa: "ፃ",
  ssee: "ፄ",
  ss: "ፅ",
  ssoe: "ፆ",

  // ፈ-series
  features: "ፈ",
  fu: "ፉ",
  fi: "ፊ",
  fa: "ፋ",
  fee: "ፌ",
  f: "ፍ",
  fo: "ፎ",
  fwa: "ፏ",

  // ፐ-series
  pe: "ፐ",
  pu: "ፑ",
  pi: "ፒ",
  pa: "ፓ",
  pee: "ፔ",
  p: "ፕ",
  po: "ፖ",
  pwa: "ፗ",

  // Numbers
  "1": "፩",
  "2": "፪",
  "3": "፫",
  "4": "፬",
  "5": "፭",
  "6": "፮",
  "7": "፯",
  "8": "፰",
  "9": "፱",
  "10": "፲",
  "20": "፳",
  "30": "፴",
  "40": "፵",
  "50": "፶",
  "60": "፷",
  "70": "፸",
  "80": "፹",
  "90": "፺",
  "100": "፻",

  // Punctuation
  "::": "።",
  ":": "፣",
  ",": "፣",
  ";": "፤",
  "?": "፧",
  "!": "!",
};

export function convertToAmharic(text: string): string {
  if (!text) return "";

  let result = "";
  let i = 0;

  while (i < text.length) {
    let found = false;

    // Try longer combinations first (4 chars, 3 chars, 2 chars, 1 char)
    for (let len = Math.min(4, text.length - i); len > 0; len--) {
      const substring = text.substring(i, i + len).toLowerCase();

      if (amharicMap[substring]) {
        result += amharicMap[substring];
        i += len;
        found = true;
        break;
      }
    }

    if (!found) {
      // If no mapping found, add the character as is
      result += text[i];
      i++;
    }
  }

  return result;
}

export function splitIntoWords(text: string): string[] {
  return text.split(/\s+/).filter((word) => word.length > 0);
}

export function convertTextToAmharic(text: string): string {
  const words = splitIntoWords(text);
  return words.map((word) => convertToAmharic(word)).join(" ");
}
