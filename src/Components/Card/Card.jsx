
function Card({price,title,imglink}) {
  return (
    <div className="card">
        <div className='card-img'>
            <img src={imglink} alt="buy card"/>        
        </div>

        <div className='card-info'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-price'>{price}🪙 <span>| 13 ta qoldi</span></p>
         <button>Sotib olish</button>
         
        </div>
    </div>
  )
}

export default Card