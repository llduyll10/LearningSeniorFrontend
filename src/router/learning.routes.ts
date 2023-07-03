import {CssPage, HtmlPage, LayoutLearning} from '@/views/learning'
export default {
    path: '/learning',
    component: LayoutLearning,
    default:HtmlPage,
    children: [
      { path: '', component: HtmlPage },
      { path: 'css-page', component: CssPage },
  ],
  };
