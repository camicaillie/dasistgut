export interface Flashcard {
  front: string;
  back: string;
  favorite?: boolean;
  lastReviewed?: Date;
  timesReviewed?: number;
  successRate?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  condition: string;
  unlocked: boolean;
  unlockedDate?: Date;
}

export interface LearningPath {
  currentStage: number;
  stages: {
    level: number;
    requiredCards: number;
    requiredSuccessRate: number;
    completed: boolean;
    completionDate?: Date;
  }[];
}

export interface ReviewSchedule {
  nextReviewDate: Date;
  reviewHistory: {
    date: Date;
    successRate: number;
    cardsReviewed: number;
  }[];
  spacedRepetitionLevel: number;
}

export interface PerformanceAnalytics {
  bestTimeOfDay: string;
  averageSessionLength: number;
  mostChallengingCards: string[];
  improvementRate: number;
  studyPatterns: {
    dayOfWeek: string;
    averageTimeSpent: number;
    averageSuccessRate: number;
  }[];
}

export interface SubcategoryStats {
  totalCards: number;
  cardsStudied: number;
  averageSuccessRate: number;
  lastStudyDate?: Date;
  totalStudyTime: number; // in minutes
  masteryLevel: 'beginner' | 'intermediate' | 'advanced' | 'master';
  streak: number; // Consecutive days studied
  weeklyProgress: {
    date: Date;
    cardsStudied: number;
    successRate: number;
    timeSpent: number;
  }[];
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  lastWeekProgress: {
    cardsStudied: number;
    averageSuccessRate: number;
    timeSpent: number;
  };
  achievements: Achievement[];
  learningPath: LearningPath;
  reviewSchedule: ReviewSchedule;
  analytics: PerformanceAnalytics;
}

export interface Subcategory {
  id: string;
  name: string;
  cards: Flashcard[];
  stats: SubcategoryStats;
}

