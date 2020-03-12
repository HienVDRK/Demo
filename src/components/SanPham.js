import Link from 'next/link'
import style from '../styles/index.module.css'

function SanPham (props) {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-8 col-md-8 col-lg-8'>
          <Link
            as={`/detail2/${props.value.id}`}
            href={{
              pathname: '/detail2',
              query: {
                id: `${props.value.id}`
              }
            }}
          >
            <span className={style.ten_sp}>Sản phẩm: {props.value.tensanpham}</span>
          </Link><br />
          <span className={style.gia_sp}>Giá: {props.value.gia}</span><br />
          <span className={style.trangthai_sp}>Trạng thái: {props.value.status === true ? 'Còn hàng' : 'Hết hàng'}</span><br />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className={style.hinhanh_sp} src={props.value.hinhanh} alt={props.value.tensanpham} />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SanPham
