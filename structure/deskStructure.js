import S from '@sanity/desk-tool/structure-builder';
import listCompany from './listCompany';
import listArticles from './listArticles';
import listShows from './listShows';
import listTickets from './listTickets';
import listEverything from './listEverything';

export default () =>
  S.list()
    .title('GRAPEFRUIT LAB')
    .items([
      listCompany,
      listArticles,
      listShows,
      listTickets,
      S.divider(),
      listEverything,
    ]);
