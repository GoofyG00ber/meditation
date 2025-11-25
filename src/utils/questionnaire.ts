// Questionnaire configuration and totem animal logic

export interface QuestionOption {
  text: string
  points: number
}

export interface Question {
  id: number
  text: string
  options: QuestionOption[]
  type: 'single' | 'open' // open for questions 10-11
}

export interface TotemAnimal {
  name: string
  emoji: string
  subtitle: string
  traits: string
  stressReaction: string
  description: string
  message: string
  growth: string
  evolution: string
}

export interface QuestionnaireResult {
  answers: Record<number, number | string> // question id -> points or text
  totalPoints: number
  totemAnimal: string
  timestamp: number
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Milyen gyakran érzed magad feszültnek vagy idegesnek?',
    type: 'single',
    options: [
      { text: 'Soha', points: 1 },
      { text: 'Ritkán', points: 2 },
      { text: 'Néha', points: 3 },
      { text: 'Gyakran', points: 4 },
      { text: 'Mindig', points: 5 }
    ]
  },
  {
    id: 2,
    text: 'Milyen gyakran tapasztalsz alvási nehézségeket vagy fáradtságot stressz miatt?',
    type: 'single',
    options: [
      { text: 'Soha', points: 1 },
      { text: 'Ritkán', points: 2 },
      { text: 'Néha', points: 3 },
      { text: 'Gyakran', points: 4 },
      { text: 'Mindig', points: 5 }
    ]
  },
  {
    id: 3,
    text: 'Hogyan reagálsz, ha valami nem a terveid szerint alakul?',
    type: 'single',
    options: [
      { text: 'Nyugodt maradok', points: 1 },
      { text: 'Ideges leszek, de gyorsan túllépek rajta', points: 2 },
      { text: 'Rágódom rajta napokig', points: 4 },
      { text: 'Kiborulok vagy bezárkózom', points: 5 }
    ]
  },
  {
    id: 4,
    text: 'Amikor stresszes vagy, mit teszel először?',
    type: 'single',
    options: [
      { text: 'Cselekszem azonnal', points: 3 },
      { text: 'Beszélek valakivel róla', points: 2 },
      { text: 'Visszavonulok és gondolkodom', points: 3 },
      { text: 'Elterelem a figyelmem (pl. zene, sorozat)', points: 4 }
    ]
  },
  {
    id: 5,
    text: 'Milyen mértékben tudod elfogadni a dolgokat, amiket nem tudsz befolyásolni?',
    type: 'single',
    options: [
      { text: 'Nagyon jól', points: 1 },
      { text: 'Jól', points: 2 },
      { text: 'Közepesen', points: 3 },
      { text: 'Nehezen', points: 5 }
    ]
  },
  {
    id: 6,
    text: 'Ha hibázol, hogyan reagálsz?',
    type: 'single',
    options: [
      { text: 'Megpróbálom kijavítani és tanulni belőle', points: 1 },
      { text: 'Elbagatellizálom', points: 3 },
      { text: 'Másokat hibáztatok inkább', points: 4 },
      { text: 'Szégyellem és sokáig rágódom rajta', points: 5 }
    ]
  },
  {
    id: 7,
    text: 'Milyen gyakran figyeled tudatosan a légzésedet vagy tested jelzéseit?',
    type: 'single',
    options: [
      { text: 'Mindig', points: 1 },
      { text: 'Gyakran', points: 2 },
      { text: 'Néha', points: 3 },
      { text: 'Ritkán', points: 4 },
      { text: 'Soha', points: 5 }
    ]
  },
  {
    id: 8,
    text: 'Milyen gyakran engeded meg magadnak a pihenést, amikor fáradt vagy?',
    type: 'single',
    options: [
      { text: 'Mindig', points: 1 },
      { text: 'Gyakran', points: 2 },
      { text: 'Néha', points: 3 },
      { text: 'Ritkán', points: 4 },
      { text: 'Soha', points: 5 }
    ]
  },
  {
    id: 9,
    text: 'Mennyire tudod megélni a pillanatot (nem a múlton vagy a jövőn jár az eszed)?',
    type: 'single',
    options: [
      { text: 'Szinte mindig', points: 1 },
      { text: 'Gyakran', points: 2 },
      { text: 'Néha', points: 3 },
      { text: 'Egyáltalán nem', points: 5 }
    ]
  },
  {
    id: 10,
    text: 'Melyik elem áll hozzád legközelebb most?',
    type: 'open',
    options: [
      { text: 'Tűz (energia, cselekvés)', points: 0 },
      { text: 'Víz (érzelem, áramlás)', points: 0 },
      { text: 'Föld (stabilitás, biztonság)', points: 0 },
      { text: 'Levegő (kreativitás, gondolatok)', points: 0 }
    ]
  },
  {
    id: 11,
    text: 'Ha most egy állat lehetnél, melyik lennél ösztönösen?',
    type: 'open',
    options: []
  }
]

