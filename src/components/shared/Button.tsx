import Image from 'next/image'

type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  iconSrc?: string
}

const Button = ({ text, onClick, className, iconSrc }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden border-none px-8 py-3 rounded-full font-semibold text-white shadow-md transition-transform duration-300 ease-in-out transform hover:opacity-95 hover:translate-y-[-5px] active:translate-y-0 ${className}`}
    >
      <span className="absolute inset-0 z-0 button-gradient rounded-lg" />
      <div className="flex items-center justify-center gap-2">
        <span className="relative z-10">
          <Image src={iconSrc!} alt={text} width={28} height={28} />
        </span>
        <span className="relative z-10">{text}</span>
      </div>
    </button>
  )
}

export default Button
