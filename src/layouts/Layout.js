import Header from '../components/Header'
function Layout (props) {
  return (
    <div className='container'>
      <Header />
      {props.children}
    </div>
  )
}
export default Layout
