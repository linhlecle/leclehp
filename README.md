# Next.js starter

Kick off your project with this boilerplate.

# π Folder Structure

A quick look at the directories you'll see in this project.

### Root driectory layout

    .
    βββ pages               #
    βββ public              #
    βββ styles              #
    βββ apis                #
    βββ models              #
    βββ components          #
    βββ hooks               # Custom hooks
    βββ utils               #
    βββ libs                #
    βββ cypress             # Automated tests
    βββ README.md           #
    βββ ...

### Pages

Each page is associated with a route based on its file name.

    .
    βββ ...
    βββ pages               #
    β   βββ apis            # API endpoint
    β   βββ _app.tsx        # App component to initialize pages
    β   βββ _document.tsx   # Custom document to augment application's <html> and <body> tags
    β   βββ ...
    βββ ...

### Public

Next.js can serve static files, like images, under a folder called public in the root directory.

    .
    βββ ...
    βββ public              #
    β   βββ favicons        #
    β   βββ ...
    βββ ...

### Styles

Css, theme configuration files are placed into this folder.

    .
    βββ ...
    βββ styles              #
    β   βββ theme.tsx       #
    β   βββ ...
    βββ ...

### Api

Api call related functions.

### Components

Components are independent and reusable bits of code.

    .
    βββ ...
    βββ components          #
    β βββ @Icons            # μμ΄μ½~
    β βββ @Layout           # λ μ΄μμ~
    β βββ Select            #
    β βββ Calendar          #
    β βββ ...               #
    βββ ...

### Container

Components are independent and reusable bits of code.

    .
    βββ ...
    βββ containers                  # containersμ νμ ν΄λλ€μ pagesμ 1:1 λ§€μΉ­
    β βββ login                     #
    β β  βββ _fragments             # _fragmentλ Login νμ΄μ§μμλ§ μ¬μ©λλ μ»΄ν¬λνΈ
    β β  β  βββ LoginForm.tsx       # μ€λ³΅λλ κ²½μ°μλ components ν΄λλ‘ μ΄λ
    β β  β  βββ Intro.tsx           #
    β β  βββ Login.tsx              #
    β β  βββ LoginContainer.tsx     # LoginContainer μμ λͺ¨λ  λ‘μ§μ λν λΆλΆλ€ μμ (state, props)
    β β  βββ index.tsx              #
    β βββ home                      #
    β βββ ...                       #
    βββ ...

### Hooks

Custom hook allows you to extract some components logic into a reusable function that starts with use and that call can other hooks.

    .
    βββ ...
    βββ hooks                #
    β   βββ useScript.tsx    #
    β   βββ ...
    βββ ...

### Utils

Small snippets you can use throughout the application. Short and specific functions and constants used throughout application.

### Libs

Libraries you can use throughout the application. A library is a JavaScript file that contains a bunch of functions, and those functions accomplish some specific purpose.

    .
    βββ ...
    βββ libs                  #
    β   βββ gtm.ts            #
    β   βββ ...
    βββ ...

### Cypress

Automated tests with cypress.

    .
    βββ ...
    βββ cypess                #
    β βββ fixtures            # Fixed data sets
    β βββ integration         # End-to-end, integration tests (alternatively `e2e`)
    β βββ plugins             #
    β βββ support             #
    βββ ...

# π Naming

### π¨βπ¦³ React Component

- **Extensions:** Use .tsx extension for React components.

- **Filename:** Use PascalCase for filenames. E.g., ReservationCard.tsx.

- **Reference Naming:** Use PascalCase for React components and camelCase for their instances.

  ```tsx
  // bad
  import reservationCard from './ReservationCard';

  // good
  import ReservationCard from './ReservationCard';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

- **Component Naming:** Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:

  ```tsx
  // bad
  import Footer from './Footer/Footer';

  // bad
  import Footer from './Footer/index';

  // good
  import Footer from './Footer';
  ```

### πͺ Others

Always use camelCase for others.

- scripts
- folders
- variables
- functions

# Multiple languages.

- Current locales supported: Korean (ko) and English (en).
- Default locale: ko
- Usage guide: https://next-intl-docs.vercel.app/docs/usage/messages.

# β­οΈ Stack

- **Framework:** Next.js
- **State Management:** React Query, Context API
- **Styling:** Chakra-ui, Emotion
- **Forms:** React Hook Form
- **Testing:** Cypress

# Reference

- [Folder-Structure-Conventions](https://github.com/kriasoft/Folder-Structure-Conventions/blob/master/README.md)
- [Airbnb React/JSX Style Guide - Naming](https://github.com/airbnb/javascript/tree/master/react#naming)
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions)
- [λ¦¬μ‘νΈ μ΄νλ¦¬μΌμ΄μμ μν κ΄λ¦¬νκΈ°](https://www.kenrhee.com/blog/react-application-state-management)
