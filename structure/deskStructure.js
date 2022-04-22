import S from '@sanity/desk-tool/structure-builder';
import listCompany from './listCompany';
import listArticles from './listArticles';
import listShows from './listShows';
import listPerformances from './listPerformances';
import listEverything from './listEverything';

export default () =>
  S.list()
    .title('GRAPEFRUIT LAB')
    .items([
      listCompany,
      listArticles,
      listShows,
      listPerformances,
      S.divider(),
      listEverything,
    ]);
