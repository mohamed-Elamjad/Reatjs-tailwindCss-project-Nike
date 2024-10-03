const ShoeCard = ({item,ShoeImage,changeImage}) => {
  const handel_change_click=()=>{
    if (ShoeImage !==  item.bigShoe) {
      changeImage(item.bigShoe)
    }
  }
  return (
    <div  className={` border-2 rounded-xl ${
      ShoeImage === item.bigShoe  
      ? 'border-coral-red'
      :'border-transparent'
    } cursor-pointer max-sm:flex-1`}
    onClick={handel_change_click}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={item.thumbnail} alt="shoe collection" 
        width={127}
        height={103.34}
        className="object-contain"
        />
      </div>
    </div>
  )
}
export default ShoeCard