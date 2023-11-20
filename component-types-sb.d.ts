import {StoryblokStory} from 'storyblok-generate-ts'

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[];
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface FeatureStoryblok {
  image?: AssetStoryblok;
  name?: string;
  copy?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  headline?: string;
  columns?: (
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | MenuStoryblok
    | MenuItemStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  headline_rank?: "" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  headline?: string;
  subheadline?: string;
  background_image?: AssetStoryblok;
  layout?: "constrained" | "full-height";
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface MenuStoryblok {
  headline?: string;
  menu_items?: MenuItemStoryblok[];
  headline_rank?: "" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "menu";
  [k: string]: any;
}

export interface MenuItemStoryblok {
  name?: string;
  price?: string;
  description?: string;
  _uid: string;
  component: "menu_item";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface MenuLinkStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | MenuStoryblok
    | MenuItemStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  subheadline?: string;
  headline?: string;
  copy?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
