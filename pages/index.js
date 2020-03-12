import React, { Component } from 'react'
import Link from 'next/link'
import Pagination from 'react-js-pagination'
import { listSanpham } from '../listSanpham'
import Layout from '../src/layouts/Layout'
import style from '../src/styles/index.module.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tensanpham: '',
      sanpham: '',
      activePage: 1,
      totalResults: 0,
      PerPage: 5
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
            <div className='row'>
              <div className='col-sm-8 col-md-8 col-lg-8'>
                <Link
                  as={`/detail/${sanpham.id}`}
                  href={{
                    pathname: '/detail',
                    query: {
                      id: `${sanpham.id}`
                    }
                  }}
                >
                  <span className={style.ten_sp}>Sản phẩm: {sanpham.tensanpham}</span>
                </Link><br />
                <span className={style.gia_sp}>Giá: {sanpham.gia}</span><br />
                <span className={style.trangthai_sp}>Trạng thái: {sanpham.status === true ? 'Còn hàng' : 'Hết hàng'}</span><br />
              </div>
              <div className='col-sm-4 col-md-4 col-lg-4'>
                <img className={style.hinhanh_sp} src={sanpham.hinhanh} alt={sanpham.tensanpham} />
              </div>
            </div>
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
