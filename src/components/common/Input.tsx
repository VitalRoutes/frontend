import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';
import { CloseIcon } from '../icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  onResetClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Input(
  { placeholder, label, type, errorMessage, disabled, onResetClick }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();
  const hasError = !disabled && !!errorMessage;

  const errorClass = hasError
    ? 'border-alert focus:border-alert hover:shadow-none text-alert'
    : '';

  const hoverClass = (() => {
    if (disabled) return '';
    if (hasError) return '';
    return 'hover:shadow-[0_0_0_3px_#D7FF0066]';
  })();

  const focusClass = (() => {
    if (disabled) return '';
    if (hasError) return 'focus:border-alert hover:shadow-none';
    return 'focus:border-green-1';
  })();

  const borderClass = (() => {
    if (disabled) return 'border-gray-5';
    if (hasError) return 'border-alert';
    return 'border-gray-5';
  })();

  return (
    <div className="relative">
      {label && (
        <label className="text-2xl font-semibold" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={` w-full rounded-xl border-2 px-6 py-[1.875rem] text-lg outline-none 
            placeholder:text-gray-3 
            disabled:bg-gray-7
            ${borderClass}
            ${hoverClass}
            ${focusClass}
            ${errorClass}
            `}
          type={type}
          id={uniqueId}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
        />
        {hasError && (
          <button
            type="button"
            className="absolute right-[1.875rem] top-1/2 -translate-y-1/2"
            aria-label="reset"
            onClick={onResetClick}
          >
            <CloseIcon className="fill-gray-5" />
          </button>
        )}
      </div>

      {hasError && (
        <span className="mt-2 text-sm text-alert">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Input);
