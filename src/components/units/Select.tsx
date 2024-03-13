import { MouseEventHandler, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from '../icons';
import useSelectionPopup from '@/hooks/useSelectionPopup';
import { selectionPopupStore } from '@/store/selectionPopupStore';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function SelectButton({ onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { closeSelectionPopup } = useSelectionPopup();
  const { selectionPopup, position } = selectionPopupStore();

  useEffect(() => {
    const closeWhenClickOutside = ({ target }: MouseEvent) => {
      if (!ref.current) return;
      if (target instanceof Element && ref.current.contains(target)) return;
      closeSelectionPopup();
    };
    window.addEventListener('click', closeWhenClickOutside);
    return () => window.removeEventListener('click', closeWhenClickOutside);
  });

  return (
    <div ref={ref}>
      <button type="button" aria-label="selecct" onClick={onClick}>
        <Icon.Kebab
          className="ml-auto mr-0 fill-gray-1"
          height={32}
          width={32}
        />
      </button>
      <AnimatePresence>
        {selectionPopup && (
          <div
            className="z-selection-popup absolute"
            style={{ top: position.y, left: position.x }}
          >
            {selectionPopup}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SelectButton;
