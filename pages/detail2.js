import React, { Component } from 'react'
import Layout from '../src/layouts/Layout'
import { listSanpham } from '../listSanpham'

class Detail extends Component {
  static getInitialProps ({ query }) {
    const id = query.id
    const getSanpham = listSanpham.find(x => x.id === Number.parseInt(id))
    if (getSanpham) {
      return getSanpham
    }
  }

  render () {
    return (
      <Layout>
        <h1>Sản phẩm: {this.props.tensanpham}</h1>
        <h1>Giá: {this.props.gia}</h1>
        <h1>Trạng thái: {this.props.status === true ? 'Còn hàng' : 'Hết hàng'}</h1>
        <img src={this.props.hinhanh} alt={this.props.tensanpham} />
      </Layout>
    )
  }
}

export default Detail
