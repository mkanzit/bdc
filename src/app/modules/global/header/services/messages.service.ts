import { Injectable } from '@angular/core';
import { MessageList } from '../../../../shared/_models/messages.model';

@Injectable()
export class MessagesService {

  messages: MessageList;
  messagesArab: MessageList;

  constructor() {
    this.messages = {
      'title': 'Messages',
      'counter': '11',
      'links': [
        {'href': '/login', 'title': 'lien', 'text': 'Login'},
        {'href': '/process', 'title': 'lien', 'text': 'Process'},
        {'href': '/offers', 'title': 'lien', 'text': 'Offers'},
        {'href': '/detail', 'title': 'lien', 'text': 'Détails'},
        {'href': '/news', 'title': 'lien', 'text': 'Actualités'},
        {'href': '/faq', 'title': 'lien', 'text': 'FAQ'},
        {'href': '/alerts', 'title': 'lien', 'text': 'Alerts'},
        {'href': '/notifications', 'title': 'lien', 'text': 'Notifications'},
        {'href': '/flash-news', 'title': 'lien', 'text': 'Flash news'},
        {'href': '/favorites', 'title': 'lien', 'text': 'Favoris'},
        {'href': '/offres-migrations', 'title': 'lien', 'text': 'Offres des migrations'},
        {'href': '/roaming', 'title': 'رابط', 'text': 'Roaming'},
        {'href': '/edoc', 'title': 'lien', 'text': 'E-documentation'},
        {'href': '/points-de-ventes', 'title': 'lien', 'text': 'Points de ventes'},
        {'href': '/quiz', 'title': 'lien', 'text': 'Quiz'},
        {'href': '/catalogue', 'title': 'lien', 'text': 'Catalogue'},
        {'href': '/scripting', 'title': 'lien', 'text': 'Scripting'},
        {'href': '/plan-du-site', 'title': 'lien', 'text': 'Plan du site'},
        {'href': '/maintenance', 'title': 'lien', 'text': 'Page maintenance'},
        {'href': '/error-page', 'title': 'lien', 'text': 'Page d\'erreur'},
      ]
    };

    this.messagesArab = {
      'counter': '11',
      'title': 'رسائل',
      'links': [
        {'href': '/login', 'title': 'رابط', 'text': 'دخول'},
        {'href': '/process', 'title': 'رابط', 'text': 'عملية'},
        {'href': '/offers', 'title': 'رابط', 'text': 'عروض'},
        {'href': '/detail', 'title': 'رابط', 'text': 'تفاصيل'},
        {'href': '/news', 'title': 'رابط', 'text': 'أخبار'},
        {'href': '/faq', 'title': 'رابط', 'text': 'التعليمات'},
        {'href': '/alerts', 'title': 'رابط', 'text': 'اشعارات'},
        {'href': '/notifications', 'title': 'رابط', 'text': 'إخطارات'},
        {'href': '/flash-news', 'title': 'رابط', 'text': 'خبر عاجل'},
        {'href': '/favorites', 'title': 'رابط', 'text': 'مفضل'},
        {'href': '/promotions', 'title': 'رابط', 'text': 'العروض الخاصة'},
        {'href': '/offres-migrations', 'title': 'رابط', 'text': 'تقدم الهجرة'},
        {'href': '/roaming', 'title': 'رابط', 'text': 'تجوال'},
        {'href': '/edoc', 'title': 'رابط', 'text': 'توثيق'},
        {'href': '/points-de-ventes', 'title': 'رابط', 'text': 'نقاط البيع'},
        {'href': '/quiz', 'title': 'رابط', 'text': 'Quiz'},
        {'href': '/catalogue', 'title': 'رابط', 'text': 'الكتالوج'},
        {'href': '/scripting', 'title': 'رابط', 'text': 'البرمجة'},
        {'href': '/plan-du-site', 'title': 'رابط', 'text': 'خريطة الموقع'},
        {'href': '/maintenance', 'title': 'رابط', 'text': 'صفحة صيانة'},
        {'href': '/error-page', 'title': 'رابط', 'text': 'صفحة الخطأ'},
      ]
    };
  }

  getMessages() {
    return this.messages;
  }

  getMessagesArab() {
    return this.messagesArab;
  }

}