export interface FlashcardSet {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export const flashcardSets: FlashcardSet[] = [
  {
    id: 'general',
    name: 'Člověk a společnost',
    subcategories: [
      {
        id: 'filosofie',
        name: 'Filosofie',
        cards: [
          { front: 'Kdo je považován za otce západní filozofie?', back: 'Sókratés' },
          { front: 'Co je to "cogito ergo sum"?', back: 'Myslím, tedy jsem - René Descartes' },
          { front: 'Kdo napsal "Kritiku čistého rozumu"?', back: 'Immanuel Kant' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'psychologie',
        name: 'Psychologie',
        cards: [
          { 
            front: 'Psychoanalýza - Období a představitelé', 
            back: 'Období: Konec 19. a začátek 20. století\nHlavní představitelé: Sigmund Freud' 
          },
          { 
            front: 'Psychoanalýza - Hlavní myšlenka', 
            back: 'Psychoanalýza je teorie a terapeutická metoda, která se zaměřuje na studium nevědomí a vliv nevědomých procesů na chování a myšlení člověka. Freud se domníval, že nevědomé konflikty, potlačené vzpomínky a zranění mají zásadní vliv na duševní zdraví. Tento směr v psychologii se zaměřuje na rozbor snů, volné asociace a další techniky, které odhalují skryté motivy a touhy jedince.' 
          },
          { 
            front: 'Psychoanalýza - Příklad', 
            back: 'Freudovo teoretické vysvětlení záměn v jazyce, například, když člověk místo "krásná dívka" řekne "krásná svině", což má být podle něj projev nevědomého přání nebo strachu.' 
          },
          { 
            front: 'Analytická psychologie - Období a představitelé', 
            back: 'Období: Počátek 20. století\nHlavní představitelé: Carl Gustav Jung' 
          },
          { 
            front: 'Analytická psychologie - Hlavní myšlenka', 
            back: 'Analytická psychologie se zaměřuje na studium individuace a symboliky. Jung se soustředil na rozvoj jednotlivce, který je schopen dosáhnout plné seberealizace a rovnováhy mezi vědomými a nevědomými částmi psychiky. Začal klást důraz na archetypy a kolektivní nevědomí, tedy sdílený fond zkušeností všech lidí.' 
          },
          { 
            front: 'Analytická psychologie - Příklad', 
            back: 'Jungovy analýzy snů, kde se objevují univerzální symboly (archetypy) jako matka, hrdina nebo stín, které jsou pro všechny kultury a jednotlivce stejné.' 
          },
          { 
            front: 'Individuální psychologie - Období a představitelé', 
            back: 'Období: Počátek 20. století\nHlavní představitelé: Alfred Adler' 
          },
          { 
            front: 'Individuální psychologie - Hlavní myšlenka', 
            back: 'Adlerova individuální psychologie je orientována na vliv sociálního prostředí na duševní vývoj jedince. Adler se soustředil na roli cíle v životě, a zejména na snahu člověka o kompenzaci jeho pocitu méněcennosti. Podle něj jedinec usiluje o zlepšení svých schopností a hledá smysl svého života v osobním rozvoji a ve prospěch ostatních.' 
          },
          { 
            front: 'Individuální psychologie - Příklad', 
            back: 'Adler považoval za důležité, jak se dítě vypořádává s rodinnými vztahy, zejména s rolí v rodinném uspořádání (např. první dítě, prostřední dítě atd.), což může ovlivnit jeho pozdější osobnostní vývoj.' 
          },
          { 
            front: 'Behaviorismus - Období a představitelé', 
            back: 'Období: Začátek 20. století\nHlavní představitelé: John B. Watson, B. F. Skinner' 
          },
          { 
            front: 'Behaviorismus - Hlavní myšlenka', 
            back: 'Behaviorismus je teorie, která tvrdí, že chování je výsledkem podnětů a reakcí (stimulus-response). Tento směr se soustředí na pozorovatelné chování a vychází z přesvědčení, že psychologii lze studovat pouze na základě měřitelných a objektivních faktorů. Behaviorismus zcela ignoruje vnitřní duševní procesy a zaměřuje se na formování chování prostřednictvím podnětů a odměn.' 
          },
          { 
            front: 'Behaviorismus - Příklad', 
            back: 'Skinnerova teorie operantního podmiňování, kdy se chování jedince formuje prostřednictvím pozitivního nebo negativního posílení.' 
          },
          { 
            front: 'Gestalt psychologie - Období a představitelé', 
            back: 'Období: Počátek 20. století\nHlavní představitelé: Max Wertheimer, Kurt Koffka, Wolfgang Köhler' 
          },
          { 
            front: 'Gestalt psychologie - Hlavní myšlenka', 
            back: 'Gestalt psychologie se zaměřuje na to, jak vnímáme svět jako celek a ne jako soubor jednotlivých částí. Tento směr tvrdí, že lidské vnímání je strukturováno a organizováno tak, že vnímáme věci v celkových vzorcích a notách, nikoli jako izolované části. Gestalt psychologie klade důraz na to, že "celkovo je víc než součet částí".' 
          },
          { 
            front: 'Gestalt psychologie - Příklad', 
            back: 'Gestalt zákon proximity, který říká, že objekty, které jsou blízko sebe, mají tendenci být vnímány jako skupina nebo celek.' 
          },
          { 
            front: 'Humanistická psychologie - Období a představitelé', 
            back: 'Období: Polovina 20. století\nHlavní představitelé: Abraham Maslow, Carl Rogers' 
          },
          { 
            front: 'Humanistická psychologie - Hlavní myšlenka', 
            back: 'Humanistická psychologie se zaměřuje na individuální potenciál a seberealizaci. Tento směr vychází z přesvědčení, že lidé mají vnitřní touhu růst, rozvíjet se a dosáhnout plného potenciálu. Maslowovo pojetí hierarchie potřeb a Rogersovo zaměření na bezpodmínečné pozitivní přijetí a empatii jsou klíčovými aspekty tohoto směru.' 
          },
          { 
            front: 'Humanistická psychologie - Příklad', 
            back: 'Maslowova pyramida potřeb, kde základní potřeby (jako jídlo a bezpečí) musí být naplněny před tím, než může jednotlivec usilovat o vyšší úroveň seberealizace.' 
          },
          { 
            front: 'Kognitivní psychologie - Období a představitelé', 
            back: 'Období: 50. - 70. léta 20. století\nHlavní představitelé: Jean Piaget, Ulric Neisser' 
          },
          { 
            front: 'Kognitivní psychologie - Hlavní myšlenka', 
            back: 'Kognitivní psychologie se zaměřuje na studium vnitřních mentálních procesů, jako jsou myšlení, paměť, rozhodování a percepce. Tento směr tvrdí, že lidské chování lze chápat jako výsledek informací zpracovávaných mozkem. Kognitivní psychologové se zajímají o to, jak lidé organizují, ukládají a využívají informace k vyřešení problémů a adaptaci na prostředí.' 
          },
          { 
            front: 'Kognitivní psychologie - Příklad', 
            back: 'Piagetova teorie kognitivního vývoje, která popisuje, jak se děti postupně vyvíjejí ve schopnosti rozumět světu kolem sebe.' 
          },
          { 
            front: 'Transpersonální psychologie - Období a představitelé', 
            back: 'Období: 60. léta 20. století\nHlavní představitelé: Abraham Maslow, Stanislav Grof' 
          },
          { 
            front: 'Transpersonální psychologie - Hlavní myšlenka', 
            back: 'Transpersonální psychologie se zaměřuje na studium zkušeností, které přesahují běžné hranice osobní identity, jako jsou mystické nebo náboženské zážitky. Tento směr vychází z přesvědčení, že člověk má nejenom psychologické, ale také duchovní dimenze, které mohou být zkoumány a rozvíjeny.' 
          },
          { 
            front: 'Transpersonální psychologie - Příklad', 
            back: 'Grofova studie změněných stavů vědomí, které mohou být dosaženy například prostřednictvím holotropního dýchání nebo užívání psychedelických látek, a které mohou vést k hlubokým psychologickým a duchovním prozřením.' 
          },
          { 
            front: 'Gnoseologie - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Aristotelés' 
          },
          { 
            front: 'Gnoseologie - Význam', 
            back: 'Gnoseologie je filozofická disciplína, která se zabývá teorií poznání, tedy otázkou, jakým způsobem lidé získávají vědomosti o světě. Zkoumá hranice a možnosti lidského poznání, podmínky, za kterých je možné něco poznat, a vztah mezi vědomím a objekty, které jsou poznávány. Gnoseologie se dotýká otázky pravdy, subjektivity, objektivity a metod, jakými lidé dosahují vědeckých a filosofických závěrů.' 
          },
          { 
            front: 'Gnoseologie - Příklad', 
            back: 'Filozofové, jako René Descartes a Immanuel Kant, přemýšleli o tom, jakým způsobem je možné poznávat realitu, zda naše smysly vždy odrážejí pravdu a jak se vztahuje naše mysl k objektivnímu světu.' 
          },
          { 
            front: 'Introspekce - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Wilhelm Wundt' 
          },
          { 
            front: 'Introspekce - Význam', 
            back: 'Introspekce je metoda psychologického výzkumu, která spočívá v pozorování a analýze vlastních vnitřních prožitků a mentálních stavů. Byla jednou z prvních metod, kterou používal Wilhelm Wundt při zakládání experimentální psychologie. Introspekce se soustředí na analýzu vlastního vědomí, pocitů, myšlenek a vjemů a je používána pro pochopení vnitřních procesů, které ovlivňují lidské chování.' 
          },
          { 
            front: 'Introspekce - Příklad', 
            back: 'Wundt v laboratoři používal introspekci k výzkumu vnímání a pozornosti, kdy subjekty popisovaly své vnitřní reakce na jednoduché podněty, jako je světlo nebo zvuk.' 
          },
          { 
            front: 'Kolektivní nevědomí - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Carl Gustav Jung' 
          },
          { 
            front: 'Kolektivní nevědomí - Význam', 
            back: 'Kolektivní nevědomí je psychologický pojem, který označuje soubor sdílených, nevědomých obsahů, archetypů a vzorců chování, které jsou vlastní všem lidem bez ohledu na kulturu. Jung tento termín použil k vysvětlení, proč se některé symboly, motivy a témata objevují napříč různými národy a dějinami. Kolektivní nevědomí je považováno za dědictví lidského druhu a má vliv na lidskou psychiku i chování.' 
          },
          { 
            front: 'Kolektivní nevědomí - Příklad', 
            back: 'Archetypy, jako jsou matka, hrdina nebo stín, které se objevují v pohádkách, náboženstvích a mytologiích po celém světě, jsou příklady kolektivního nevědomí.' 
          },
          { 
            front: 'Psychika - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Sigmund Freud' 
          },
          { 
            front: 'Psychika - Význam', 
            back: 'Psychika označuje celkový soubor mentálních a emocionálních procesů, které ovlivňují chování a prožívání jednotlivce. Skládá se z vědomých a nevědomých částí a zahrnuje naše myšlenky, pocity, vzpomínky a motivy. Freud rozlišoval mezi vědomou, předvědomou a nevědomou částí psychiky, kde nevědomí má zásadní vliv na chování, které si člověk neuvědomuje.' 
          },
          { 
            front: 'Psychika - Příklad', 
            back: 'Freudova teorie psychiky zahrnovala tři složky - id, ego a superego, kde id představuje základní impulzy a touhy, ego se snaží je vyvážit s realitou a superego představuje morální hodnoty a pravidla.' 
          },
          { 
            front: 'Chování a prožívání - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: B.F. Skinner' 
          },
          { 
            front: 'Chování a prožívání - Význam', 
            back: 'Chování a prožívání je soubor reakcí organismu na vnější podněty, ale i vnitřní prožitky. Zatímco chování je externí, viditelné jednání, prožívání zahrnuje vnitřní emocionální a mentální stavy, které nelze přímo pozorovat. Behaviorismus, zastoupený např. Skinnerem, se zaměřuje na chování, které lze měřit a ovlivnit, a přitom ignoruje nevědomé procesy a vnitřní prožitky.' 
          },
          { 
            front: 'Chování a prožívání - Příklad', 
            back: 'Skinner při svých experimentech používal posilování chování u zvířat, např. pomocí odměn, aby ukázal, jak prostředí ovlivňuje chování.' 
          },
          { 
            front: 'Vědomí a nevědomí - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Sigmund Freud' 
          },
          { 
            front: 'Vědomí a nevědomí - Význam', 
            back: 'Vědomí je část psychiky, která zahrnuje všechny myšlenky, pocity a vjemy, které si člověk uvědomuje v daném okamžiku. Naopak nevědomí zahrnuje všechny procesy a obsah, které jsou mimo vědomou pozornost, ale i tak ovlivňují naše chování. Freudova teorie rozdělila psychiku na vědomí, předvědomí a nevědomí, přičemž nevědomí skrývá potlačované vzpomínky, přání a impulzy.' 
          },
          { 
            front: 'Vědomí a nevědomí - Příklad', 
            back: 'Skrytá trauma nebo nevědomé přání mohou ovlivnit člověka ve formě fobií, aniž by si to uvědomoval.' 
          },
          { 
            front: 'Determinace psychiky - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Sigmund Freud' 
          },
          { 
            front: 'Determinace psychiky - Význam', 
            back: 'Determinace psychiky znamená, že lidské myšlenky a chování jsou ovlivněny faktory, které nejsou vždy vědomě kontrolovatelné. Tento pojem se vztahuje k teorii, že každé chování nebo prožitek má příčinu, která je hluboko v psychice, často v nevědomí. Freud tvrdil, že naše činy nejsou náhodné, ale jsou řízeny podvědomými touhami a vzory, které se formují v dětství.' 
          },
          { 
            front: 'Determinace psychiky - Příklad', 
            back: 'Člověk, který se vyhýbá určitým situacím, může mít skrytý strach nebo trauma z minulosti, které si není vědom, ale které stále ovlivňuje jeho chování.' 
          },
          { 
            front: 'Dynamická psychologie - Kdo s termínem přišel', 
            back: 'Kdo s termínem přišel: Carl Gustav Jung' 
          },
          { 
            front: 'Dynamická psychologie - Význam', 
            back: 'Dynamická psychologie zkoumá psychické procesy, které jsou v neustálém pohybu a změnách. Zaměřuje se na to, jak různé síly a motivy v psychice interagují a ovlivňují lidské chování. Tento směr se od tradiční psychologie liší tím, že nevidí psychiku jako statický soubor schopností, ale jako dynamický a neustále se vyvíjející systém. Nejdůležitější směry dynamické psychologie jsou Psychoanalýza, Analytická psychologie a Individuální psychologie.' 
          },
          { 
            front: 'Dynamická psychologie - Příklad', 
            back: 'Jungovo pojetí individuačního procesu, ve kterém se jedinec vyvíjí a mění v souladu s osobními a archetypálními zkušenostmi.' 
          }
        ],
        stats: {
          totalCards: 54,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 54,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'sociologie',
        name: 'Sociologie',
        cards: [
          { front: 'Kdo je považován za zakladatele sociologie?', back: 'Auguste Comte' },
          { front: 'Co je to "sociální stratifikace"?', back: 'Rozvrstvení společnosti do různých sociálních vrstev' },
          { front: 'Co je to "socializace"?', back: 'Proces, během kterého se jedinec učí být členem společnosti' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
  {
    id: 'pravo-politologie',
    name: 'Právo a politologie',
    subcategories: [
      {
        id: 'pravo',
        name: 'Právo',
        cards: [
          { front: 'Co je to "ústavní právo"?', back: 'Obor práva upravující základní vztahy ve státě' },
          { front: 'Co je to "občanské právo"?', back: 'Obor práva upravující majetkové vztahy mezi občany' },
          { front: 'Co je to "trestní právo"?', back: 'Obor práva upravující trestné činy a tresty' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'politologie',
        name: 'Politologie',
        cards: [
          { front: 'Co je to "dělba moci"?', back: 'Rozdělení státní moci na zákonodárnou, výkonnou a soudní' },
          { front: 'Co je to "demokracie"?', back: 'Forma vlády, kde moc vychází z lidu' },
          { front: 'Co je to "ústava"?', back: 'Základní zákon státu, který určuje jeho uspořádání' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
  {
    id: 'historie-ekonomie',
    name: 'Moderní historie a ekonomie',
    subcategories: [
      {
        id: 'ekonomie',
        name: 'Ekonomie',
        cards: [
          { front: 'Co je to "nabídka a poptávka"?', back: 'Základní ekonomický zákon trhu' },
          { front: 'Co je to "inflace"?', back: 'Obecný růst cenové hladiny v ekonomice' },
          { front: 'Co je to "HDP"?', back: 'Hrubý domácí produkt - celková hodnota statků a služeb vyrobených v zemi za určité období' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'moderni-historie',
        name: 'Moderní historie',
        cards: [
          { front: 'Kdy začala druhá světová válka?', back: '1939' },
          { front: 'Kdy skončila druhá světová válka?', back: '1945' },
          { front: 'Kdy začala studená válka?', back: '1947' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'evropska-integrace',
        name: 'Evropská integrace',
        cards: [
          { front: 'Kdy byla založena Evropská unie?', back: '1993 (Maastrichtská smlouva)' },
          { front: 'Kdy vstoupilo Česko do EU?', back: '2004' },
          { front: 'Kdy vstoupilo do EU Chorvatsko?', back: '2013' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
]; 