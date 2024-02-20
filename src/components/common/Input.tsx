import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';
import InputStyle from '@/utils/InputStyle';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

function Input(
  {
    placeholder,
    label,
    type,
    errorMessage,
    disabled = false,
    className = '',
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
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
      <div className="relative">
        <input
          className={`
              ${InputStyle.default({ hasError })}
              ${InputStyle.hover({ disabled, hasError })}
              ${InputStyle.focus({ disabled, hasError })}
              ${className}
            `}
          type={type}
          id={uniqueId}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {hasError && (
        <span className="mt-2 text-sm text-alert">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Input);
