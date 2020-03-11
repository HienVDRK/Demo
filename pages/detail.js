import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Layout from '../src/layouts/Layout'
import { listSanpham } from '../listSanpham'

class Detail extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const idSanPham = this.props.router.query.id
    const getSanpham = listSanpham.find(x => x.id === Number.parseInt(idSanPham))
    return (
      <Layout>
        <h1>Sản phẩm: {getSanpham.tensanpham}</h1>
        <h1>Giá: {getSanpham.gia}</h1>
        <h1>Trạng thái: {getSanpham.status === true ? 'Còn hàng' : 'Hết hàng'}</h1>
        <img src={getSanpham.hinhanh} alt={getSanpham.tensanpham} />
      </Layout>
    )
  }
}

export default withRouter(Detail)
