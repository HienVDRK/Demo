import Head from 'next/head'
import Link from 'next/link'

function Header () {
  return (
    <div>
      <Head>
        <title>Trang chủ</title>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' />
      </Head>

      <nav className='navbar navbar-inverse'>
        <Link href='/index'>
          <a className='navbar-brand'>Trang chủ</a>
        </Link>
        <ul className='nav navbar-nav'>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
