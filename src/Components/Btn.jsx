const Btn = ({iconURL,label,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
  <button className={`flex justify-center items-center 
  gap-2 px-7 py-4 border font-montserrat text-lg leading-none
  ${
    backgroundColor ? `${backgroundColor} ${borderColor}  ${textColor} `
    :'bg-coral-red text-white  '}
    rounded-full ${fullWidth && "w-full"}
  `}>
    {label}
    {iconURL && (
        <img src={iconURL} alt="icon_arrow" className='ml-2 
    rounded-full bg-white w-5 h-5' />)}</button>
  )
}

export default Btn