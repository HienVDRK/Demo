import React, { Component } from 'react'
import Layout from '../src/layouts/Layout'
import SanPham from '../src/components/SanPham'
// import axios from 'axios'
import fetch from 'isomorphic-unfetch'

class Home2 extends Component {
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
    const getSanpham = this.props.data.filter(x => x.tensanpham === tukhoa)
    this.setState({ sanpham: getSanpham })
  }

  render () {
    const data = this.state.sanpham || this.props.data
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
        <hr />
        {data.map((sanpham, index) => (
          <SanPham value={sanpham} key={index} />
        ))}
      </Layout>
    )
  }
}

Home2.getInitialProps = async ctx => {
  const res = await fetch(`http://localhost:${process.env.PORT}/api/products`)
  const json = await res.json()
  return { data: json }

  // const res = await axios.get('http://localhost:3500/api/products')
  // return { data: res.data }
}

export default Home2
