export default function NextButton({
  text = '다음',
  onClick,
  disabled = false,
  type = 'button',
}: {
  text?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="rounded-full max-w-[160px] mt-10 mx-auto bg-black text-white px-10 py-2 hover:bg-black/70 disabled:bg-gray-300"
    >
      {text}
    </button>
  )
}
