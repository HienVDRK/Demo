import React, { Component } from 'react'
import Link from 'next/link'
import Pagination from 'react-js-pagination'
import { listSanpham } from '../listSanpham'
import Layout from '../src/layouts/Layout'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tensanpham: '',
      sanpham: '',
      activePage: 1,
      totalResults: 0,
      PerPage: 3
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
    let getSanpham
    if (tukhoa) {
      getSanpham = listSanpham.filter(x => x.tensanpham === tukhoa)
    } else {
      getSanpham = listSanpham
    }
    this.setState({
      sanpham: getSanpham,
      totalResults: getSanpham.length
    })
  }

  handlePageChange = async (number) => {
    await this.setState({
      activePage: number
    })
  }

  componentWillMount () {
    this.setState({
      totalResults: listSanpham.length
    })
  }

  render () {
    const data = this.state.sanpham || listSanpham
    const indexOfLastTodo = this.state.activePage * this.state.PerPage
    const indexOfFirstTodo = indexOfLastTodo - this.state.PerPage
    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo)
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
        <h3>Tìm thấy {data.length} bản ghi</h3> <hr />
        {currentTodos.map((sanpham, index) => (
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
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.PerPage}
          totalItemsCount={this.state.totalResults}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        />
      </Layout>
    )
  }
}

export default Home
