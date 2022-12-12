import Bell from '@assets/icons/bell.svg';
import Crown from '@assets/icons/crown.svg';
import Lock from '@assets/icons/lock.svg';
import More from '@assets/icons/more.svg';
import Star from '@assets/icons/star.svg';

export const icon = {
  bell: Bell,
  crown: Crown,
  lock: Lock,
  star: Star,
  more: More,
};

export type IconName = keyof typeof icon;
