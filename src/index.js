import featureImage from './feature.png';
import iconImage from './icon.png';

export default {
  name: 'ESPNOW Broadcast',
  description: 'Broadcast the messages via the ESPNOW.',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'espnow'],

  // l10n
  translations: {
    en: {
      name: 'ESPNOW Broadcast',
      description: 'Broadcast the messages via the ESP-NOW.',
    },
    'zh-Hans': {
      name: '无线广播',
      description: '通过 ESP-NOW 广播消息。',
    },
  },
};
