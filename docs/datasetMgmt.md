04-15-2022

# dataset spaces & backups

## backups
I've added the compressed backup default filenames in root to gitignore. 
```sh
# copy production to development:
sanity dataset export production 
sanity dataset import ./production.tar.gz development

# Returns:
~/git/gfl-studio  master ✗                                                                                                                                                                             10d22h ⚑  
(✿◠‿◠)ﾉ sanity dataset export production              
? Output path: /Users/jules/git/gfl-studio/production.tar.gz
Exporting dataset "production" to "/Users/jules/git/gfl-studio/production.tar.gz"
✔ Exporting documents... (54/54)
✔ Downloading assets... (26/26)
✔ Adding assets to archive...
✔ Clearing temporary files...
Export finished (4.7s)

~/git/gfl-studio  master ✗                                                                                                                                                                           10d22h ⚑ ◒  
(✿◠‿◠)ﾉ sanity dataset import ./production.tar.gz development
✔ [100%] Fetching available datasets
✔ [100%] Reading/validating data file (67ms)
✔ [100%] Importing documents (2.12s)
✔ [100%] Importing assets (files/images) (8.75s)
✔ [100%] Setting asset references to documents (900ms)
✔ [100%] Strengthening references (1.15s)
Done! Imported 54 documents to dataset "development"
```

## spaces
This adds the ability to toggle between datasets for testing. The same studio schema is rendered according to your current studio build schema regardless of published datasets. 

config - add/remove `"__experimental_spaces"` array to enable the feature. 
(be sure to retain your typical api object)
```json
{
  "root": true,
  "project": {
    "name": "GrapefruitLab"
  },
  "__experimental_spaces": [
    {
      "name": "prod",
      "title": "Production",
      "default": true,
      "api": {
        "projectId": "7jk93b9e",
        "dataset": "production"
      }
    },
    {
      "name": "dev",
      "title": "Development",
      "api": {
        "projectId": "7jk93b9e",
        "dataset": "development"
      }
    }
  ],
  "api": {
    "projectId": "7jk93b9e",
    "dataset": "production"
  },
  ... etc
```