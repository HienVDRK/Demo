import Link from 'next/link'

function SanPham (props) {
  return (
    <div>
      <Link
        as={`/detail?id=${props.value.id}`}
        href={{
          pathname: '/detail',
          query: {
            id: `${props.value.id}`
          }
        }}
      >
        <h3>Sản phẩm: {props.value.tensanpham}</h3>
      </Link>
      <h3>Giá: {props.value.gia}</h3>
      <h3>Trạng thái: {props.value.status === true ? 'Còn hàng' : 'Hết hàng'}</h3>
      <img src={props.value.hinhanh} alt={props.value.tensanpham} />
      <hr />
    </div>
  )
}

export default SanPham
