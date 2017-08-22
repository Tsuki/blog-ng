import {Injectable} from '@angular/core';

@Injectable()
export class GlobalDataService {
  title = 'Tsuka Tsuki blog';
  subtitle = '';
  description: string = null;
  author = 'Tsuki';
  language: [string] = [
    'zh-TW'
  ];
  timezone = 'HKT';
  url = 'http=//Tsuki.github.io';
  root = '/';
  permalink = '=year/=month/=day/=title/';
  permalink_defaults: string = null;
  source_dir = 'source';
  public_dir = 'public';
  tag_dir = 'tags';
  archive_dir = 'archives';
  category_dir = 'categories';
  code_dir = 'downloads/code';
  i18n_dir = '=lang';
  skip_render: boolean = null;
  new_post_name = '=year/=month/=day-=title.md';
  default_layout = 'post';
  titlecase = false;
  external_link = true;
  filename_case = 0;
  render_drafts = false;
  post_asset_folder = true;
  relative_link = false;
  future = true;
  highlight: {
    enable: boolean; line_number: boolean; auto_detect: boolean;
    tab_replace: string
  } = {
    enable: true,
    line_number: true,
    auto_detect: false,
    tab_replace: null
  };
  default_category = 'uncategorized';
  category_map: boolean = null;
  tag_map: boolean = null;
  date_format = 'YYYY-MM-DD';
  time_format = 'HH:mm:ss';
  per_page = 10;
  pagination_dir = 'page';
  theme = 'landscape';
  disqus_shortname = 'TsukiBlog';
  marked: {
    gfm: boolean; pedantic: boolean; sanitize: boolean;
    tables: boolean; breaks: boolean; smartLists: boolean;
    smartypants: boolean
  } = {
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true
  };
  menus: [Menu] = [
    {
      name: 'Home',
      path: '/',
      _class: 'icon-home',
      layout: 1,
    },
    {
      name: 'About',
      path: '/about',
      _class: 'icon-user',
      layout: 2
    },
    {
      name: 'Archives',
      path: '/archives',
      _class: 'icon-archive',
      layout: 2
    },
    {
      name: 'Tags',
      path: '/tags',
      _class: 'icon-tags',
      layout: 2
    },
    {
      name: 'Pictures',
      path: '/picture',
      _class: 'icon-camera',
      layout: 2,
      enable: false
    },
    {
      name: 'Works',
      path: '/works',
      _class: 'icon-trophy',
      layout: 2,
      enable: false
    }
  ];

  rss = '/atom.xml';
  excerpt_link = 'Read More';
  fancybox = true;
  sidebar = 'right';
  widgets = [
    'category',
    'recent_posts',
    'tag',
    'tagcloud',
    'links',
    'recent_comment',
    'ukagaka'
  ];
  google_analytics = 'UA-77760032-1';
  favicon = '/f.ico';
  twitter = 'TsukiAlex';
  google_plus = '+IzayoiKana';
  fb_admins = null;
  fb_app_id = null;
  google_siteVerification = {
    'id': 't2O2EjBohDKVx7CnlLKRymUgj_2_47RaJjbZwCj9Bj0'
  };
  toc = {
    'article': true,
    'aside': false
  };
  facebook_url = 'https://www.facebook.com/KanadeLeung';
  github_url = 'https://github.com/Tsuki';
  google_plus_url = 'https://plus.google.com/+IzayoiKana';
  sitemap = {
    'path': 'sitemap.xml'
  };
  feed = {
    'type': 'atom',
    'path': 'atom.xml',
    'limit': 20,
    'hub': null
  };
  friends: [Friend] = [
    {
      name: '梦路',
      url: 'https://blog.ikke.moe/'
    }
  ];

  constructor() {


  }
}

interface Friend {
  name: string;
  url: string
}

interface Menu {
  name: string;
  path: string;
  _class: string;
  layout: number;
  enable?: boolean;
}
