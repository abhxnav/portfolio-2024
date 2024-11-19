import Image from 'next/image'

type ButtonProps = {
  text?: string
  onClick?: () => void
  className?: string
  iconSrc?: string
  noGradient?: boolean
}

const Button = ({
  text,
  onClick,
  className,
  iconSrc,
  noGradient = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden sm:px-8 sm:py-3 px-3 py-2 rounded-full font-semibold text-white shadow-md transition-transform duration-300 ease-in-out transform hover:opacity-95 hover:translate-y-[-5px] active:translate-y-0 ${className}`}
    >
      {!noGradient && (
        <span className="absolute inset-0 z-0 button-gradient rounded-lg" />
      )}
      <div className="flex items-center justify-center gap-2">
        {iconSrc && (
          <span className="relative z-10">
            <Image
              src={iconSrc!}
              alt={text || ''}
              width={28}
              height={28}
              className="md:size-7 sm:size-6 size-4"
            />
          </span>
        )}
        {text && (
          <span className="relative z-10 sm:text-base text-xs">{text}</span>
        )}
      </div>
    </button>
  )
}

export default Button
