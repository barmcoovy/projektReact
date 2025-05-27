# Projekcik na aplikację internetową

Prosta aplikacja prezentująca siatkę godzin ponadwymiarowych nauczyciela.

## Spis treści

- [Opis projektu](#opis-projektu)
- [Funkcjonalności](#funkcjonalności)
- [Instalacja](#instalacja)
- [Uruchamianie aplikacji](#uruchamianie-aplikacji)
- [Struktura katalogów](#struktura-katalogów)
- [Technologie](#technologie)
- [Autor](#autor)

## Opis projektu

Aplikacja umożliwia wyświetlanie i edycję tygodniowej liczby godzin oraz rozliczanie godzin ponadwymiarowych w wybranym miesiącu i roku. Użytkownik może wybrać miesiąc, rok oraz wprowadzić tygodniową liczbę godzin, a aplikacja automatycznie wylicza rozkład godzin na tygodnie i dni robocze.

## Funkcjonalności

- Wybór miesiąca i roku rozliczenia.
- Edycja tygodniowej liczby godzin.
- Automatyczne wyliczanie tygodni i rozkładu godzin na dni.
- Przejrzysta tabela prezentująca dane.

## Instalacja

1. Sklonuj repozytorium:
   ```sh
   git clone https://github.com/barmcoovy/projektReact.git
   ```
2. Przejdź do katalogu projektu:
   ```sh
   cd projektReact
   ```
3. Zainstaluj zależności:
   ```sh
   npm install
   ```

## Uruchamianie aplikacji

Aby uruchomić aplikację w trybie deweloperskim:

```sh
npm run dev
```

Aby zbudować aplikację produkcyjnie:

```sh
npm run build
```

Aby zobaczyć podgląd zbudowanej aplikacji:

```sh
npm run preview
```

## Struktura katalogów

```
projekt-aplikacjeInternetowe/
├── public/
├── src/                   # Kod źródłowy aplikacji
│   ├── components/        # Komponenty React
│   │   ├── Hours.tsx
│   │   ├── Months.tsx
│   │   ├── OvertimeTable.tsx
│   │   └── utils/
│   │       └── dateUtils.ts
│   ├── App.tsx            # Główny komponent aplikacji
│   ├── main.tsx           # Punkt wejścia aplikacji
│   └── ...                # Pliki stylów i inne
├── package.json           # Zależności i skrypty
├── vite.config.ts         # Konfiguracja Vite
└── README.md              # Dokumentacja
```

## Technologie

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) – narzędzie do stylowania

## Autor

Projekt został stworzony przez barmcoovy
