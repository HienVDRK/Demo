import sanpham from '../../sp.json'

export default (req, res) => {
  res.status(200).json(sanpham)
}
