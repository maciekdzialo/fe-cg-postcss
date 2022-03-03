import React from "react";
import { ThemeSwitcher } from "../../components/themeSwitcher/ThemeSwitcher";

export const courseData = [
  {
    title: "Workshops - Comparing CSS Frameworks",
    contentText: "W tej prezentacji omówimy POST CSS'a",
    class: "Introduction",
  },
  {
    title: "Agenda",
    contentText:
      "Dzisiejsza agenda: \n · Czym jest POST CSS \n · Ekosytem POST CSS'a (Pluginy) \n · Wykorzystanie BEM \n · Podejście do dark mode \n · Dlaczego warto korzystać z POST CSS? \n · Instalacja i konfiguracja",
    class: "Agenda",
  },
  {
    title: "Czym jest POST CSS",
    contentText:
      "POST CSS jest narzędziem, które pozwala modyfikować CSSa i bardzo ułatwia pracę z nim związaną. Wszystko odbywa się za pomocą JS'owych pluginów, których w ekosystemie POST CSSa jest MASA! W dniu robienia prezentacji jest ich 356. Poniżej omówimy sobie kilka z lepszych i te, które używam w projektach.",
    class: "Definition",
  },
  {
    title: "POST CSS - Normalize",
    contentText:
      "Pierwszy z pluginów to postcss-normalize. Jest to dość mały plugin, który ma za zadanie zastosowanie tych samych styli dla różynch HTMLowych elementów pomiędzy różnymi przeglądarkami, dzięki temu nie musimy się martwić, że niektóre elementy bedą wyglądały trochę inaczej w IE, inaczej w Chromie, a jeszcze inaczej w Firefoxie.",
    class: "Normalize",
  },
  {
    title: "POST CSS - Mixins",
    contentText:
      "Mixiny to jedna z lepszych rzeczy jakie przynosi ze sobą POST CSS. Są to po prostu CSSowe funkcje, które mogą być z parametrami albo bez oraz które zwracają daną część kodu CSSowego. Dzięki temu możemy uniknąć wielokrotnego potwarzania tego samego kodu lub napisać dobre mixiny z parametrami, które będą nieco manipulowały finalnym kodem CSS i dzięki temu będziemy mogli dostosować je do naszych specyficznych wymagań.",
    class: "Mixins",
  },
  {
    title: "POST CSS - Custom Media",
    contentText:
      "Postcss-custom-media to plugin, który pozwala nam stworzyć nasze customowe media queries i bezproblemowo używać ich w całym projekcie. Idea jest prosta - tworzymy media queries za pomocą zmiennych, a potem w dowolnym miejscu używamy danego breakpointu w @media().",
    class: "Media",
  },
  {
    title: "POST CSS - Nesting",
    contentText:
      "Nesting, czyli zagnieżdżanie na pewno jest Wam znane z takich CSSowych pre-procesorów jak SASS. Tutaj działa to dokładnie tak samo z tym, że nadal piszemy w czystym CSSie. Jest to kolejny mocny punkt przemawiający za Post CSSem, bo zagnieżdżanie bardzo dobrze wpływa na jakość i czytelność kodu i na dzień dzisiejszy nie wyobrażam sobie pisać CSSów bez ich zagnieżdżania.",
    class: "Nesting",
  },
  {
    title: "POST CSS - Autoprefixer",
    contentText:
      'Autoprefixer jest kolejną przydatną rzeczą jeśli chodzi o kompatybilność naszego CSSa z różnymi wersjami przeglądarek. W czasie kompilacji naszego kodu CSS dodaje on do miejsc, które używają "nowych" właściwości CSSowych przedrostki, które wszyscy pewnie kojarzycie: -ms (Microsoft, IE), -moz (Firefox), -o (Opera), -webkit(Chrome, Safari). Jest to bardzo przydatna funkcjonalność, bo dzięki temu nie musimy sami pilnować tych przedrostków, tylko dodają się one same oraz uzyskujemy wsparcie "nowych" funkcjonalności na starych przeglądarkach. Takie rozwiązanie jest wysoce rekomendowane na przykład przez Google, a w praktyce używa go między innymi Twitter czy Alibaba.',
    class: "Autoprefixer",
  },
  {
    title: "POST CSS - Pluginy Podsumowanie",
    contentText:
      "Przedstawiłem Wam tutaj tylko kilka naszym zdaniem fajnych i przydatnych projektowo pluginów, ale zachęcam do przejrzenia pełnej listy, bo jest ich tam pełno. Może znajdziecie coś, co akurat rozwiąże Wasz problem albo pomoże Wam zoptymalizować pisane Waszych CSSów jeszcze lepiej niż dotychczas. Parę ciekawych pluginów, które wpadły mi w oko: \n · postcss-short \n · postcss-custom-properties \n · postcss-color-mix \n · postcss-czech",
    class: "Summary",
  },
  {
    title: "POST CSS - BEM",
    contentText:
      "POST CSS defaultowo pozwala nam zmodyfikować każdą klasę CSSa odwołując się do niej z dowolnego pliku .css z dowolnego miejsca w projekcie. Może to być kłopotliwe i trudne do utrzymania, ale jest na to kilka rozwiązań. W moim projekcie używamy po prostu BEMa, czyli konwencji nazweniczej Block-Element-Modifier, dzięki czemu wszystkie nasze klasy są unikalne i łatwe do utrzymania. Zazwyczaj każdy komponent ma inną nazwę i jest bardzo małe prawdopodobnieństwo, żeby nazwy komponentów (a co za tym idzie - nazwy klas) były takie same. Alternatywą do BEMa są CSS Modules, które możemy skonfigurować razem z POST CSSem używając kolejnego pluginu.",
    class: "Bem",
  },
  {
    title: "POST CSS - Dark Mode",
    contentText: "Chciałbym teraz pokazać jak POST CSS podchodzi do dark mode.",
    class: "Darkmode",
    additionalContent: <ThemeSwitcher />,
  },
  {
    title: "POST CSS - Instalacja i konfiguracja",
    contentText:
      "Teraz przejdziemy szybko przez instalacje i konfiguracje, nie jest to trudne. POST CSSa możemy skonfigurować tak naprawdę z czym chcemy: cra, craco, webpack. Będziemy musieli zainstalować samego POST CSSa (postcss) oraz jego loader (postcss-loader), który przetłumaczy całą naszą 'ulepszoną' składnie CSSową na zwykłego CSSa. Po instalacji obu niezbędnych paczek możemy zainstalować interesujące nas pluginy, a potem wystarczy stworzyć plik postcss.config.js gdzie jedyne co musimy zrobić to wylistować pluginy, których będziemy używać i wszystko gotowe! \nJeśli chodzi o Parcela albo WiteJS to tam POST CSS jest 'wbudowany', jedyne co musimy zainstalować to interesujące nas pluginy oraz stworzyć wyżej wspomniany plik postcss.config.js.",
    class: "Configuration",
  },
  {
    title: "Dziękuję za uwagę",
    contentText: "TO TYLE 🥱",
    class: "End",
  },
  {
    title: "Zadanie dla chętnych",
    contentText: "Homework",
    class: "Homework",
  },
];