export const TOTEM_ANIMALS: Record<string, TotemAnimal> = {
  teknos: {
    name: 'Teknős',
    emoji: '🐢',
    subtitle: 'a békés kitartás őre',
    traits: 'Stabilitás, bölcsesség, türelem',
    stressReaction: 'Visszahúzódás, belső zárkózás, „túlélő üzemmód"',
    description: 'A teknős a nyugalom és a földhöz kötött biztonság megtestesítője. Azokban ébred, akik képesek csendben tűrni, de gyakran túlzottan elzárkóznak, hogy megvédjék magukat a túlterheléstől. Nem kapkod, hanem kivárja, míg a hullámok elcsitulnak.',
    message: '„Nem kell rohannod. Az élet nem verseny, hanem áramlás."',
    growth: 'A meditáció során a teknős megtanulja, hogy a páncél nem védelem, hanem otthon, nem kell elbújnia, hanem biztonságban lehet önmagában.',
    evolution: 'zárkózott → megnyíló → harmonikus → tanító bölcs'
  },
  delfin: {
    name: 'Delfin',
    emoji: '🐬',
    subtitle: 'az érzések hullámain táncoló',
    traits: 'Empátia, kommunikáció, játékosság',
    stressReaction: 'Túlzott érzékenység, érzelmi kimerülés',
    description: 'A delfin az öröm, az empátia és az érzelmi kapcsolódás szimbóluma. Az ilyen ember szívből ad, de hajlamos magára venni mások terheit. Intuitív, gyorsan reagál, de a saját határait gyakran elmosódni hagyja.',
    message: '„Nevess, lélegezz, és ússz tovább — a tenger mindig megtart."',
    growth: 'A meditáció segít neki megtalálni az egyensúlyt a segítés és az önvédelem között.',
    evolution: 'érzelmileg hullámzó → tudatosan áramló → kiegyensúlyozott → gyógyító jelenlét'
  },
  oroszlan: {
    name: 'Oroszlán',
    emoji: '🦁',
    subtitle: 'a belső erő ura',
    traits: 'Bátorság, vezetés, önbecsülés',
    stressReaction: 'Kontrollkényszer, düh, kimerültség a felelősségtől',
    description: 'Az oroszlán azokban él, akik sokat vállalnak, másokért küzdenek, és erősek akarnak maradni minden körülmények között. Néha azonban elfelejtik, hogy az igazi erő nem a harcban, hanem a nyugalomban rejlik.',
    message: '„Az erő nem abban rejlik, hogy mindig hangos vagy, hanem abban, hogy csendben is uralod a szívedet."',
    growth: 'A meditáció segíti az oroszlánt elengedni a büszkeség páncélját, és ráébredni: a gyengeség is az erő része.',
    evolution: 'harcos → tudatos vezető → békés uralkodó → inspiráló mester'
  },
  fonix: {
    name: 'Főnix',
    emoji: '🔥',
    subtitle: 'az újjászületés lelke',
    traits: 'Megújulás, belső átalakulás, spiritualitás',
    stressReaction: 'Kiégés, túlterheltség, mély érzelmi hullámvölgy',
    description: 'A főnix akkor születik, amikor valaki elérte a határait. Ő az, aki már lángokban állt és most új formát keres. Ez az állat az életciklusok, a leégés és a felemelkedés szimbóluma.',
    message: '„Amikor azt hiszed, vége mindennek, valójában most kezdesz igazán élni."',
    growth: 'A meditáció segíti a főnixet, hogy ne féljen a változástól, hanem a tűzben lássa meg a tisztulás lehetőségét.',
    evolution: 'összeomlott → gyógyuló → újjászülető → fényben tündöklő'
  }
}

export function calculateTotemAnimal(points: number): string {
  if (points >= 9 && points <= 17) return 'teknos'
  if (points >= 18 && points <= 25) return 'delfin'
  if (points >= 26 && points <= 33) return 'oroszlan'
  if (points >= 34 && points <= 45) return 'fonix'
  // Fallback
  return 'teknos'
}

export const QUESTIONNAIRE_REWARD_POINTS = 50
