import Close from '@/assets/icons/close.svg?react';
import VrLine from '@/assets/icons/vr_line.svg?react';
import UpArrow from '@/assets/icons/up_arrow.svg?react';
import RightArrow from '@/assets/icons/right_arrow.svg?react';
import Kebab from '@/assets/icons/kebab.svg?react';
import DownArrow from '@/assets/icons/down_arrow.svg?react';
import Bookmark from '@/assets/icons/bookmark.svg?react';
import BookmarkHover from '@/assets/icons/bookmark_hover.svg?react';
import Like from '@/assets/icons/like.svg?react';
import LikeHover from '@/assets/icons/like_hover.svg?react';
import Heart from '@/assets/icons/heart.svg?react';
import Comment from '@/assets/icons/comment.svg?react';
import View from '@/assets/icons/view.svg?react';

const Icon = {
  Close,
  VrLine,
  UpArrow,
  RightArrow,
  Kebab,
  DownArrow,
  Heart,
  Comment,
  View,

  Bookmark: () => (
    <div className="group">
      <Bookmark className="block group-hover:hidden" />
      <BookmarkHover className="hidden group-hover:block" />
    </div>
  ),

  Like: () => (
    <div className="group">
      <Like className="block group-hover:hidden" />
      <LikeHover className="hidden group-hover:block" />
    </div>
  ),
};

export default Icon;
