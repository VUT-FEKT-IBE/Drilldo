# Drilldo

This is an experimental testing platform made by Brno University of Technology students from the Faculty of Electrical Engineering and Communications.

Simply upload your questions in the format shown [here](https://github.com/VUT-FEKT-IBE/Drilldo/blob/main/questionTemplate.json) and test to your heart's content.

This application leverages the Browser's Local Storage to enable data persistence across sessions, which means that question sets will be saved across refreshes but no data is sent anywhere, it's purely localized.

## Project structure

```sh
.
├── data # Included question sets
├── docs # Build output, used for GitHub Pages
└── drilldo # Vue 3 project
    ├── public # Static files
    │   └── data -> ../../data # Do not touch, symlink to data
    └── src # Source code
        ├── assets # Static assets
        ├── components # Vue components
        ├── router # Vue Router
        ├── stores # Pinia stores
        └── views # Vue views
```
