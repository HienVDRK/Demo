import React, { Component } from 'react'
import { listSanpham } from '../listSanpham'
import Layout from '../src/layouts/Layout'
import SanPham from '../src/components/SanPham'

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
          <SanPham value={sanpham} key={index} />
        ))}
      </Layout>
    )
  }
}

export default Home
