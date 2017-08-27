import { Injectable } from '@angular/core';
import { FlashNews } from '../_models/flash-news.model';
import { FlashItem } from '../_models/flash-item.model';
@Injectable()
export class FlashNewsService {

  flashNews:  Array<FlashItem>;
  flashNewsArab:  Array<FlashItem>;

  constructor() {

    this.flashNews = [
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': '', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'Illustration', 'alt': 'Illustration'},
          'desc': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
    ]

    this.flashNewsArab = [
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': '', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
        {
          'vid': {'src': 'assets/imgs/contenus/flash-news.png', 'title': 'توضيح', 'alt': 'توضيح'},
          'desc': 'لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسشينغ إليت.'
        },
    ]
  }

  getFlashNews() {
    return this.flashNews;
  }

  getFlashNewsArab() {
    return this.flashNewsArab;
  }

}
