import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
      
{/*To do*/}


  <div className="store-name">
    <h2>MM Mega Market Bình Thạnh</h2>
  </div>  
  <div className="text">
    Đường Đinh Bộ Lĩnh, Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh
    <div>
      <img
        src="https://online.mmvietnam.com/wp-content/themes/yozi-child/assets/icon/w3w.svg"
        alt=""
        width="18"
        style={{ verticalAlign: 'baseline' }}
      />
      <a
        className="w3w-icon"
        href="https://what3words.com/"
        target="_blank"
        style={{ color: '#0672ba', marginLeft: '5px' }} rel="noreferrer"
      >
        Tìm vị trí chính xác
      </a>
    </div>

</div>

      </div>
    </footer>
  )
}

export default Footer