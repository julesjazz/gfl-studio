ref:
https://www.sanity.io/docs/set-up-structure-builder-to-override-the-default-list-view

# Baseline

```js
export default () =>
  S.list().title('GRAPEFRUIT LAB').items(S.documentTypeListItems());
```

---

# Layout Plan

- **COMPANY**
  - single company doc "Grapefruit Lab"
  - company members, maybe
- **ARTICLES**
  - Article category refs mapped per `article.category._ref.title`
    (`[ CatA, CatB, CatC, /NoCat/ ]`)
- **SHOWS**
  - **LIST** of type `show.title`
    - **SINGLE** show doc title = show.title
    - **PERFORMANCES** per selected show
- **TICKETS**
  - **PERFORMANCE** list, sort by date asc, `>= date.now`
  - Optional catchall of unassigned tickets
- -- _divider_ --
- **EVERYTHING**
  - all document types without additional sorting
    (optionally: `import { schemaDocs } from '../schemas/schema'`)
