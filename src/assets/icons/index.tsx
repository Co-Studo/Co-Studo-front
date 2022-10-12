import AnonymousMint from '@assets/icons/anonymous-mint.svg';
import Bell from '@assets/icons/bell.svg';
import Crown from '@assets/icons/crown.svg';
import Lock from '@assets/icons/lock.svg';
import Star from '@assets/icons/star.svg';

export type IconName = 'anonymous-mint' | 'bell' | 'crown' | 'lock' | 'star';

export const icon = (name: IconName) => {
  switch (name) {
    case 'anonymous-mint':
      return AnonymousMint;
    case 'bell':
      return Bell;
    case 'crown':
      return Crown;
    case 'lock':
      return Lock;
    case 'star':
      return Star;
    default:
      return null;
  }
};
