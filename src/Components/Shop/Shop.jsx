import './Shop.css'

function Shop() {
  return (
    <div className='cards'>
    <div class="card">
        <div className='card-img'>
            <img src="./product.png" alt="buy card"/>        
        </div>

        <div className='card-info'>
        <h3 className='card-title'>Mars Pen</h3>
        <p className='card-price'>49🪙 <span>| 13 ta qoldi</span></p>
         <button>Sotib olish</button>
        </div>
    </div>
    </div>
  )
}

export default Shop