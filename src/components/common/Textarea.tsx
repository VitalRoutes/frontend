import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useId } from 'react';
import InputStyle from '@/utils/InputStyle';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

function Textarea(
  {
    placeholder,
    label,
    errorMessage,
    disabled = false,
    className = '',
    rows = 10,
  }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const uniqueId = useId();
  const hasError = !disabled && !!errorMessage;

  return (
    <div className="w-full">
      {label && (
        <label className="text-2xl font-semibold" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={`
              ${InputStyle.default({ hasError })}
              ${InputStyle.hover({ disabled, hasError })}
              ${InputStyle.focus({ disabled, hasError })}
              resize-none
              ${className}
            `}
          id={uniqueId}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        />
      </div>

      {hasError && (
        <span className="mt-2 text-sm text-alert">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Textarea);
