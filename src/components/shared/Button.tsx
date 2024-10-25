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
      className={`relative overflow-hidden lg:px-8 lg:py-3 md:px-5 md:py-2 sm:px-3 px-2 py-1 rounded-full font-semibold text-white shadow-md transition-transform duration-300 ease-in-out transform hover:opacity-95 hover:translate-y-[-5px] active:translate-y-0 ${className}`}
    >
      {!noGradient && (
        <span className="absolute inset-0 z-0 button-gradient rounded-lg" />
      )}
      <div className="flex items-center justify-center gap-2">
        <span className="relative z-10">
          <Image
            src={iconSrc!}
            alt={text || ''}
            width={28}
            height={28}
            className="lg:size-7 md:size-4 sm:size-3 size-2"
          />
        </span>
        {text && (
          <span className="relative z-10 lg:text-base md:text-[10px] sm:text-[8px] text-[6px]">
            {text}
          </span>
        )}
      </div>
    </button>
  )
}

export default Button
