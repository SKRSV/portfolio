// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutPageFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Image */
  image?: Asset | undefined;
}

/** This is content for about page */

export interface IAboutPage extends Entry<IAboutPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'aboutPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IContactPageFields {
  /** Title */
  title?: string | undefined;

  /** Subtitle */
  subtitle?: Document | undefined;

  /** Image */
  image?: Asset | undefined;

  /** buttonText */
  buttonText?: string | undefined;
}

export interface IContactPage extends Entry<IContactPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'contactPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeaderFields {
  /** Socials */
  socials?: string[] | undefined;

  /** Logo */
  logo?: Asset | undefined;
}

/** Header content */

export interface IHeader extends Entry<IHeaderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'header';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomePageFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Person */
  person?: Asset | undefined;

  /** Home button */
  homeButton?: Document | undefined;
}

export interface IHomePage extends Entry<IHomePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'homePage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPortfolioPageFields {
  /** title */
  title?: string | undefined;

  /** subtitle */
  subtitle?: Document | undefined;

  /** buttonText */
  buttonText?: string | undefined;

  /** Images */
  images?: Asset[] | undefined;
}

/** Content for protfolio page */

export interface IPortfolioPage extends Entry<IPortfolioPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'portfolioPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IVideosFields {
  /** Video title */
  videoTitle?: Document | undefined;

  /** video */
  video?: string | undefined;
}

export interface IVideos extends Entry<IVideosFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'videos';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'aboutPage'
  | 'contactPage'
  | 'header'
  | 'homePage'
  | 'portfolioPage'
  | 'videos';

export type IEntry =
  | IAboutPage
  | IContactPage
  | IHeader
  | IHomePage
  | IPortfolioPage
  | IVideos;

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';