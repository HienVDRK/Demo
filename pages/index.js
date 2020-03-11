import React, { Component } from 'react'
import Link from 'next/link'
import { listSanpham } from '../listSanpham'
import Layout from '../src/layouts/Layout'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tensanpham: '',
      sanpham: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSearch = (e) => {
    e.preventDefault()
    const tukhoa = this.state.tensanpham
    const getSanpham = listSanpham.filter(x => x.tensanpham === tukhoa)
    this.setState({ sanpham: getSanpham })
  }

  render () {
    const data = this.state.sanpham || listSanpham
    return (
      <Layout>
        <form onSubmit={this.handleOnSearch}>
          <input
            type='text'
            name='tensanpham'
            onChange={this.handleOnChange}
            value={this.state.tensanpham}
            className='form-control'
            placeholder='Nhập tên sản phẩm'
          />
          <br />
          <button type='submit' className='btn btn-primary'>Tìm kiếm</button>
        </form>

        {data.map((sanpham, index) => (
          <div key={index}>
            <Link
              as={`/detail/${sanpham.id}`}
              href={{
                pathname: '/detail',
                query: {
                  id: `${sanpham.id}`
                }
              }}
            >
              <h3>Sản phẩm: {sanpham.tensanpham}</h3>
            </Link>
            <h3>Giá: {sanpham.gia}</h3>
            <h3>Trạng thái: {sanpham.status === true ? 'Còn hàng' : 'Hết hàng'}</h3>
            <img src={sanpham.hinhanh} alt={sanpham.tensanpham} />
            <hr />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home
